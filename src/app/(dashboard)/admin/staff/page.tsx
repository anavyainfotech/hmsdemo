"use client";

import { motion } from'framer-motion';
import { Search, Filter, Mail, Phone } from'lucide-react';

export default function StaffPage() {
 const staff = [
 { id:'D01', name:'Dr. Sarah Jenkins', role:'Chief Cardiologist', dept:'Cardiology', status:'On Duty', image:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80' },
 { id:'D02', name:'Dr. Michael Chen', role:'Lead Neurologist', dept:'Neurology', status:'On Duty', image:'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&q=80' },
 { id:'D03', name:'Dr. Emily Roberts', role:'Senior Specialist', dept:'Orthopedics', status:'Off Duty', image:'https://images.unsplash.com/photo-1594824436951-7f12bc506161?w=200&q=80' },
 { id:'D04', name:'Dr. Rahul Sharma', role:'Cardiologist', dept:'Cardiology', status:'On Duty', image:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80' },
 { id:'N01', name:'Jessica Taylor', role:'Head Nurse', dept:'ICU', status:'On Duty', image:'https://images.unsplash.com/photo-1574281313783-6f8d38111e3b?w=200&q=80' },
 { id:'N02', name:'Amanda Wilson', role:'Senior Nurse', dept:'Emergency', status:'On Leave', image:'https://images.unsplash.com/photo-1582750433449-648ed127c09e?w=200&q=80' },
 ];

 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Doctors & Staff</h1>
 <p className="text-gray-500 text-sm mt-1">Manage personnel and duty rosters</p>
 </div>
 <button className="bg-[#0B1221] text-white px-5 py-2.5 rounded-md font-bold hover:bg-gray-800 transition-colors">
 Add Employee
 </button>
 </div>

 <div className="flex gap-4 mb-6">
 <div className="relative flex-1 max-w-md">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
 <input type="text" placeholder="Search staff members..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
 </div>
 <button className="px-4 py-2 bg-white border border-gray-200 rounded-md font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-2">
 <Filter className="w-4 h-4" /> All Departments
 </button>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
 {staff.map((member, idx) => (
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }}
 key={member.id} className="bg-white p-6 rounded-md border border-gray-100 hover: transition-shadow relative overflow-hidden"
 >
 {/* Status indicator line */}
 <div className={`absolute top-0 left-0 w-full h-1 ${member.status ==='On Duty' ?'bg-green-500' : member.status ==='Off Duty' ?'bg-gray-400' :'bg-red-500'}`} />
 
 <div className="flex items-start justify-between mb-4 mt-2">
 <div className="flex items-center gap-4">
 <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" />
 <div>
 <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
 <p className="text-sm font-medium text-blue-600">{member.role}</p>
 <p className="text-xs text-gray-500 mt-0.5">{member.dept}</p>
 </div>
 </div>
 </div>

 <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
 <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
 member.status ==='On Duty' ?'bg-green-50 text-green-700 border border-green-200' : 
 member.status ==='Off Duty' ?'bg-gray-50 text-gray-600 border border-gray-200' : 
'bg-red-50 text-red-700 border border-red-200'
 }`}>
 {member.status}
 </span>
 <div className="flex gap-2">
 <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
 <Mail className="w-4 h-4" />
 </button>
 <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
 <Phone className="w-4 h-4" />
 </button>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 );
}
