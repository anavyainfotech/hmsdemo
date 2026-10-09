"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0B1221] rounded-md p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Abstract background blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600 rounded-full blur-3xl" 
          />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Your Health Can't Wait.
            </h2>
            <p className="text-lg text-gray-300 font-medium">
              Take the first step towards a healthier life. Schedule a consultation with our world-class specialists today.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 flex-shrink-0"
          >
            <Link 
              href="/book-appointment" 
              className="inline-flex justify-center items-center rounded-full bg-white px-8 py-5 text-lg font-bold text-[#0B1221] shadow-[0_0_30px_rgb(255,255,255,0.2)]"
            >
              Book Appointment Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
