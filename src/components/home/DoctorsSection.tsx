"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Sarah Jenkins",
      specialty: "Chief Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Lead Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Emily Roberts",
      specialty: "Senior Pediatrician",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section id="doctors" className="py-16 bg-[#FAFBFF] px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Our Experts</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0B1221] tracking-tight">
            Meet Our Top Specialists
          </h3>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="group relative bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-[#0B1221] mb-1">{doc.name}</h4>
                  <p className="text-sm font-medium text-blue-600">{doc.specialty}</p>
                </div>
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-[#0B1221]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="/book-appointment" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
