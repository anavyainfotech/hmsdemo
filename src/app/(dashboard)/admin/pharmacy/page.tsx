"use client";

import { motion } from'framer-motion';
import { Pill, AlertTriangle, ArrowRightLeft, Search } from'lucide-react';

export default function PharmacyPage() {
 const inventory = [
 { id:'MED-01', name:'Amoxicillin 500mg', category:'Antibiotics', stock: 1250, reorderLevel: 500, price:'$12.00', status:'In Stock' },
 { id:'MED-02', name:'Lisinopril 10mg', category:'Cardiovascular', stock: 180, reorderLevel: 200, price:'$8.50', status:'Low Stock' },
 { id:'MED-03', name:'Metformin 1000mg', category:'Anti-diabetic', stock: 850, reorderLevel: 400, price:'$15.00', status:'In Stock' },
 { id:'MED-04', name:'Ibuprofen 400mg', category:'Analgesics', stock: 0, reorderLevel: 1000, price:'$5.00', status:'Out of Stock' },
 { id:'MED-05', name:'Omeprazole 20mg', category:'Gastrointestinal', stock: 420, reorderLevel: 300, price:'$18.00', status:'In Stock' },
 ];

 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Pharmacy Inventory</h1>
 <p className="text-gray-500 text-sm mt-1">Manage medicines, stock, and suppliers</p>
 </div>
 <div className="flex gap-3">
 <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
 <ArrowRightLeft className="w-4 h-4" /> Issue Medicine
 </button>
 <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
 <Pill className="w-4 h-4" /> Add Stock
 </button>
 </div>
 </div>

 <div className="bg-white rounded-md border border-gray-100 overflow-hidden">
 <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-red-50">
 <div className="flex items-center gap-3 text-red-700">
 <AlertTriangle className="w-5 h-5" />
 <span className="font-bold text-sm">2 items require immediate reordering.</span>
 </div>
 <button className="text-sm font-bold text-red-700 hover:text-red-800 underline">Generate PO</button>
 </div>

 <div className="p-4 border-b border-gray-100">
 <div className="relative max-w-md">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
 <input type="text" placeholder="Search medicine name or ID..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
 </div>
 </div>

 <table className="w-full text-left">
 <thead className="bg-gray-50/50 border-b border-gray-100">
 <tr>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Item ID</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Medicine Name</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Category</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Current Stock</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 {inventory.map((item, idx) => (
 <motion.tr initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} key={item.id} className="hover:bg-gray-50 transition-colors">
 <td className="px-6 py-4 text-sm font-bold text-gray-500">{item.id}</td>
 <td className="px-6 py-4 font-bold text-gray-900">{item.name}</td>
 <td className="px-6 py-4 text-gray-600 text-sm">{item.category}</td>
 <td className="px-6 py-4 text-right">
 <span className={`font-bold ${item.stock <= item.reorderLevel ?'text-red-600' :'text-gray-900'}`}>{item.stock} units</span>
 <p className="text-xs text-gray-400">Min: {item.reorderLevel}</p>
 </td>
 <td className="px-6 py-4">
 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
 item.status ==='In Stock' ?'bg-green-100 text-green-700' :
 item.status ==='Low Stock' ?'bg-amber-100 text-amber-700' :
'bg-red-100 text-red-700'
 }`}>
 {item.status}
 </span>
 </td>
 </motion.tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 );
}
