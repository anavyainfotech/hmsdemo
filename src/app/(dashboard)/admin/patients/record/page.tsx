"use client";

import { FileText, Printer, FileDown, Activity, Heart, Thermometer, Droplet } from'lucide-react';

export default function PatientRecordPage() {
 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Patient Records: John Doe</h1>
 <p className="text-gray-500 mt-1">ID: P-9821 • Admitted: Oct 12, 2026</p>
 </div>
 <div className="flex gap-3">
 <button className="bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-md font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
 <Printer className="w-4 h-4" /> Print
 </button>
 <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
 <FileDown className="w-4 h-4" /> Download EHR
 </button>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
 <div className="bg-white p-6 rounded-md border border-gray-100 flex items-center gap-4">
 <div className="w-12 h-12 bg-red-100 text-red-600 rounded-md flex items-center justify-center"><Heart className="w-6 h-6" /></div>
 <div><p className="text-gray-500 text-sm font-bold">Heart Rate</p><p className="text-xl font-extrabold text-gray-900">82 bpm</p></div>
 </div>
 <div className="bg-white p-6 rounded-md border border-gray-100 flex items-center gap-4">
 <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center"><Activity className="w-6 h-6" /></div>
 <div><p className="text-gray-500 text-sm font-bold">Blood Pressure</p><p className="text-xl font-extrabold text-gray-900">120/80</p></div>
 </div>
 <div className="bg-white p-6 rounded-md border border-gray-100 flex items-center gap-4">
 <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-md flex items-center justify-center"><Thermometer className="w-6 h-6" /></div>
 <div><p className="text-gray-500 text-sm font-bold">Temperature</p><p className="text-xl font-extrabold text-gray-900">98.6°F</p></div>
 </div>
 <div className="bg-white p-6 rounded-md border border-gray-100 flex items-center gap-4">
 <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-md flex items-center justify-center"><Droplet className="w-6 h-6" /></div>
 <div><p className="text-gray-500 text-sm font-bold">Blood Oxygen</p><p className="text-xl font-extrabold text-gray-900">98%</p></div>
 </div>
 </div>

 <div className="bg-white rounded-md border border-gray-100 p-6">
 <h3 className="text-lg font-bold text-[#0B1221] mb-6 border-b border-gray-100 pb-4">Medical History & Diagnosis</h3>
 <div className="space-y-6">
 <div className="flex gap-4">
 <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full shrink-0"></div>
 <div>
 <h4 className="font-bold text-gray-900">Primary Diagnosis: Hypertension</h4>
 <p className="text-sm text-gray-600 mt-1">Patient admitted with elevated blood pressure. Prescribed Lisinopril 10mg daily. Observation required for 48 hours.</p>
 <span className="text-xs font-bold text-blue-600 mt-2 block">Dr. Rahul Sharma - Oct 12, 2026</span>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="w-2 h-2 mt-2 bg-gray-300 rounded-full shrink-0"></div>
 <div>
 <h4 className="font-bold text-gray-900">Lab Results: Complete Blood Count</h4>
 <p className="text-sm text-gray-600 mt-1">All parameters within normal limits. Fasting blood sugar slightly elevated at 105 mg/dL.</p>
 <span className="text-xs font-bold text-gray-500 mt-2 block">Pathology Lab - Oct 13, 2026</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
