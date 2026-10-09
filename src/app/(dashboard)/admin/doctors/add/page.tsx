"use client";

import { Save, UserPlus } from'lucide-react';

export default function AddDoctorPage() {
 return (
 <div className="max-w-4xl mx-auto space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Add New Doctor</h1>
 <p className="text-gray-500 mt-1">Onboard a new physician to the system</p>
 </div>
 <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
 <Save className="w-5 h-5" /> Save Profile
 </button>
 </div>

 <div className="bg-white rounded-md border border-gray-100 p-8">
 <h2 className="text-lg font-bold text-[#0B1221] mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
 <UserPlus className="w-5 h-5 text-blue-600" /> Professional Details
 </h2>
 
 <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
 <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Dr. Jane Smith" />
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Department</label>
 <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none">
 <option>Cardiology</option><option>Neurology</option><option>Orthopedics</option>
 </select>
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Specialization</label>
 <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" placeholder="e.g. Pediatric Cardiology" />
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">License Number</label>
 <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" placeholder="MD-XXXX-XXXX" />
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
 <input type="tel" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" />
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
 <input type="email" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" />
 </div>
 </form>
 </div>
 </div>
 );
}
