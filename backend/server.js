const express = require('express');
const cors = require('cors');
require('dotenv').config();

const proposalRoutes = require('./routes/proposalRoutes');
const hireRoutes = require('./routes/hireRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/proposals', proposalRoutes);
app.use('/api', hireRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('TrustlyHub API is running...');
});

// Start Server
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port ${process.env.PORT || 4000}`);
});