"use client";

import { Clock, Calendar } from'lucide-react';

export default function ShiftsPage() {
 const staff = [
 { name:'Dr. Sarah Jenkins', role:'Cardiology' },
 { name:'Dr. Michael Chen', role:'Neurology' },
 { name:'Nurse Taylor', role:'ICU' },
 { name:'Dr. Rahul Sharma', role:'Cardiology' },
 { name:'Nurse Amanda', role:'Emergency' },
 ];

 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Shift Management</h1>
 <p className="text-gray-500 mt-1">Manage staff rosters and schedules for October</p>
 </div>
 <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors">
 Assign Shift
 </button>
 </div>

 <div className="bg-white rounded-md border border-gray-100 overflow-hidden">
 <div className="overflow-x-auto">
 <table className="w-full text-left min-w-[800px]">
 <thead className="bg-gray-50 border-b border-gray-200">
 <tr>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Staff Member</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-center">Monday</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-center">Tuesday</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-center">Wednesday</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-center">Thursday</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-center">Friday</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 {staff.map((s, idx) => (
 <tr key={idx} className="hover:bg-gray-50">
 <td className="px-6 py-4">
 <p className="font-bold text-gray-900">{s.name}</p>
 <p className="text-xs text-gray-500">{s.role}</p>
 </td>
 <td className="px-2 py-4 text-center">
 <div className="bg-green-100 text-green-700 text-xs font-bold py-1.5 px-2 rounded-md mx-auto w-24">Morning</div>
 </td>
 <td className="px-2 py-4 text-center">
 <div className="bg-green-100 text-green-700 text-xs font-bold py-1.5 px-2 rounded-md mx-auto w-24">Morning</div>
 </td>
 <td className="px-2 py-4 text-center">
 <div className="bg-blue-100 text-blue-700 text-xs font-bold py-1.5 px-2 rounded-md mx-auto w-24">Night</div>
 </td>
 <td className="px-2 py-4 text-center">
 <div className="bg-gray-100 text-gray-500 text-xs font-bold py-1.5 px-2 rounded-md mx-auto w-24">Off Duty</div>
 </td>
 <td className="px-2 py-4 text-center">
 <div className="bg-amber-100 text-amber-700 text-xs font-bold py-1.5 px-2 rounded-md mx-auto w-24">Evening</div>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </div>
 );
}
