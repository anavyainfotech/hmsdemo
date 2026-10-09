"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@anavya.com');
  const [password, setPassword] = useState('demo123');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login and redirect to actual admin dashboard
    setTimeout(() => {
      setLoading(false);
      router.push('/admin');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-auto"
        >
          <Link href="/" className="inline-flex items-center gap-2 mb-12">
            <span className="text-2xl font-extrabold tracking-tight text-[#0B1221]">Anavya Hospital</span>
          </Link>

          <h1 className="text-4xl font-extrabold text-[#0B1221] mb-2">Staff Portal</h1>
          <p className="text-gray-500 mb-10">Sign in to manage appointments, patient records, and hospital operations.</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Work Email</label>
              <input 
                type="email" 
                required
                className="w-full px-5 py-4 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm" 
                placeholder="dr.smith@anavya.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-800">Forgot password?</a>
              </div>
              <input 
                type="password" 
                required
                className="w-full px-5 py-4 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-[#0B1221] text-white rounded-md font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20 flex items-center justify-center gap-2"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Sign In'}
            </button>
          </form>

          <div className="mt-10 text-sm text-gray-500 text-center">
            Secured by Anavya Enterprise Infrastructure
          </div>
        </motion.div>
      </div>

      {/* Right side - Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80" 
          alt="Hospital Staff" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full max-w-lg px-8 text-white"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl">
            <svg className="w-12 h-12 text-blue-200 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <h2 className="text-3xl font-extrabold mb-4">Unified Medical Dashboard</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Access real-time patient data, manage doctor schedules, and streamline hospital operations from one centralized, secure system.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
