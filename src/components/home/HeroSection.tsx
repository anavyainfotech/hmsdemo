"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFBFF] pt-10 pb-20 lg:pt-12 lg:pb-28">
      {/* Expensive-looking Background Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/50 to-indigo-100/30 blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-100/40 to-blue-50/20 blur-3xl" 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-gray-100 text-gray-800 text-sm font-semibold mb-8">
              Accepting New Patients Today
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[#0B1221] mb-6 leading-[1.1]">
              Premium Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Exceptional Life.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg leading-8 text-gray-600 mb-10 max-w-lg font-medium">
              Elevate your healthcare experience. Anavya Hospital combines world-class medical expertise with luxurious comfort and cutting-edge technology.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/book-appointment"
                className="inline-flex justify-center items-center rounded-full bg-[#0B1221] px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgb(11,18,33,0.2)] hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/doctors"
                className="inline-flex justify-center items-center rounded-full bg-white border border-gray-200 px-8 py-4 text-base font-semibold text-[#0B1221] hover:border-blue-600 hover:text-blue-600 hover:shadow-sm transition-all duration-300"
              >
                Meet Our Experts
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeUp} className="mt-14 flex items-center gap-8">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-600">
                  +10k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900">4.9/5 from 2,000+ Reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Pure Transparent Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative hidden lg:flex h-full items-end justify-center"
          >
            <img
              src="/doctor-hero-transparent.png"
              alt="Expert Female Doctor"
              className="relative z-20 w-[90%] max-w-lg h-auto object-contain drop-shadow-2xl -scale-x-100"
              style={{ filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
