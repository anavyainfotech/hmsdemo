"use client";

import { BedDouble, CheckCircle, XCircle } from'lucide-react';

export default function BedManagementPage() {
 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Bed Management</h1>
 <p className="text-gray-500 mt-1">Real-time ward and bed occupancy tracker</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { ward:'ICU', total: 20, occupied: 18 },
 { ward:'General A', total: 50, occupied: 45 },
 { ward:'General B', total: 50, occupied: 30 },
 { ward:'Pediatrics', total: 30, occupied: 12 },
 ].map((w, idx) => (
 <div key={idx} className="bg-white p-6 rounded-md border border-gray-100">
 <h3 className="font-bold text-lg text-gray-900 mb-2">{w.ward}</h3>
 <div className="flex justify-between text-sm mb-2">
 <span className="text-gray-500">Occupancy</span>
 <span className="font-bold">{w.occupied}/{w.total}</span>
 </div>
 <div className="w-full bg-gray-100 rounded-full h-2">
 <div className={`h-2 rounded-full ${w.occupied/w.total > 0.8 ?'bg-red-500' :'bg-green-500'}`} style={{width: `${(w.occupied/w.total)*100}%`}}></div>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
}
