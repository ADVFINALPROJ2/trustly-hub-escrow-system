'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function JobDetailPage() {
    const params = useParams();
    const router = useRouter();
    const jobId = params.id;
    
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const userData = JSON.parse(atob(token.split('.')[1]));
                setUser(userData);
            } catch (e) {
                console.error('Invalid token');
            }
        }
        fetchJob();
    }, [jobId]);

    const fetchJob = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:4000/api/jobs/${jobId}`);
            if (!response.ok) throw new Error('Job not found');
            const data = await response.json();
            setJob(data);
        } catch (err) {
            setError('Failed to load job');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen text-xl">Loading...</div>;
    }

    if (error || !job) {
        return (
            <div className="flex justify-center items-center min-h-screen text-red-500 text-xl">
                {error || 'Job not found'}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/jobs" className="text-blue-500 hover:underline mb-4 inline-block">
                ← Back to Jobs
            </Link>

            <div className="border rounded-lg p-6 shadow">
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Budget: ${job.budget}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {job.status}
                    </span>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700">{job.description}</p>
                </div>

                {user && user.role === 'freelancer' && (
                    <button
                        onClick={() => setShowApplyForm(!showApplyForm)}
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                    >
                        {showApplyForm ? 'Cancel' : 'Apply for this Job'}
                    </button>
                )}

                {showApplyForm && (
                    <div className="mt-6 border-t pt-6">
                        <h3 className="text-xl font-semibold mb-4">Submit Proposal</h3>
                        <p className="text-gray-600">Proposal form coming soon...</p>
                    </div>
                )}
            </div>
        </div>
    );
}