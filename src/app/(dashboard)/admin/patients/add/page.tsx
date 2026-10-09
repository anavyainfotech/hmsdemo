"use client";

import { UserPlus, Save } from'lucide-react';

export default function AddPatientPage() {
 return (
 <div className="max-w-4xl mx-auto space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Add New Patient</h1>
 <p className="text-gray-500 mt-1">Register a new patient into the system</p>
 </div>
 <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
 <Save className="w-5 h-5" /> Save Patient
 </button>
 </div>

 <div className="bg-white rounded-md border border-gray-100 p-8">
 <h2 className="text-lg font-bold text-[#0B1221] mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
 <UserPlus className="w-5 h-5 text-blue-600" /> Personal Information
 </h2>
 
 <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
 <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John Doe" />
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
 <input type="date" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" />
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
 <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none">
 <option>Male</option><option>Female</option><option>Other</option>
 </select>
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Blood Group</label>
 <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none">
 <option>A+</option><option>O+</option><option>B+</option><option>AB+</option><option>A-</option><option>O-</option>
 </select>
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
 <input type="tel" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" placeholder="+1 234 567 890" />
 </div>
 <div>
 <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
 <input type="email" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" placeholder="patient@example.com" />
 </div>
 <div className="md:col-span-2">
 <label className="block text-sm font-bold text-gray-700 mb-2">Address</label>
 <textarea rows={3} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Full residential address"></textarea>
 </div>
 </form>
 </div>
 </div>
 );
}
