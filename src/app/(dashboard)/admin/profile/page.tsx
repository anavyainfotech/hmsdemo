"use client";

import { Mail, Phone, MapPin, Shield, Edit3, Camera } from 'lucide-react';

export default function MyProfilePage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1221]">My Profile</h1>
          <p className="text-gray-500 mt-1">Manage your personal information</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Edit3 className="w-4 h-4" /> Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-md border border-gray-100 overflow-hidden">
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
          <button className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-md backdrop-blur-sm transition-colors">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        
        {/* Profile Info */}
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-12 mb-6">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80" alt="Profile" className="w-24 h-24 sm:w-32 sm:h-32 rounded-md border-4 border-white object-cover bg-white" />
              <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-1.5 rounded-md hover:bg-blue-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center sm:text-left flex-1 pb-2">
              <h2 className="text-2xl font-extrabold text-gray-900">Dr. Sarah Chen</h2>
              <p className="text-blue-600 font-bold mt-1">Hospital Administrator / Chief Medical Officer</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">About Me</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Dedicated Hospital Administrator with over 15 years of experience in healthcare management and clinical operations. Proven track record in improving patient care quality, optimizing hospital workflows, and leading large medical teams across multiple departments.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                    <p className="font-medium text-gray-900 mt-1">Sarah</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                    <p className="font-medium text-gray-900 mt-1">Chen</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <p className="font-medium text-gray-900">s.chen@anavya.com</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <p className="font-medium text-gray-900">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-md border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4 text-blue-600" /> System Roles</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Super Admin</span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Billing Access</span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pharmacy Mgt.</span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-md border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-600" /> Location Details</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Anavya Hospital - Main Branch<br/>
                  123 Healthcare Avenue<br/>
                  Medical District, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
