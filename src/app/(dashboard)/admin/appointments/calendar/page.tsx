"use client";

import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock } from'lucide-react';

export default function CalendarViewPage() {
 const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
 const dates = Array.from({ length: 31 }, (_, i) => i + 1);

 // Randomly assign some appointments
 const getAppointments = (day: number) => {
 if (day === 12) return [{ title:"Dr. Sharma", time:"10:00 AM", color:"bg-blue-100 text-blue-700" }];
 if (day === 15) return [{ title:"Dr. Ross", time:"02:30 PM", color:"bg-emerald-100 text-emerald-700" }, { title:"Dr. Lee", time:"04:00 PM", color:"bg-amber-100 text-amber-700" }];
 if (day === 18) return [{ title:"Dr. Chen", time:"09:15 AM", color:"bg-indigo-100 text-indigo-700" }];
 if (day === 22) return [{ title:"Dr. Nair", time:"11:00 AM", color:"bg-red-100 text-red-700" }];
 return [];
 };

 return (
 <div className="space-y-6">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Calendar View</h1>
 <p className="text-gray-500 mt-1">Manage appointments via timeline</p>
 </div>
 <div className="flex items-center gap-4 bg-white p-2 rounded-md border border-gray-200">
 <button className="p-1 hover:bg-gray-100 rounded-md"><ChevronLeft className="w-5 h-5 text-gray-600" /></button>
 <span className="font-bold text-gray-900 px-4">October 2026</span>
 <button className="p-1 hover:bg-gray-100 rounded-md"><ChevronRight className="w-5 h-5 text-gray-600" /></button>
 </div>
 </div>

 <div className="bg-white rounded-md border border-gray-100 p-6">
 <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-md overflow-hidden">
 {days.map(day => (
 <div key={day} className="bg-gray-50 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
 {day}
 </div>
 ))}
 {/* Empty slots for start of month (assuming starts on Thursday) */}
 <div className="bg-white min-h-[120px]"></div>
 <div className="bg-white min-h-[120px]"></div>
 <div className="bg-white min-h-[120px]"></div>
 <div className="bg-white min-h-[120px]"></div>
 
 {dates.map(date => {
 const apts = getAppointments(date);
 return (
 <div key={date} className="bg-white min-h-[120px] p-2 border-t border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
 <span className={`text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full mb-1 ${date === 15 ?'bg-blue-600 text-white' :'text-gray-700 group-hover:bg-gray-200'}`}>
 {date}
 </span>
 <div className="space-y-1">
 {apts.map((apt, idx) => (
 <div key={idx} className={`text-xs px-2 py-1 rounded-md font-bold truncate ${apt.color}`}>
 {apt.time} - {apt.title}
 </div>
 ))}
 </div>
 </div>
 )
 })}
 </div>
 </div>
 </div>
 );
}
