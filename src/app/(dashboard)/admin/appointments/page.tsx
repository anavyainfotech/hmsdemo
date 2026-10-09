"use client";

import { motion } from'framer-motion';
import { Search, Plus, Filter, Calendar as CalendarIcon } from'lucide-react';

export default function AppointmentsPage() {
 const appointments = [
 { id:'1021', name:'Sarah Johnson', doc:'Dr. Rahul Sharma', date:'Oct 15, 2026', time:'09:00 AM', status:'Upcoming' },
 { id:'1022', name:'Michael Smith', doc:'Dr. Emily Roberts', date:'Oct 15, 2026', time:'10:30 AM', status:'Completed' },
 { id:'1023', name:'Emma Brown', doc:'Dr. Michael Chen', date:'Oct 15, 2026', time:'11:15 AM', status:'Upcoming' },
 { id:'1024', name:'James Wilson', doc:'Dr. Sarah Jenkins', date:'Oct 16, 2026', time:'02:00 PM', status:'Upcoming' },
 { id:'1025', name:'Priya Patel', doc:'Dr. James Wilson', date:'Oct 16, 2026', time:'04:30 PM', status:'Cancelled' },
 ];

 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Appointments</h1>
 <p className="text-gray-500 text-sm mt-1">Manage and schedule patient visits</p>
 </div>
 <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
 <Plus className="w-5 h-5" /> New Appointment
 </button>
 </div>

 <div className="bg-white rounded-md border border-gray-100 overflow-hidden">
 <div className="p-4 border-b border-gray-100 flex gap-4">
 <div className="relative flex-1 max-w-md">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
 <input type="text" placeholder="Search by patient or ID..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all" />
 </div>
 <button className="px-4 py-2 border border-gray-200 rounded-md font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-2">
 <Filter className="w-4 h-4" /> Filter
 </button>
 <button className="px-4 py-2 border border-gray-200 rounded-md font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-2">
 <CalendarIcon className="w-4 h-4" /> Date Range
 </button>
 </div>

 <table className="w-full text-left">
 <thead className="bg-gray-50/50 border-b border-gray-100">
 <tr>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Apt ID</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Patient Name</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Doctor</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date & Time</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 {appointments.map((apt, idx) => (
 <motion.tr 
 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
 key={apt.id} className="hover:bg-gray-50 transition-colors"
 >
 <td className="px-6 py-4 text-sm text-gray-500 font-medium">#{apt.id}</td>
 <td className="px-6 py-4 font-bold text-gray-900">{apt.name}</td>
 <td className="px-6 py-4 text-gray-600">{apt.doc}</td>
 <td className="px-6 py-4 font-medium text-gray-900">{apt.date} <span className="text-gray-400 text-sm ml-1">{apt.time}</span></td>
 <td className="px-6 py-4">
 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
 apt.status ==='Completed' ?'bg-green-100 text-green-700' :
 apt.status ==='Upcoming' ?'bg-blue-100 text-blue-700' :
'bg-red-100 text-red-700'
 }`}>
 {apt.status}
 </span>
 </td>
 <td className="px-6 py-4 text-right">
 <button className="text-blue-600 font-bold text-sm hover:text-blue-800">Edit</button>
 </td>
 </motion.tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 );
}
