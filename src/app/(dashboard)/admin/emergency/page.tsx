"use client";

import { AlertTriangle, PhoneCall } from'lucide-react';

export default function EmergencyPage() {
 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Emergency Command</h1>
 <p className="text-gray-500 mt-1">Live tracking of ER cases</p>
 </div>
 <button className="bg-red-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-red-700 transition-colors flex items-center gap-2">
 <PhoneCall className="w-5 h-5" /> Call Code Blue
 </button>
 </div>

 <div className="bg-red-50 border border-red-100 rounded-md p-6 flex items-start gap-4">
 <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
 <div>
 <h3 className="text-lg font-bold text-red-900">Active Trauma Case - ER Room 1</h3>
 <p className="text-red-700 mt-1">Patient arrived 5 minutes ago via ambulance. Cardiac arrest protocols initiated. Dr. Smith attending.</p>
 </div>
 </div>
 </div>
 );
}
