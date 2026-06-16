'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PostJobPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        budget: '',
        skills: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch('http://localhost:4000/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    budget: parseFloat(formData.budget),
                    skills: formData.skills.split(',').map(s => s.trim())
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to post job');
            }

            alert('Job posted successfully!');
            router.push('/jobs');
        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <Link href="/jobs" className="text-blue-500 hover:underline mb-4 inline-block">
                ← Back to Jobs
            </Link>

            <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Job Title *</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                        placeholder="e.g., Need a React Developer"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Description *</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full border rounded-lg px-4 py-2 h-40 focus:ring-2 focus:ring-blue-500"
                        required
                        placeholder="Describe the job in detail..."
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Budget ($) *</label>
                    <input
                        type="number"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                        placeholder="e.g., 1000"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Skills Required</label>
                    <input
                        type="text"
                        value={formData.skills}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="React, Node.js, PostgreSQL (comma separated)"
                    />
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? 'Posting...' : 'Post Job'}
                </button>
            </form>
        </div>
    );
}