"use client";

import { Building2, Users } from'lucide-react';

export default function DepartmentsPage() {
 const depts = [
 { name:'Cardiology', head:'Dr. Rahul Sharma', doctors: 18, patients: 842 },
 { name:'Neurology', head:'Dr. Amelia Ross', doctors: 14, patients: 610 },
 { name:'Orthopedics', head:'Dr. James Okafor', doctors: 16, patients: 1120 },
 { name:'Pediatrics', head:'Dr. Priya Nair', doctors: 22, patients: 1860 },
 { name:'Emergency', head:'Dr. Sarah Chen', doctors: 30, patients: 2500 },
 { name:'Oncology', head:'Dr. Michael Smith', doctors: 12, patients: 450 },
 ];

 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Departments</h1>
 <p className="text-gray-500 mt-1">Manage hospital wards and divisions</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {depts.map((d, idx) => (
 <div key={idx} className="bg-white p-6 rounded-md border border-gray-100">
 <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
 <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-md flex items-center justify-center"><Building2 className="w-5 h-5" /></div>
 <h3 className="font-bold text-lg text-gray-900">{d.name}</h3>
 </div>
 <div className="space-y-2 mb-4">
 <p className="text-sm text-gray-500">Head of Dept: <strong className="text-gray-900">{d.head}</strong></p>
 <div className="flex items-center gap-4">
 <span className="flex items-center gap-1 text-sm text-gray-600"><Users className="w-4 h-4" /> {d.doctors} Doctors</span>
 <span className="flex items-center gap-1 text-sm text-gray-600"> {d.patients} Patients</span>
 </div>
 </div>
 <button className="w-full py-2 bg-gray-50 text-gray-700 font-bold rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">Manage</button>
 </div>
 ))}
 </div>
 </div>
 );
}
