"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';

// Mock Data for individual departments
const departmentDetails: Record<string, any> = {
  'cardiology': {
    name: 'Cardiology Center',
    tagline: 'World-Class Heart Care',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80',
    about: 'Our Cardiology Center is equipped with the latest technology to diagnose and treat a wide range of heart conditions. Our expert team of cardiologists and cardiac surgeons provide comprehensive care from preventive screenings to complex heart surgeries.',
    services: [
      'Echocardiogram & Stress Testing',
      'Cardiac Catheterization',
      'Coronary Artery Bypass Grafting (CABG)',
      'Pacemaker Implantation',
      'Heart Failure Management'
    ],
    doctors: [
      { name: "Dr. Sarah Jenkins", title: "Chief Cardiologist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" },
      { name: "Dr. Rahul Sharma", title: "Interventional Cardiologist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  'neurology': {
    name: 'Neurology Institute',
    tagline: 'Advanced Brain & Spine Care',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    about: 'Anavya Hospital Neurology Institute offers specialized care for disorders of the brain, spinal cord, and nervous system. We bring together multidisciplinary experts to deliver personalized treatment plans for complex neurological conditions.',
    services: [
      'Stroke Center & Emergency Care',
      'Epilepsy Treatment',
      'Brain Tumor Surgery',
      'Spinal Cord Disorders',
      'Movement Disorders (Parkinson\'s)'
    ],
    doctors: [
      { name: "Dr. Michael Chen", title: "Lead Neurologist", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  // Default fallback
  'default': {
    name: 'Specialty Department',
    tagline: 'Premium Care You Can Trust',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    about: 'Our specialty department is staffed by renowned medical professionals dedicated to providing the highest standard of clinical excellence. We utilize evidence-based protocols to ensure rapid recovery and lasting health.',
    services: [
      'Comprehensive Diagnostics',
      'Minimally Invasive Surgery',
      'Personalized Treatment Plans',
      'Post-operative Rehabilitation',
      '24/7 Specialist Support'
    ],
    doctors: [
      { name: "Dr. Emily Roberts", title: "Senior Specialist", image: "https://images.unsplash.com/photo-1594824436951-7f12bc506161?auto=format&fit=crop&w=400&q=80" },
      { name: "Dr. James Wilson", title: "Consultant", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" }
    ]
  }
};

export default function DepartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const dept = departmentDetails[id] || departmentDetails['default'];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={dept.image} alt={dept.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B1221]/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            {dept.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-blue-200 font-medium"
          >
            {dept.tagline}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#0B1221] mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                {dept.about}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#0B1221] mb-6">Key Treatments & Services</h2>
              <ul className="space-y-4">
                {dept.services.map((service: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-4 bg-[#FAFBFF] p-4 rounded-xl border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-bold text-gray-800">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0B1221] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Need a Consultation?</h3>
              <p className="text-gray-400 mb-8">Skip the waiting room. Book an appointment with our {dept.name} experts today.</p>
              <Link href="/book-appointment" className="block w-full text-center py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Book Appointment
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1221] mb-6">Meet the Specialists</h3>
              <div className="space-y-6">
                {dept.doctors.map((doc: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-4">
                    <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" />
                    <div>
                      <h4 className="font-bold text-gray-900">{doc.name}</h4>
                      <p className="text-sm font-medium text-blue-600">{doc.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/doctors" className="mt-6 inline-block text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View all doctors &rarr;
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
