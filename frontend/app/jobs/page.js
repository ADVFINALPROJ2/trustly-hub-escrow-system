'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:4000/api/jobs');
            if (!response.ok) throw new Error('Failed to fetch jobs');
            const data = await response.json();
            setJobs(data);
        } catch (err) {
            setError('Failed to load jobs');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Loading jobs...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Available Jobs</h1>
                <Link 
                    href="/jobs/post"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                    Post a Job
                </Link>
            </div>

            {jobs.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-xl">No jobs available right now.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
                            <Link href={`/jobs/${job.id}`}>
                                <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                                    {job.title}
                                </h2>
                            </Link>
                            <p className="text-gray-600 mt-2">{job.description}</p>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    Budget: ${job.budget}
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {job.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}