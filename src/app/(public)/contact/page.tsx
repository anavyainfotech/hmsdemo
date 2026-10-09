"use client";

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="bg-[#FAFBFF] min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0B1221] mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We are here to help. Reach out to us for any medical inquiries, emergency assistance, or feedback.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-md border border-gray-100 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-md flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0B1221] mb-2">Hospital Address</h4>
                <p className="text-gray-600 leading-relaxed">
                  123 Health Avenue, Medical District,<br />
                  New York, NY 10001, United States
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-md border border-gray-100 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-md flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0B1221] mb-2">Emergency & Enquiries</h4>
                <p className="text-gray-600 leading-relaxed mb-1"><strong>Emergency:</strong> +1 (800) 123-4567 (24/7)</p>
                <p className="text-gray-600 leading-relaxed"><strong>Front Desk:</strong> +1 (800) 987-6543</p>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Map Location" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-md font-bold text-[#0B1221] shadow-lg">
                  View on Google Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#0B1221] mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="How can we help you today?"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-[#0B1221] text-white rounded-md font-bold hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
