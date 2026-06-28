const express = require('express');
const router = express.Router();
const pool = require('../shared/db/pool');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

router.post('/proposals/:proposalId/accept', verifyToken, async (req, res) => {
  try {
    const { proposalId } = req.params;
    const clientId = req.user.id;
    const { amount } = req.body;

    if (!amount) return res.status(400).json({ error: 'Amount required' });

    const proposal = await pool.query('SELECT * FROM proposals WHERE id = $1', [proposalId]);
    if (proposal.rows.length === 0) return res.status(404).json({ error: 'Proposal not found' });

    const { job_id, freelancer_id } = proposal.rows[0];

    const job = await pool.query('SELECT * FROM jobs WHERE id = $1', [job_id]);
    if (job.rows[0].client_id !== clientId) return res.status(403).json({ error: 'Unauthorized' });

    await pool.query('UPDATE proposals SET status = $1 WHERE id = $2', ['accepted', proposalId]);

    const escrow = await pool.query(
      'INSERT INTO escrow_transactions (job_id, freelancer_id, client_id, amount, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [job_id, freelancer_id, clientId, amount, 'pending_deposit']
    );

    res.json({ message: 'Proposal accepted, escrow created', escrow: escrow.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/proposals/:proposalId/reject', verifyToken, async (req, res) => {
  try {
    const { proposalId } = req.params;
    const clientId = req.user.id;

    const proposal = await pool.query('SELECT * FROM proposals WHERE id = $1', [proposalId]);
    if (proposal.rows.length === 0) return res.status(404).json({ error: 'Proposal not found' });

    const { job_id } = proposal.rows[0];
    const job = await pool.query('SELECT * FROM jobs WHERE id = $1', [job_id]);
    if (job.rows[0].client_id !== clientId) return res.status(403).json({ error: 'Unauthorized' });

    await pool.query('UPDATE proposals SET status = $1 WHERE id = $2', ['rejected', proposalId]);
    res.json({ message: 'Proposal rejected' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;