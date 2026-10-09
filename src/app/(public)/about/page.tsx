"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0B1221] tracking-tight mb-6">
            Pioneering the Future of Healthcare
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Since our inception, Anavya Hospital has stood as a beacon of hope and healing. We combine the world's most brilliant medical minds with state-of-the-art technology and a deeply compassionate approach to care.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FAFBFF] p-10 rounded-md border border-gray-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the globally trusted healthcare destination where medical excellence meets supreme patient comfort, setting new benchmarks in clinical outcomes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FAFBFF] p-10 rounded-md border border-gray-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-md flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1221] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional, patient-first care by continuously innovating, investing in cutting-edge technology, and nurturing a culture of empathy and integrity.
            </p>
          </motion.div>
        </div>

        {/* Large Image Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-96 md:h-[500px] rounded-md overflow-hidden relative mb-24 shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" 
            alt="Hospital Facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        </motion.div>

      </div>
    </div>
  );
}
