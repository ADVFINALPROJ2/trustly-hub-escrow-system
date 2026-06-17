 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from './components/Navbar';

/* FAQ COMPONENT */
 function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 py-4 transition-all duration-300">
      <button
        className="w-full flex items-center justify-between text-left gap-4 py-2 group"
        onClick={onToggle}
      >
        <span className="text-gray-900 font-semibold text-base leading-snug group-hover:text-emerald-600 transition-colors">
          {question}
        </span>

        <span
          className={`flex-shrink-0 w-7 h-7 rounded flex items-center justify-center font-bold text-base transition-all duration-300 ${
            isOpen
              ? 'bg-emerald-500 text-white rotate-45'
              : 'bg-white text-emerald-500'
          }`}
          style={{
            border: isOpen ? 'none' : '2px solid #10b981',
          }}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-[200px] opacity-100 mt-2'
            : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-3 text-gray-500 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function LandingPage() {
  
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  // 2. ADD THIS FAQ CONTENT DATA ARRAY:
  const faqData = [
    {
      question: "What is Escrow and how does it work?",
      answer: "Escrow is a secure arrangement where a neutral third party holds funds until both buyer and seller fulfil their agreed terms. TrustlyHub acts as that trusted intermediary, releasing funds only when both parties confirm the transaction is complete."
    },
    {
      question: "What happens if there is a dispute?",
      answer: "If a dispute arises, our dedicated resolution team steps in to review the evidence from both parties and mediates a fair outcome. We aim to resolve all disputes within 3–5 business days."
    },
    {
      question: "How long does it take to release funds?", 
      answer: "Once the buyer approves the delivery, funds are released instantly to the seller. Bank processing may add 1–2 business days depending on your payment method."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#041018]/90 backdrop-blur-md border-b border-slate-800/40">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2.5">

            <Image
              src="/logo.png"
              alt="TrustlyHub"
              width={28}
              height={28}
              priority style={{ width: 'auto', height: 'auto' }} 
            />

            <span className="bg-gradient-to-r from-[#00e699] to-[#00b0ff] bg-clip-text text-transparent">
              TrustlyHub
            </span>
        </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-[#00e699] text-xs font-semibold uppercase tracking-wide"
            >
              How It Works
            </a>

            <a
              href="#features"
              className="text-gray-300 hover:text-[#00e699] text-xs font-semibold uppercase tracking-wide"
            >
              Features
            </a>

            <a
              href="#faq"
              className="text-gray-300 hover:text-[#00e699] text-xs font-semibold uppercase tracking-wide"
            >
              FAQ
            </a>
          </nav>

          {/* AUTH BUTTONS */}

          <div className="flex items-center gap-4">
            <Link
              href="/auth/login"
              className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide text-[#00e699] border border-[#00e699] bg-transparent transition-all duration-300 hover:bg-[#00e699] hover:text-[#050d14] hover:shadow-[0_0_15px_rgba(0,230,153,0.2)] focus:outline-none"
            >
              Sign In
            </Link>

            <Link 
                 href="/auth/register" 
                 className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide text-[#00e699] border border-[#00e699] bg-transparent transition-all duration-300 hover:bg-[#00e699] hover:text-[#050d14] hover:shadow-[0_0_15px_rgba(0,230,153,0.2)] focus:outline-none"
              >
                Sign Up
            </Link>

          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section
        style={{
          background:
            'linear-gradient(180deg,#041018 0%,#071a26 55%,#0a2435 100%)',
          paddingTop: '64px',
          minHeight: '100vh',
        }}
      >
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">

          {/* LEFT */}

          <div className="text-white">

            <h1 className="text-[56px] sm:text-[72px] font-black leading-[0.95] tracking-tight mb-8">
              Secure
              <br />
              Payment
              <br />
              With
              <br />
              <span className="bg-gradient-to-r from-[#00e699] to-[#00b0ff] bg-clip-text text-transparent">
                TrustlyHub
              </span>
            </h1>

            <p className="text-gray-300 text-base leading-relaxed max-w-sm mb-12">
              Handle your funds safely until both parties approve the
              transaction; where your money is protected every step of the way.
            </p>

            <Link
              href="/auth/register"
              className="inline-block px-10 py-3.5 rounded-full font-bold text-[#03150d] text-base tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background:
                  'linear-gradient(135deg,#00e65b 0%,#00b341 100%)',
                boxShadow:
                  '0 8px 24px rgba(0,230,91,0.25)',
              }}
            >
              Start Transaction
            </Link>
          </div>

          {/* RIGHT */}

          <div
            id="how-it-works"
            className="rounded-2xl p-8"
            style={{
              background: '#0b1f30',
              border: '1px solid #14354f',
            }}
          >
            <p className="text-[#00e699] text-base font-semibold mb-7 uppercase tracking-wider">
              How it works
            </p>

            <div className="space-y-4">

              {[
                {
                  n: '1',
                  title: 'Buyer Starts Transaction',
                  desc:
                    'Buyer creates an escrow agreement and seller accepts the invite. Terms are agreed before any money movement.',
                },

                {
                  n: '2',
                  title: 'Buyer Deposits Funds',
                  desc:
                    'Funds are securely held in escrow and protected from fraud until both parties complete their obligations.',
                },

                {
                  n: '3',
                  title: 'Seller Delivers Services',
                  desc:
                    'Seller fulfills the agreed work knowing payment is secured.',
                },
                 {
                  n: '4',
                  title: 'Funds Released After Approval',
                  desc:
                    'Buyer confirms completion and funds are instantly released.',
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="flex gap-5 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:shadow-[0_10px_25px_rgba(0,230,153,0.12)]"
                >


                  <div
                    className="flex-shrink-0 text-sm font-bold mt-0.5 pb-0.5 border-b-2"
                    style={{
                      color: '#00e699',
                      borderColor: '#00e699',
                    }}
                  >
                    {step.n}
                  </div>

                  <div>
                    <p className="text-white font-bold text-sm mb-1.5">
                      {step.title}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* ================= FEATURES & STATS SECTION ================= */}
<section 
  id="features" 
  className="py-20 pb-12" 
  style={{ background: 'linear-gradient(180deg, #d3e8e1 0%, #e6f2ee 35%, #f5faf8 70%, #ffffff 100%)' }}
>
  <div className="max-w-6xl mx-auto px-8">
    <p className="text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-3">
      Why choose us
    </p>
    <h2 className="text-gray-900 text-4xl font-extrabold leading-tight mb-5 max-w-md">
      The Reliable way to <br /> handle transactions
    </h2>
    <p className="text-gray-600 text-sm leading-relaxed max-w-xl mb-14">
      Every feature is crafted to ensure both buyers and sellers feel protected, confident and fully informed throughout the transaction lifecycle.
    </p>
    
    {/* The Four Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-0">
      {[
        {
          icon: (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          title: 'Secure Fund Holding',
          desc: 'Funds remain protected in escrow until all agreed conditions are fulfilled.',
        },
        {
          icon: (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: 'Instant Releases',
          desc: 'Funds are released immediately after approval without unnecessary delays.',
        },
        {
          icon: (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          ),
          title: 'Dispute Resolution',
          desc: 'Independent mediation helps resolve conflicts fairly and transparently.',
        },
        {
          icon: (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          title: 'Real Time Tracking',
          desc: 'Monitor transaction progress and milestones from start to finish.',
        },
      ].map((f) => (
        <div 
          key={f.title} 
          className="p-6 min-h-[240px] flex flex-col gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl" 
          style={{ 
            background: '#092233', 
            borderRadius: '6px' 
          }} 
        >
          <div className="opacity-90">{f.icon}</div>
          <h3 className="text-white font-bold text-lg leading-snug">
            {f.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
       <div className="w-full bg-white py-6" />
        </div>
      
{/* STATS RIBBON — outside max-w-6xl but inside features section */}
  <div 
    className="w-full px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
    style={{
      background: 'rgba(211, 232, 225, 0.6)',
      borderTop: '1px solid rgba(6, 95, 70, 0.1)',
      borderBottom: '1px solid rgba(6, 95, 70, 0.1)',
    }}
  >
    <div className="flex flex-wrap items-baseline gap-x-16 gap-y-6 flex-1">
      <div className="flex flex-col">
        <span className="text-[#092233] text-4xl font-black tracking-tight">500K+</span>
        <span className="text-emerald-900/70 text-xs mt-1 font-semibold tracking-wide">Active users</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#092233] text-4xl font-black tracking-tight flex items-center gap-1">
          4.9<span className="text-emerald-600 text-3xl">★</span>
        </span>
        <span className="text-emerald-900/70 text-xs mt-1 font-semibold tracking-wide">Average rating</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#092233] text-4xl font-black tracking-tight">48hr</span>
        <span className="text-emerald-900/70 text-xs mt-1 font-semibold tracking-wide">Avg dispute resolution</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#092233] text-4xl font-black tracking-tight leading-none">256-bit</span>
        <span className="text-emerald-900/70 text-xs mt-1 font-semibold tracking-wide">SSL encryption</span>
      </div>
    </div>

    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-600/20 bg-white/60 shadow-sm flex-shrink-0">
      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
      <span className="text-emerald-800 text-xs font-bold tracking-wide">Bank-level security</span>
    </div>
    </div>
</section>
 
 {/* ================= FAQ ================= */}
<section
  id="faq"
  className="bg-white pt-8 pb-24"
>
  <div className="max-w-6xl mx-auto px-8">

    <p className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-xs mb-3">
      Support
    </p>

    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      Frequently Asked Questions
    </h2>

    <p className="text-gray-500 max-w-xl mb-12">
      Everything you need to know about using TrustlyHub and securing
      your transactions.
    </p>

    <div className="divide-y divide-gray-100 border-t border-gray-100">
       {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openFAQIndex === index}
          onToggle={() =>
            setOpenFAQIndex(
              openFAQIndex === index ? null : index
            )
          }
        />
      ))}

    </div>
  </div>
</section>

{/* ================= FOOTER ================= */}
<footer
  className="text-gray-400 pt-20 pb-8 border-t border-slate-800/40"
  style={{
    background: '#071624',
  }}
>
  <div className="max-w-6xl mx-auto px-8">

   <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

  {/* BRAND */}
  <div>
    <div className="flex items-center gap-2 mb-5">
      <Image src="/logo.png" 
             alt="TrustlyHub" width={28} height={28} priority // Recommended for logos/above-the-fold images
  style={{ width: 'auto', height: 'auto' }}  />
      <span className="text-white font-bold text-lg">Trustly<span className="text-[#00e699]">Hub</span></span>
    </div>
    <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
      Secure escrow infrastructure built for modern commerce. Protecting buyers and sellers every step of the way.
    </p>
  </div>

  {/* PRODUCTS */}
  <div>
    <h4 className="text-white font-semibold mb-5">Products</h4>
    <ul className="space-y-3 text-sm">
      <li><a href="#how-it-works" className="hover:text-white transition">How it works</a></li>
      <li><a href="#features" className="hover:text-white transition">Features</a></li>
      <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
    </ul>
  </div>

  {/* COMPANY */}
  <div>
    <h4 className="text-white font-semibold mb-5">Company</h4>
    <ul className="space-y-3 text-sm">
      <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
      <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
      <li><a href="#" className="hover:text-white transition">Security</a></li>
    </ul>
  </div>

  {/* CONTACT */}
  <div>
    <h4 className="text-white font-semibold mb-5">Contact</h4>
    <ul className="space-y-4 text-sm">
      <li className="flex items-center gap-2">
        <svg className="w-4 h-4 text-[#00e699] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        support@trustlyhub.com
      </li>
      <li className="flex items-center gap-2">
        <svg className="w-4 h-4 text-[#00e699] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        +251 912 214 567
      </li>
      <li className="flex items-center gap-2">
        <svg className="w-4 h-4 text-[#00e699] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Megenagna, Addis Ababa
      </li>
      <li className="flex items-center gap-2">
        <svg className="w-4 h-4 text-[#00e699] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Mon – Fri · 8:00 AM – 6:00 PM
      </li>
    </ul>
  </div>

</div>
{/* BOTTOM BAR */}
    <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-xs text-gray-500">
        © 2026 TrustlyHub. All rights reserved.
      </p>

      <div className="flex items-center gap-6 text-xs">

        <a
          href="#"
          className="hover:text-white transition"
        >
          Privacy
        </a>

        <a
          href="#"
          className="hover:text-white transition"
        >
          Terms
        </a>

        <a
          href="#"
          className="hover:text-white transition"
        >
          Cookies
        </a>

      </div>

    </div>

  </div>
</footer>
</div>
  );
}
