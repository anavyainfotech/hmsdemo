"use client";

import { Search, Plus } from'lucide-react';

export default function AllDoctorsPage() {
 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">All Doctors</h1>
 <p className="text-gray-500 mt-1">Directory of hospital physicians</p>
 </div>
 <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
 <Plus className="w-5 h-5" /> Add Doctor
 </button>
 </div>

 <div className="bg-white rounded-md border border-gray-100 p-4">
 <div className="relative max-w-md">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
 <input type="text" placeholder="Search doctors by name or department..." className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
 {[1,2,3,4,5,6,7,8].map((i) => (
 <div key={i} className="bg-white p-6 rounded-md border border-gray-100 text-center">
 <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-100 object-cover" alt="Doctor" />
 <h3 className="font-bold text-gray-900 text-lg">Dr. John Doe {i}</h3>
 <p className="text-blue-600 font-medium text-sm">Cardiology</p>
 <p className="text-gray-500 text-xs mt-2">12 years experience</p>
 <button className="mt-4 w-full py-2 bg-gray-50 text-gray-700 font-bold rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">View Profile</button>
 </div>
 ))}
 </div>
 </div>
 );
}
