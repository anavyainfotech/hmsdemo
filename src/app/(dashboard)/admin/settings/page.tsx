"use client";

import { useState } from 'react';
import { Hospital, Bell, Lock, Globe, Database, Save } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1221]">System Settings</h1>
          <p className="text-gray-500 mt-1">Configure hospital preferences and integrations</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Sidebar Tabs */}
        <div className="w-full md:w-64 shrink-0 space-y-1">
          {[
            { id: 'general', label: 'General Info', icon: Hospital },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'security', label: 'Security & Auth', icon: Lock },
            { id: 'localization', label: 'Localization', icon: Globe },
            { id: 'backups', label: 'Data Backups', icon: Database },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md font-bold text-sm transition-colors text-left ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}
            >
              <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-gray-400'}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 bg-white border border-gray-100 rounded-md p-8 min-h-[500px]">
          
          {activeTab === 'general' && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">Hospital Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Hospital Name</label>
                  <input type="text" defaultValue="Anavya Hospital" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Registration No (License)</label>
                  <input type="text" defaultValue="REG-99482-11A" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Primary Address</label>
                  <input type="text" defaultValue="123 Healthcare Avenue, Medical District, NY 10001" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Contact Email</label>
                  <input type="email" defaultValue="admin@anavya.com" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Emergency Helpline</label>
                  <input type="tel" defaultValue="+1 (800) 999-EMER" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  { title: "Email Alerts for Appointments", desc: "Receive email when a new patient books online." },
                  { title: "SMS Alerts for Doctors", desc: "Send automated SMS reminders to doctors 1 hour before shift." },
                  { title: "Emergency Code Blue Push", desc: "Force push notifications to all active staff devices during emergency." },
                  { title: "Daily Revenue Summary", desc: "Receive a compiled PDF report at 11:59 PM everyday." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-md border border-gray-100 bg-gray-50">
                    <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-600" />
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6 animate-in fade-in flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <Lock className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900">Security Configuration</h3>
                <p className="text-gray-500 max-w-sm mt-2">Manage 2FA, password policies, and active sessions from your identity provider.</p>
                <button className="mt-6 text-blue-600 font-bold border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors">Change Password</button>
              </div>
            </div>
          )}

          {/* Placeholders for others */}
          {(activeTab === 'localization' || activeTab === 'backups') && (
            <div className="flex items-center justify-center min-h-[300px] text-gray-400 font-bold animate-in fade-in">
              Module available in premium plan
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
