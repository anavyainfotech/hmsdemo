"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DepartmentsPage() {
  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      desc: 'Expert heart care, surgeries, and continuous monitoring.',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'neurology',
      name: 'Neurology',
      desc: 'Advanced brain, nerve treatments and diagnostics.',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      desc: 'Bone, joint replacements, and spine specialists.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      desc: 'Compassionate and expert care for children and infants.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'dental',
      name: 'Dental Care',
      desc: 'Complete oral health solutions and cosmetic dentistry.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'eye-care',
      name: 'Eye Care',
      desc: 'Advanced vision correction and laser treatments.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="bg-[#FAFBFF] min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0B1221] mb-4"
          >
            Our Centers of Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive healthcare services covering every major medical specialty under one roof.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {departments.map((dept, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <Link 
                href={`/departments/${dept.id}`}
                className="group relative bg-white rounded-md border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="w-full h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={dept.image} 
                    alt={dept.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 relative flex-grow">
                  <h4 className="text-2xl font-bold text-[#0B1221] mb-3">{dept.name}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed mb-6">{dept.desc}</p>
                  <div className="mt-auto flex items-center text-sm font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    Explore Department
                    <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
