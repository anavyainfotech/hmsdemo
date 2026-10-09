"use client";

import { motion } from'framer-motion';
import { DollarSign, FileText, Download, CheckCircle, Clock } from'lucide-react';

export default function BillingPage() {
 const invoices = [
 { id:'INV-2026-001', patient:'Robert Fox', date:'Oct 14, 2026', amount:'$4,250.00', type:'Surgery', status:'Paid' },
 { id:'INV-2026-002', patient:'Alice Smith', date:'Oct 14, 2026', amount:'$150.00', type:'Consultation', status:'Pending' },
 { id:'INV-2026-003', patient:'John Doe', date:'Oct 12, 2026', amount:'$12,400.00', type:'ICU Stay', status:'Insurance Pending' },
 { id:'INV-2026-004', patient:'Esther Howard', date:'Oct 11, 2026', amount:'$85.00', type:'Pharmacy', status:'Paid' },
 ];

 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Billing & Invoices</h1>
 <p className="text-gray-500 text-sm mt-1">Manage patient payments and insurance claims</p>
 </div>
 <button className="bg-[#0B1221] text-white px-5 py-2.5 rounded-md font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
 <FileText className="w-4 h-4" /> Create Invoice
 </button>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
 <div className="bg-emerald-50 p-6 rounded-md border border-emerald-100">
 <div className="flex items-center gap-3 mb-2"><CheckCircle className="w-5 h-5 text-emerald-600"/><h3 className="font-bold text-emerald-800">Collected (This Month)</h3></div>
 <p className="text-3xl font-extrabold text-emerald-900">$142,500</p>
 </div>
 <div className="bg-amber-50 p-6 rounded-md border border-amber-100">
 <div className="flex items-center gap-3 mb-2"><Clock className="w-5 h-5 text-amber-600"/><h3 className="font-bold text-amber-800">Pending Payments</h3></div>
 <p className="text-3xl font-extrabold text-amber-900">$28,450</p>
 </div>
 <div className="bg-blue-50 p-6 rounded-md border border-blue-100">
 <div className="flex items-center gap-3 mb-2"><DollarSign className="w-5 h-5 text-blue-600"/><h3 className="font-bold text-blue-800">Insurance Claims</h3></div>
 <p className="text-3xl font-extrabold text-blue-900">$84,200</p>
 <p className="text-sm text-blue-600 mt-1 font-medium">12 claims processing</p>
 </div>
 </div>

 <div className="bg-white rounded-md border border-gray-100 overflow-hidden">
 <div className="p-4 border-b border-gray-100 flex justify-between items-center">
 <h2 className="font-bold text-gray-900 text-lg">Recent Transactions</h2>
 </div>
 <table className="w-full text-left">
 <thead className="bg-gray-50/50 border-b border-gray-100">
 <tr>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Invoice ID</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Patient</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Type</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Amount</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Action</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 {invoices.map((inv, idx) => (
 <motion.tr initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} key={inv.id} className="hover:bg-gray-50 transition-colors">
 <td className="px-6 py-4 text-sm font-bold text-gray-500">{inv.id}</td>
 <td className="px-6 py-4">
 <p className="font-bold text-gray-900">{inv.patient}</p>
 <p className="text-xs text-gray-400">{inv.date}</p>
 </td>
 <td className="px-6 py-4 text-gray-600 text-sm font-medium">{inv.type}</td>
 <td className="px-6 py-4 font-extrabold text-gray-900">{inv.amount}</td>
 <td className="px-6 py-4">
 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
 inv.status ==='Paid' ?'bg-green-100 text-green-700' :
 inv.status ==='Pending' ?'bg-amber-100 text-amber-700' :
'bg-blue-100 text-blue-700'
 }`}>
 {inv.status}
 </span>
 </td>
 <td className="px-6 py-4 flex justify-end">
 <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Download PDF">
 <Download className="w-5 h-5" />
 </button>
 </td>
 </motion.tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 );
}
