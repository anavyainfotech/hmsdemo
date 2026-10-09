"use client";

import { motion } from'framer-motion';
import { Search, UserPlus, FileText, Phone } from'lucide-react';

export default function PatientsPage() {
 const patients = [
 { id:'P-9821', name:'John Doe', age: 45, gender:'Male', blood:'O+', admitted:'Oct 12, 2026', room:'ICU-02', status:'Inpatient' },
 { id:'P-9822', name:'Alice Smith', age: 29, gender:'Female', blood:'A-', admitted:'-', room:'-', status:'Outpatient' },
 { id:'P-9823', name:'Robert Fox', age: 62, gender:'Male', blood:'B+', admitted:'Oct 14, 2026', room:'Gen-114', status:'Inpatient' },
 { id:'P-9824', name:'Esther Howard', age: 34, gender:'Female', blood:'O-', admitted:'-', room:'-', status:'Outpatient' },
 ];

 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Patients Directory</h1>
 <p className="text-gray-500 text-sm mt-1">View and manage patient records</p>
 </div>
 <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
 <UserPlus className="w-5 h-5" /> Admit Patient
 </button>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
 <div className="bg-white p-5 rounded-md border border-gray-100 flex items-center justify-between">
 <div><p className="text-gray-500 text-sm font-medium mb-1">Total Registered</p><p className="text-2xl font-bold">12,450</p></div>
 </div>
 <div className="bg-white p-5 rounded-md border border-gray-100 flex items-center justify-between">
 <div><p className="text-gray-500 text-sm font-medium mb-1">Current Inpatients</p><p className="text-2xl font-bold">142</p></div>
 </div>
 <div className="bg-white p-5 rounded-md border border-gray-100 flex items-center justify-between">
 <div><p className="text-gray-500 text-sm font-medium mb-1">Today's Discharges</p><p className="text-2xl font-bold">18</p></div>
 </div>
 <div className="bg-white p-5 rounded-md border border-gray-100 flex items-center justify-between">
 <div><p className="text-gray-500 text-sm font-medium mb-1">Available Beds</p><p className="text-2xl font-bold text-green-600">45</p></div>
 </div>
 </div>

 <div className="bg-white rounded-md border border-gray-100 overflow-hidden">
 <div className="p-4 border-b border-gray-100">
 <div className="relative max-w-md">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
 <input type="text" placeholder="Search by name, ID or phone..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
 </div>
 </div>

 <table className="w-full text-left">
 <thead className="bg-gray-50/50 border-b border-gray-100">
 <tr>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Patient ID</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Name & Info</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Type</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Room/Bed</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Admitted On</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 {patients.map((p, idx) => (
 <motion.tr initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} key={p.id} className="hover:bg-gray-50 transition-colors">
 <td className="px-6 py-4 text-sm font-bold text-blue-600">{p.id}</td>
 <td className="px-6 py-4">
 <p className="font-bold text-gray-900">{p.name}</p>
 <p className="text-xs text-gray-500">{p.age} Yrs • {p.gender} • {p.blood}</p>
 </td>
 <td className="px-6 py-4">
 <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.status ==='Inpatient' ?'bg-indigo-100 text-indigo-700' :'bg-gray-100 text-gray-700'}`}>
 {p.status}
 </span>
 </td>
 <td className="px-6 py-4 font-medium text-gray-900">{p.room}</td>
 <td className="px-6 py-4 text-gray-600 text-sm">{p.admitted}</td>
 <td className="px-6 py-4 flex justify-end gap-3">
 <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View Records"><FileText className="w-4 h-4" /></button>
 <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors" title="Contact"><Phone className="w-4 h-4" /></button>
 </td>
 </motion.tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 );
}
