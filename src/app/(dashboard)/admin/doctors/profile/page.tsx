"use client";

import { Mail, Phone, MapPin, Calendar, Clock } from'lucide-react';

export default function DoctorProfilePage() {
 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Doctor Profile</h1>
 </div>
 <button className="bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-md font-bold hover:bg-gray-50 transition-colors">
 Edit Profile
 </button>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 <div className="bg-white rounded-md border border-gray-100 p-6 text-center lg:col-span-1">
 <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover" alt="Dr. Rahul" />
 <h2 className="text-xl font-bold text-gray-900">Dr. Rahul Sharma</h2>
 <p className="text-blue-600 font-bold mb-4">Chief Cardiologist</p>
 <div className="flex justify-center gap-2 mb-6">
 <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">On Duty</span>
 </div>
 <div className="space-y-3 text-left">
 <div className="flex items-center gap-3 text-gray-600"><Mail className="w-4 h-4" /> dr.rahul@anavya.com</div>
 <div className="flex items-center gap-3 text-gray-600"><Phone className="w-4 h-4" /> +1 (555) 123-4567</div>
 <div className="flex items-center gap-3 text-gray-600"><MapPin className="w-4 h-4" /> Room 402, Block A</div>
 </div>
 </div>

 <div className="bg-white rounded-md border border-gray-100 p-6 lg:col-span-2">
 <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">Today's Schedule</h3>
 <div className="space-y-4">
 {[1, 2, 3].map((i) => (
 <div key={i} className="flex items-start gap-4 p-4 rounded-md border border-gray-100 bg-gray-50">
 <div className="bg-blue-100 text-blue-600 p-3 rounded-md"><Clock className="w-5 h-5" /></div>
 <div>
 <h4 className="font-bold text-gray-900">Patient Consultation</h4>
 <p className="text-sm text-gray-500">10:00 AM - 10:30 AM • Patient: John Doe</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 );
}
