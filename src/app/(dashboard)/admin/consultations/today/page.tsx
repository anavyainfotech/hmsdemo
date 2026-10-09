"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Stethoscope, Pill, FileText, CheckCircle, Send, Plus, X, Activity } from 'lucide-react';

const opdQueue = [
  { id: 1, token: 'T-104', name: 'John Doe', age: 45, gender: 'M', time: '10:30 AM', status: 'In Progress', type: 'Follow-up' },
  { id: 2, token: 'T-105', name: 'Alice Smith', age: 28, gender: 'F', time: '10:45 AM', status: 'Waiting', type: 'New Visit' },
  { id: 3, token: 'T-106', name: 'Robert Fox', age: 62, gender: 'M', time: '11:00 AM', status: 'Waiting', type: 'New Visit' },
  { id: 4, token: 'T-107', name: 'Esther Howard', age: 34, gender: 'F', time: '11:15 AM', status: 'Waiting', type: 'Reports Review' },
  { id: 5, token: 'T-103', name: 'Michael Chen', age: 50, gender: 'M', time: '10:15 AM', status: 'Completed', type: 'New Visit' },
];

export default function ConsultationsPage() {
  const [selectedPatient, setSelectedPatient] = useState<typeof opdQueue[0] | null>(opdQueue[0]);
  const [medicines, setMedicines] = useState([{ name: '', dosage: '', duration: '' }]);

  const addMedicineLine = () => setMedicines([...medicines, { name: '', dosage: '', duration: '' }]);
  const removeMedicine = (index: number) => setMedicines(medicines.filter((_, i) => i !== index));

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1221]">Live OPD Console</h1>
          <p className="text-gray-500 mt-1">Manage active queue and write e-prescriptions</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-md border border-gray-100 font-bold text-sm">
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Live Queue: 3 Waiting</span>
        </div>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Left Side: OPD Queue */}
        <div className="w-1/3 bg-white rounded-md border border-gray-100 flex flex-col overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search by Token or Name..." className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 transition-colors text-sm" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
            {opdQueue.map((patient) => (
              <div 
                key={patient.id} 
                onClick={() => setSelectedPatient(patient)}
                className={`p-3 rounded-md cursor-pointer border transition-all ${selectedPatient?.id === patient.id ? 'bg-blue-50 border-blue-200' : 'bg-white border-transparent hover:border-gray-100 hover:bg-gray-50'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${patient.status === 'In Progress' ? 'bg-blue-600 text-white' : patient.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {patient.token}
                    </span>
                    <span className="font-bold text-gray-900">{patient.name}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-500">{patient.time}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">{patient.age} Yrs • {patient.gender} • {patient.type}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${patient.status === 'Completed' ? 'text-green-600' : patient.status === 'In Progress' ? 'text-blue-600' : 'text-amber-600'}`}>{patient.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Doctor's Console / E-Prescription */}
        <div className="flex-1 bg-white rounded-md border border-gray-100 flex flex-col shadow-sm overflow-hidden">
          {selectedPatient ? (
            <>
              {/* Patient Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/30 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center font-bold text-lg">
                    {selectedPatient.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      {selectedPatient.name} 
                      <span className="text-sm font-medium text-gray-500 px-2 py-0.5 bg-gray-100 rounded-md">Token: {selectedPatient.token}</span>
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">{selectedPatient.age} Years • {selectedPatient.gender} • Blood Group: O+ • {selectedPatient.type}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md font-bold text-sm hover:bg-gray-50 flex items-center gap-2 transition-colors">
                    <Activity className="w-4 h-4" /> Vitals History
                  </button>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                
                {/* Clinical Notes */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"><Stethoscope className="w-4 h-4 text-blue-600" /> Clinical Notes & Diagnosis</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Chief Complaints (Symptoms)</label>
                      <textarea rows={2} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors text-sm" placeholder="e.g. Fever for 3 days, mild headache..."></textarea>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Primary Diagnosis</label>
                      <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors text-sm" placeholder="e.g. Viral Pharyngitis" />
                    </div>
                  </div>
                </div>

                {/* E-Prescription */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2"><Pill className="w-4 h-4 text-emerald-600" /> Rx Medicines</h3>
                    <button onClick={addMedicineLine} className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"><Plus className="w-3 h-3" /> Add Medicine</button>
                  </div>
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="p-3 font-bold text-gray-600 w-2/5">Medicine Name</th>
                          <th className="p-3 font-bold text-gray-600 w-1/4">Dosage (e.g. 1-0-1)</th>
                          <th className="p-3 font-bold text-gray-600 w-1/4">Duration</th>
                          <th className="p-3 font-bold text-gray-600 text-center w-10"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {medicines.map((med, idx) => (
                          <tr key={idx}>
                            <td className="p-2"><input type="text" className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-500" placeholder="e.g. Paracetamol 500mg" /></td>
                            <td className="p-2"><input type="text" className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-500" placeholder="1-1-1 after meal" /></td>
                            <td className="p-2"><input type="text" className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-500" placeholder="5 Days" /></td>
                            <td className="p-2 text-center">
                              {medicines.length > 1 && (
                                <button onClick={() => removeMedicine(idx)} className="text-gray-400 hover:text-red-500 p-1"><X className="w-4 h-4" /></button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Lab Tests */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-purple-600" /> Recommend Lab Tests</h3>
                  <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors text-sm" placeholder="Search and add lab tests (e.g. CBC, Lipid Profile)..." />
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center shrink-0">
                <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-md hover:bg-gray-50 transition-colors text-sm">Save Draft</button>
                <button className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center gap-2 shadow-lg shadow-blue-600/20">
                  <Send className="w-4 h-4" /> Send to Pharmacy & Complete
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8">
              <Stethoscope className="w-16 h-16 mb-4 text-gray-200" />
              <p className="text-lg font-bold text-gray-900 mb-1">No Patient Selected</p>
              <p className="text-sm text-center">Select a patient from the queue on the left to start the consultation and write an e-prescription.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
