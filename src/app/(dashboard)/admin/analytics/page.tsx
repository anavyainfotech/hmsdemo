"use client";

import { motion } from'framer-motion';
import { BarChart as BarChartIcon, TrendingUp, Users, Activity } from'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from'recharts';

const data = [
 { name:'Jan', patients: 4000, revenue: 2400 },
 { name:'Feb', patients: 3000, revenue: 1398 },
 { name:'Mar', patients: 2000, revenue: 9800 },
 { name:'Apr', patients: 2780, revenue: 3908 },
 { name:'May', patients: 1890, revenue: 4800 },
 { name:'Jun', patients: 2390, revenue: 3800 },
 { name:'Jul', patients: 3490, revenue: 4300 },
];

export default function AnalyticsPage() {
 return (
 <div className="space-y-6">
 <div>
 <h1 className="text-2xl font-extrabold text-[#0B1221]">Analytics & Reports</h1>
 <p className="text-gray-500 mt-1">Deep dive into hospital performance metrics</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { title:"Avg. Patient Stay", val:"3.2 Days", icon: Users, color:"text-blue-600", bg:"bg-blue-100" },
 { title:"Readmission Rate", val:"4.1%", icon: TrendingUp, color:"text-emerald-600", bg:"bg-emerald-100" },
 { title:"ER Wait Time", val:"14 mins", icon: Activity, color:"text-amber-600", bg:"bg-amber-100" },
 { title:"Monthly Growth", val:"+12%", icon: BarChartIcon, color:"text-indigo-600", bg:"bg-indigo-100" }
 ].map((stat, idx) => (
 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} key={idx} className="bg-white p-6 rounded-md border border-gray-100 flex flex-col items-center text-center">
 <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 ${stat.bg}`}>
 <stat.icon className={`w-6 h-6 ${stat.color}`} />
 </div>
 <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
 <p className="text-2xl font-extrabold text-[#0B1221] mt-1">{stat.val}</p>
 </motion.div>
 ))}
 </div>

 <div className="bg-white p-6 rounded-md border border-gray-100">
 <h2 className="text-xl font-bold mb-6 text-[#0B1221]">Yearly Growth Metrics</h2>
 <div className="h-80 w-full">
 <ResponsiveContainer width="100%" height="100%">
 <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#9ca3af'}} />
 <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill:'#9ca3af'}} />
 <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill:'#9ca3af'}} />
 <Tooltip contentStyle={{ borderRadius:'6px', border:'none', boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
 <Line yAxisId="left" type="monotone" dataKey="patients" stroke="#2563eb" strokeWidth={3} activeDot={{ r: 8 }} />
 <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
 </LineChart>
 </ResponsiveContainer>
 </div>
 </div>
 </div>
 );
}
