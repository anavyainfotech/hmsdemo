"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const features = [
    {
      title: "International Standards",
      desc: "Our facilities and protocols meet global healthcare benchmarks.",
    },
    {
      title: "Advanced Technology",
      desc: "Equipped with state-of-the-art robotic and diagnostic tools.",
    },
    {
      title: "Holistic Care",
      desc: "We focus on complete physical, mental, and emotional recovery.",
    }
  ];

  return (
    <section id="about" className="py-16 bg-white px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Pattern */}
            <div className="absolute -inset-4 bg-gray-50 rounded-[2rem] transform -rotate-3 -z-10" />
            
            <div className="relative flex gap-6">
              {/* Main Image */}
              <div className="w-2/3 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" 
                  alt="Anavya Hospital Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Secondary Image & Stat Box */}
              <div className="w-1/3 flex flex-col gap-6 mt-12">
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=400&q=80" 
                    alt="Modern Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-[#0B1221] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                  <h4 className="text-4xl font-extrabold mb-1">25+</h4>
                  <p className="text-sm font-medium text-gray-400">Years of Clinical Excellence</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-xl"
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
              Why Choose Anavya
            </motion.h2>
            <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl md:text-4xl font-extrabold text-[#0B1221] mb-6 leading-tight">
              Redefining Premium Healthcare For You
            </motion.h3>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg text-gray-600 mb-10 leading-relaxed">
              At Anavya Hospital, we believe that world-class medical expertise should be matched with unparalleled comfort and compassion. Our dedicated team of specialists ensures you receive the most precise diagnosis and effective treatment.
            </motion.p>

            <div className="space-y-8 mb-10">
              {features.map((feature, idx) => (
                <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B1221] mb-1">{feature.title}</h4>
                    <p className="text-gray-500 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B1221] border border-gray-200 rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
