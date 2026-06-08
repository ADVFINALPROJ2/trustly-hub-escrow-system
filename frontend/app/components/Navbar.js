'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: '#050d1a',
        borderBottom: '1px solid rgba(16,185,129,0.15)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="TrustlyHub" width={36} height={36} />
        <span className="text-white font-bold text-base tracking-wide hidden sm:block">TrustlyHub</span>
      </Link>

      {/* Desktop nav links — centered */}
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <button className="flex items-center gap-1 hover:text-white transition">
          Home
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <a href="#how-it-works" className="flex items-center gap-1 hover:text-white transition">
          How it works
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a href="#features" className="flex items-center gap-1 hover:text-white transition">
          Features
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* CTA buttons — both outlined */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="/auth/register"
          className="px-5 py-1.5 rounded-full text-sm font-semibold border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
        >
          Sign up
        </Link>
        <Link
          href="/auth/login"
          className="px-5 py-1.5 rounded-full text-sm font-semibold border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {mobileOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-700 flex flex-col px-6 py-4 gap-4 md:hidden">
          <a href="#how-it-works" className="text-gray-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>How it works</a>
          <a href="#features" className="text-gray-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#faq" className="text-gray-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>FAQ</a>
          <Link href="/auth/register" className="text-green-400 font-semibold text-sm" onClick={() => setMobileOpen(false)}>Sign up</Link>
          <Link href="/auth/login" className="text-green-400 font-semibold text-sm" onClick={() => setMobileOpen(false)}>Sign In</Link>
        </div>
      )}
    </nav>
  );
}
