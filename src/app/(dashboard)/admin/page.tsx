"use client";

import { motion } from'framer-motion';
import { 
 Users, Activity, DollarSign, BedDouble, 
 ArrowUpRight, ArrowDownRight, HeartPulse, Stethoscope, Clock
} from'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from'recharts';

const revenueData = [
 { name:'Mon', total: 4000 },
 { name:'Tue', total: 3000 },
 { name:'Wed', total: 2000 },
 { name:'Thu', total: 2780 },
 { name:'Fri', total: 1890 },
 { name:'Sat', total: 2390 },
 { name:'Sun', total: 3490 },
];

const appointmentStatusData = [
 { name:'Confirmed', value: 42, color:'#2563eb' },
 { name:'Completed', value: 31, color:'#10b981' },
 { name:'Pending', value: 18, color:'#f59e0b' },
 { name:'Cancelled', value: 9, color:'#ef4444' },
];

const recentAppointments = [
 { id:'1', patient:'Sarah Johnson', doctor:'Dr. Rahul Sharma', dept:'Cardiology', time:'09:00 AM', status:'Completed' },
 { id:'2', patient:'Michael Smith', doctor:'Dr. Emily Roberts', dept:'Orthopedics', time:'10:30 AM', status:'In Progress' },
 { id:'3', patient:'Emma Brown', doctor:'Dr. Michael Chen', dept:'Neurology', time:'11:15 AM', status:'Waiting' },
 { id:'4', patient:'James Wilson', doctor:'Dr. Sarah Jenkins', dept:'Cardiology', time:'02:00 PM', status:'Pending' },
];

const activityTimeline = [
 { time:'10 mins ago', desc:'New patient registered — Ethan Cole', color:'bg-blue-500' },
 { time:'42 mins ago', desc:'Appointment completed with Dr. Ross', color:'bg-green-500' },
 { time:'1 hour ago', desc:'Prescription created for Ava Martinez', color:'bg-indigo-500' },
 { time:'2 hours ago', desc:'Payment received — Invoice #4471', color:'bg-amber-500' },
 { time:'3 hours ago', desc:'Lab report uploaded for Liam Carter', color:'bg-blue-500' },
];

export default function AdminDashboardPage() {
 const statCards = [
 { title:'Total Patients', value:'3,482', change:'+8.2%', isUp: true, icon: Users, color:'text-blue-600', bg:'bg-blue-100' },
 { title:'Total Doctors', value:'186', change:'+2.1%', isUp: true, icon: HeartPulse, color:'text-indigo-600', bg:'bg-indigo-100' },
 { title:'Appointments Today', value:'248', change:'+12%', isUp: true, icon: Stethoscope, color:'text-emerald-600', bg:'bg-emerald-100' },
 { title:'Total Revenue', value:'$84,210', change:'-1.4%', isUp: false, icon: DollarSign, color:'text-amber-600', bg:'bg-amber-100' },
 { title:'Available Beds', value:'42', change:'+5', isUp: true, icon: BedDouble, color:'text-gray-600', bg:'bg-gray-200' },
 { title:'Emergency Cases', value:'7', change:'-3', isUp: false, icon: Activity, color:'text-red-600', bg:'bg-red-100' },
 ];

 return (
 <div className="space-y-6">
 
 {/* Top Header Title */}
 <div className="mb-8">
 <h1 className="text-3xl font-extrabold text-[#0B1221]">Dashboard</h1>
 <p className="text-gray-500 mt-1">Hospital overview and today's activity</p>
 </div>

 {/* Top Stats Cards - 6 Cards like MediCore */}
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
 {statCards.map((stat, idx) => (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: idx * 0.1 }}
 className="bg-white p-5 rounded-md border border-gray-100 hover: transition-shadow"
 >
 <div className="flex justify-between items-start mb-3">
 <div className={`w-10 h-10 rounded-md flex items-center justify-center ${stat.bg}`}>
 <stat.icon className={`w-5 h-5 ${stat.color}`} />
 </div>
 <div className={`flex items-center gap-0.5 text-xs font-bold px-2 py-1 rounded-full ${stat.isUp ?'bg-green-50 text-green-600' :'bg-red-50 text-red-600'}`}>
 {stat.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
 {stat.change}
 </div>
 </div>
 <p className="text-2xl font-extrabold text-[#0B1221] mb-1">{stat.value}</p>
 <h3 className="text-gray-500 font-medium text-xs uppercase tracking-wider">{stat.title}</h3>
 </motion.div>
 ))}
 </div>

 {/* Charts Section */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 
 {/* Revenue Chart (2/3 width) */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
 className="bg-white p-6 rounded-md border border-gray-100 lg:col-span-2"
 >
 <div className="flex justify-between items-center mb-6">
 <h3 className="text-lg font-bold text-[#0B1221]">Revenue Overview</h3>
 <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">+6.4% vs last week</span>
 </div>
 <div className="h-72">
 <ResponsiveContainer width="100%" height="100%">
 <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
 <defs>
 <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
 <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
 <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
 </linearGradient>
 </defs>
 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#9ca3af'}} />
 <YAxis axisLine={false} tickLine={false} tick={{fill:'#9ca3af'}} />
 <Tooltip contentStyle={{ borderRadius:'8px', border:'none', boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
 <Area type="monotone" dataKey="total" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
 </AreaChart>
 </ResponsiveContainer>
 </div>
 </motion.div>

 {/* Donut Chart (Appointments) (1/3 width) */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
 className="bg-white p-6 rounded-md border border-gray-100 flex flex-col"
 >
 <h3 className="text-lg font-bold text-[#0B1221] mb-2">Appointment Statistics</h3>
 <div className="flex-1 min-h-[200px] relative flex items-center justify-center">
 <ResponsiveContainer width="100%" height="100%">
 <PieChart>
 <Pie
 data={appointmentStatusData}
 cx="50%" cy="50%"
 innerRadius={60}
 outerRadius={80}
 paddingAngle={5}
 dataKey="value"
 stroke="none"
 >
 {appointmentStatusData.map((entry, index) => (
 <Cell key={`cell-${index}`} fill={entry.color} />
 ))}
 </Pie>
 <Tooltip contentStyle={{ borderRadius:'8px', border:'none', boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
 </PieChart>
 </ResponsiveContainer>
 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
 <span className="text-2xl font-extrabold text-gray-900">248</span>
 <span className="text-xs text-gray-500 font-bold uppercase">Total</span>
 </div>
 </div>
 <div className="grid grid-cols-2 gap-3 mt-4">
 {appointmentStatusData.map((item, idx) => (
 <div key={idx} className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
 <span className="text-sm font-medium text-gray-600">{item.name} <strong className="text-gray-900">{item.value}%</strong></span>
 </div>
 ))}
 </div>
 </motion.div>
 </div>

 {/* Bottom Section: Table + Timeline */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 
 {/* Recent Appointments Table (2/3 width) */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
 className="bg-white rounded-md border border-gray-100 overflow-hidden lg:col-span-2 flex flex-col"
 >
 <div className="p-6 border-b border-gray-100 flex justify-between items-center">
 <h3 className="text-lg font-bold text-[#0B1221]">Recent Appointments</h3>
 <button className="text-sm font-bold text-blue-600 hover:text-blue-800">View All</button>
 </div>
 <div className="overflow-x-auto flex-1">
 <table className="w-full text-left">
 <thead className="bg-gray-50/50">
 <tr>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Patient</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Doctor</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Department</th>
 <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 {recentAppointments.map((apt) => (
 <tr key={apt.id} className="hover:bg-gray-50 transition-colors">
 <td className="px-6 py-4">
 <p className="font-bold text-gray-900">{apt.patient}</p>
 <p className="text-xs text-gray-500">{apt.time}</p>
 </td>
 <td className="px-6 py-4 text-gray-600 font-medium">{apt.doctor}</td>
 <td className="px-6 py-4 text-gray-600">{apt.dept}</td>
 <td className="px-6 py-4">
 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
 apt.status ==='Completed' ?'bg-green-100 text-green-700' :
 apt.status ==='In Progress' ?'bg-blue-100 text-blue-700' :
 apt.status ==='Waiting' ?'bg-indigo-100 text-indigo-700' :
'bg-amber-100 text-amber-700'
 }`}>
 {apt.status}
 </span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </motion.div>

 {/* Hospital Activity Timeline (1/3 width) */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
 className="bg-white rounded-md border border-gray-100 p-6 flex flex-col"
 >
 <h3 className="text-lg font-bold text-[#0B1221] mb-6">Hospital Activity</h3>
 <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 flex-1">
 {activityTimeline.map((item, idx) => (
 <div key={idx} className="relative pl-6">
 <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white ${item.color}`}></div>
 <p className="text-sm font-bold text-gray-900 leading-tight">{item.desc}</p>
 <div className="flex items-center gap-1 mt-1 text-xs font-medium text-gray-400">
 <Clock className="w-3 h-3" />
 {item.time}
 </div>
 </div>
 ))}
 </div>
 </motion.div>

 </div>

 </div>
 );
}