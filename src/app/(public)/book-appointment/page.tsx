"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, isBefore, startOfToday } from 'date-fns';
import 'react-day-picker/dist/style.css';

// Mock Data
const departments = [
  { id: 'Cardiology', icon: '❤️' },
  { id: 'Neurology', icon: '🧠' },
  { id: 'Orthopedics', icon: '🦴' },
  { id: 'Pediatrics', icon: '👶' },
  { id: 'Dental Care', icon: '🦷' },
  { id: 'Eye Care', icon: '👁️' },
];

const mockDoctors: Record<string, any[]> = {
  'Cardiology': [
    { id: 'doc1', name: 'Dr. Sarah Jenkins', title: 'Senior Cardiologist', exp: '15 Years Exp', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80', rating: '4.9', nextAvailable: 'Today' },
    { id: 'doc2', name: 'Dr. Rahul Sharma', title: 'Interventional Cardiologist', exp: '10 Years Exp', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80', rating: '4.8', nextAvailable: 'Tomorrow' }
  ],
  'Neurology': [
    { id: 'doc3', name: 'Dr. Michael Chen', title: 'Lead Neurologist', exp: '12 Years Exp', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&q=80', rating: '4.9', nextAvailable: 'Today' }
  ],
  // Fallback for others
  'default': [
    { id: 'doc4', name: 'Dr. Emily Roberts', title: 'Senior Specialist', exp: '14 Years Exp', image: 'https://images.unsplash.com/photo-1594824436951-7f12bc506161?w=200&q=80', rating: '4.8', nextAvailable: 'Today' },
    { id: 'doc5', name: 'Dr. James Wilson', title: 'Consultant', exp: '8 Years Exp', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80', rating: '4.7', nextAvailable: 'Next Week' }
  ]
};

const generateTimeSlots = () => {
  return ['09:00 AM', '09:30 AM', '10:15 AM', '11:00 AM', '01:30 PM', '02:45 PM', '04:00 PM', '05:30 PM'];
};

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: null as any,
    date: undefined as Date | undefined,
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
  });

  const today = startOfToday();

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };

  const css = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #2563eb;
      --rdp-background-color: #eff6ff;
      margin: 0;
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
      background-color: #f3f4f6;
    }
    .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
      background-color: #2563eb;
      color: white;
      font-weight: bold;
    }
  `;

  const availableDoctors = mockDoctors[formData.department] || mockDoctors['default'];

  return (
    <div className="bg-[#FAFBFF] h-[calc(100vh-73px)] overflow-hidden flex flex-col md:flex-row border-t border-gray-100">
      <style>{css}</style>

      {/* Left Sidebar - Progress */}
      <div className="bg-[#0B1221] md:w-1/3 lg:w-1/4 p-8 lg:p-12 text-white flex flex-col h-full border-r border-gray-800">
        <div>
          <h2 className="text-2xl font-bold mb-10">Book Appointment</h2>
          
          {/* Progress Steps */}
          <div className="space-y-6">
            {[
              { num: 1, title: 'Specialty', desc: formData.department || 'Select department' },
              { num: 2, title: 'Doctor', desc: formData.doctor ? formData.doctor.name : 'Choose specialist' },
              { num: 3, title: 'Date & Time', desc: formData.date ? `${format(formData.date, 'MMM do')}, ${formData.time}` : 'Pick a slot' },
              { num: 4, title: 'Details', desc: 'Patient information' }
            ].map((s) => (
              <div key={s.num} className="flex items-start gap-4 opacity-100">
                <div className={`mt-1 flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold shrink-0 transition-colors ${step === s.num ? 'border-blue-500 bg-blue-600 text-white' : step > s.num ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-600 bg-transparent text-gray-500'}`}>
                  {step > s.num ? '✓' : s.num}
                </div>
                <div>
                  <h4 className={`font-bold ${step === s.num ? 'text-white' : step > s.num ? 'text-blue-200' : 'text-gray-500'}`}>{s.title}</h4>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="md:w-2/3 lg:w-3/4 flex flex-col h-full bg-white">
        <div className="flex-grow overflow-y-auto p-8 lg:p-12 xl:p-16">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Department */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-3xl font-bold text-[#0B1221] mb-2">What do you need help with?</h3>
                  <p className="text-gray-500 mb-8">Select a medical specialty to find the best doctors.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {departments.map((dept) => (
                      <div 
                        key={dept.id} 
                        onClick={() => { setFormData({ ...formData, department: dept.id, doctor: null, date: undefined, time: '' }); handleNext(); }}
                        className={`group flex items-center gap-4 p-4 rounded-xl cursor-pointer border-2 transition-all ${formData.department === dept.id ? 'border-blue-600 bg-blue-50' : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50'}`}
                      >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                          {dept.icon}
                        </div>
                        <span className="font-bold text-gray-800">{dept.id}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Select Doctor */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-4 mb-2">
                    <button onClick={handleBack} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <h3 className="text-3xl font-bold text-[#0B1221]">Select a Doctor</h3>
                  </div>
                  <p className="text-gray-500 mb-8 ml-14">Showing top specialists for {formData.department}</p>
                  
                  <div className="space-y-4">
                    {availableDoctors.map((doc) => (
                      <div 
                        key={doc.id}
                        onClick={() => { setFormData({ ...formData, doctor: doc, date: undefined, time: '' }); handleNext(); }}
                        className={`flex flex-col sm:flex-row gap-6 p-5 rounded-xl cursor-pointer border-2 transition-all ${formData.doctor?.id === doc.id ? 'border-blue-600 bg-blue-50' : 'border-gray-100 hover:border-blue-200 hover:shadow-md'}`}
                      >
                        <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm" />
                        <div className="flex-grow flex flex-col justify-center">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-xl font-bold text-gray-900">{doc.name}</h4>
                              <p className="text-blue-600 font-semibold text-sm mb-2">{doc.title}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded text-yellow-700 font-bold text-xs">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              {doc.rating}
                            </div>
                          </div>
                          <div className="flex gap-4 mt-2 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> {doc.exp}</span>
                            <span className="flex items-center gap-1 text-green-600"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> Next: {doc.nextAvailable}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Date & Time */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-4 mb-2">
                    <button onClick={handleBack} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <h3 className="text-3xl font-bold text-[#0B1221]">Select Slot</h3>
                  </div>
                  <p className="text-gray-500 mb-8 ml-14">Choose an available slot for <strong>{formData.doctor?.name}</strong></p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex justify-center">
                      <DayPicker
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => setFormData({ ...formData, date, time: '' })}
                        disabled={(date) => isBefore(date, today)}
                        showOutsideDays
                        className="rdp-calendar"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-4">
                        {formData.date ? format(formData.date, 'EEEE, MMMM do') : 'Select a date'}
                      </h4>
                      {!formData.date ? (
                        <div className="h-48 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-medium p-6 text-center bg-gray-50">
                          Please select a date on the calendar to see available slots
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3">
                          {generateTimeSlots().map((time) => (
                            <button
                              key={time}
                              onClick={() => setFormData({...formData, time})}
                              className={`py-3 px-2 rounded-lg border font-bold transition-all text-sm ${formData.time === time ? 'border-blue-600 bg-blue-600 text-white shadow-md' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'}`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <button 
                      onClick={handleNext} disabled={!formData.date || !formData.time}
                      className="px-8 py-3 bg-[#0B1221] text-white rounded-lg font-bold disabled:opacity-50 hover:bg-gray-800 transition-colors shadow-lg"
                    >
                      Proceed to Details
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Patient Details */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-4 mb-2">
                    <button onClick={handleBack} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <h3 className="text-3xl font-bold text-[#0B1221]">Patient Details</h3>
                  </div>
                  <p className="text-gray-500 mb-8 ml-14">Final step to confirm your appointment.</p>

                  <div className="bg-blue-50 rounded-xl p-5 mb-8 flex items-center gap-4 border border-blue-100">
                    <img src={formData.doctor?.image} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <p className="text-blue-800 font-bold">{formData.doctor?.name}</p>
                      <p className="text-blue-600 text-sm font-medium">{formData.date ? format(formData.date, 'MMM do, yyyy') : ''} at {formData.time}</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Doe" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>

                    <button type="submit" disabled={!formData.firstName || !formData.lastName || !formData.phone} className="w-full mt-6 py-4 bg-blue-600 text-white rounded-lg font-bold disabled:opacity-50 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                      Confirm Appointment
                    </button>
                  </form>
                </motion.div>
              )}

              {/* STEP 5: Success */}
              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-[#0B1221] mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                    Thanks {formData.firstName}! You're booked with <strong>{formData.doctor?.name}</strong> on <strong>{formData.date ? format(formData.date, 'MMMM do') : ''} at {formData.time}</strong>.
                  </p>
                  <button onClick={() => { setFormData({ department: '', doctor: null, date: undefined, time: '', firstName: '', lastName: '', phone: '' }); setStep(1); }} className="px-8 py-3 bg-[#0B1221] text-white rounded-lg font-bold hover:bg-gray-800 transition-colors">
                    Book Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
