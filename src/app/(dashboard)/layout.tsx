"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, Users, Calendar, LogOut, 
  Activity, Search, Bell, MessageSquare, Menu, 
  ChevronDown, ChevronRight, Stethoscope, 
  Building2, FileText, BedDouble, UserCircle, Clock,
  Settings, User
} from 'lucide-react';

const sidebarLinks = [
  { 
    name: 'Dashboard', 
    icon: LayoutDashboard,
    subItems: [
      { name: 'Overview', href: '/admin' },
      { name: 'Analytics', href: '/admin/analytics' }
    ]
  },
  { 
    name: 'Patients', 
    icon: Users,
    subItems: [
      { name: 'All Patients', href: '/admin/patients' },
      { name: 'Add Patient', href: '/admin/patients/add' },
      { name: 'Patient Record', href: '/admin/patients/record' }
    ]
  },
  { 
    name: 'Doctors', 
    icon: Stethoscope,
    subItems: [
      { name: 'All Doctors', href: '/admin/doctors' },
      { name: 'Doctor Profile', href: '/admin/doctors/profile' },
      { name: 'Add Doctor', href: '/admin/doctors/add' }
    ]
  },
  { 
    name: 'Appointments', 
    icon: Calendar,
    subItems: [
      { name: 'Upcoming', href: '/admin/appointments' },
      { name: 'Calendar View', href: '/admin/appointments/calendar' }
    ]
  },
  { name: 'Departments', href: '/admin/departments', icon: Building2 },
  { 
    name: 'Consultations', 
    icon: FileText,
    subItems: [
      { name: 'Today', href: '/admin/consultations/today' }
    ]
  },
  { name: 'Bed Management', href: '/admin/beds', icon: BedDouble },
  { name: 'Emergency', href: '/admin/emergency', icon: Activity },
  { name: 'Staff', href: '/admin/staff', icon: UserCircle },
  { name: 'Shift Management', href: '/admin/shifts', icon: Clock }
];

const messagesList = [
  { id: 1, name: 'Dr. James Okafor', text: 'Please review the reports for Bed 12.', time: '5m ago', unread: true },
  { id: 2, name: 'Nurse Taylor', text: 'Emergency in Ward A.', time: '12m ago', unread: true },
  { id: 3, name: 'Dr. Sarah Jenkins', text: 'I will take the morning shift tomorrow.', time: '1h ago', unread: false },
];

const notificationsList = [
  { id: 1, type: 'emergency', text: 'Code Blue triggered in ICU', time: 'Just now' },
  { id: 2, type: 'appointment', text: 'New appointment booked by Alice Smith', time: '10 mins ago' },
  { id: 3, type: 'system', text: 'Weekly database backup completed', time: '2 hours ago' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>('Dashboard');
  
  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<'messages' | 'notifications' | 'profile' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-expand the menu that matches the current path
  useEffect(() => {
    for (const link of sidebarLinks) {
      if (link.subItems) {
        if (link.subItems.some(sub => sub.href === pathname)) {
          setOpenMenu(link.name);
          break;
        }
      } else if (link.href === pathname) {
        setOpenMenu(link.name);
        break;
      }
    }
  }, [pathname]);

  const toggleSubmenu = (menuName: string) => {
    if (!isExpanded) {
      setIsExpanded(true); // Auto expand sidebar if clicked when closed
      setOpenMenu(menuName);
    } else {
      setOpenMenu(openMenu === menuName ? null : menuName);
    }
  };

  const toggleDropdown = (name: 'messages' | 'notifications' | 'profile') => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="flex h-screen bg-[#FAFBFF] font-sans text-gray-900">
      
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-100 flex flex-col hidden lg:flex transition-all duration-300 z-20 ${isExpanded ? 'w-[280px]' : 'w-20'}`}>
        <div className={`h-20 flex items-center border-b border-gray-100 ${isExpanded ? 'px-8 justify-between' : 'justify-center'}`}>
          {isExpanded ? (
            <span className="text-2xl font-extrabold tracking-tight text-[#0B1221]">Anavya</span>
          ) : (
            <span className="text-2xl font-extrabold tracking-tight text-blue-600">A</span>
          )}
        </div>
        
        <div className="flex-1 py-6 px-4 flex flex-col gap-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const hasSub = !!link.subItems;
            const isOpen = openMenu === link.name;
            
            // Check if any subitem is active or if the main link is active
            const isActive = hasSub 
              ? link.subItems?.some(sub => sub.href === pathname)
              : pathname === link.href;

            return (
              <div key={link.name}>
                {hasSub ? (
                  // Submenu Parent Button
                  <button
                    onClick={() => toggleSubmenu(link.name)}
                    title={!isExpanded ? link.name : undefined}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md font-medium transition-all ${!isExpanded ? 'justify-center px-0' : ''} ${isActive || isOpen ? 'text-blue-600 bg-blue-50/50' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 shrink-0 ${isActive || isOpen ? 'text-blue-600' : 'text-gray-400'}`} />
                      {isExpanded && <span>{link.name}</span>}
                    </div>
                    {isExpanded && (
                      isOpen ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                ) : (
                  // Direct Link
                  <Link
                    href={link.href!}
                    title={!isExpanded ? link.name : undefined}
                    className={`flex items-center gap-3 py-2.5 rounded-md font-medium transition-all ${isExpanded ? 'px-4' : 'px-0 justify-center'} ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                    {isExpanded && <span>{link.name}</span>}
                  </Link>
                )}

                {/* Submenu Items */}
                {hasSub && isOpen && isExpanded && (
                  <div className="mt-1 mb-2 ml-4 pl-4 border-l-2 border-gray-100 flex flex-col gap-1">
                    {link.subItems?.map(sub => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors ${pathname === sub.href ? 'text-blue-600 bg-blue-50 font-bold' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <Link 
            href="/auth/login" 
            title={!isExpanded ? "Logout" : undefined}
            className={`flex items-center gap-3 py-2.5 rounded-md font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 w-full transition-colors ${isExpanded ? 'px-4' : 'px-0 justify-center'}`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isExpanded && <span>Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-10 shrink-0">
          
          <div className="flex items-center gap-4">
            {/* Sidebar Toggle Button */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search Bar */}
            <div className="relative hidden md:block w-96 ml-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search patients, doctors, records..." 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent hover:border-gray-200 focus:border-blue-600 focus:bg-white rounded-md focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all text-sm" 
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto" ref={dropdownRef}>
            
            {/* Messages Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('messages')}
                className={`relative p-2 transition-colors rounded-md ${activeDropdown === 'messages' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white box-content"></span>
                <MessageSquare className="w-6 h-6" />
              </button>

              {activeDropdown === 'messages' && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-100 rounded-md shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-gray-900">Messages</h3>
                    <span className="text-xs text-blue-600 font-bold cursor-pointer">Mark all read</span>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {messagesList.map(msg => (
                      <div key={msg.id} className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex gap-3 ${msg.unread ? 'bg-blue-50/30' : ''}`}>
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 shrink-0">
                          {msg.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className={`font-bold text-sm ${msg.unread ? 'text-gray-900' : 'text-gray-700'}`}>{msg.name}</span>
                            <span className="text-[10px] text-gray-400 font-bold">{msg.time}</span>
                          </div>
                          <p className={`text-xs ${msg.unread ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-gray-100 bg-white">
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-800">View all messages</button>
                  </div>
                </div>
              )}
            </div>

            {/* Notifications Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('notifications')}
                className={`relative p-2 transition-colors rounded-md ${activeDropdown === 'notifications' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white box-content">3</span>
                <Bell className="w-6 h-6" />
              </button>

              {activeDropdown === 'notifications' && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-100 rounded-md shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-gray-900">Notifications</h3>
                    <span className="text-xs text-blue-600 font-bold cursor-pointer">Clear all</span>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {notificationsList.map(notif => (
                      <div key={notif.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${notif.type === 'emergency' ? 'bg-red-100 text-red-600' : notif.type === 'appointment' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                          {notif.type === 'emergency' && <Activity className="w-4 h-4" />}
                          {notif.type === 'appointment' && <Calendar className="w-4 h-4" />}
                          {notif.type === 'system' && <Settings className="w-4 h-4" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">{notif.text}</p>
                          <span className="text-[10px] text-gray-400 font-bold mt-1 block">{notif.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-gray-100 bg-white">
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-800">View all notifications</button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="h-8 w-px bg-gray-200 mx-2"></div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <div 
                className="flex items-center gap-3 cursor-pointer group p-1.5 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => toggleDropdown('profile')}
              >
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Dr. Sarah Chen</p>
                  <p className="text-xs font-medium text-gray-500">Hospital Admin</p>
                </div>
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80" alt="Admin" className="w-10 h-10 rounded-md border-2 border-gray-100 group-hover:border-blue-600 transition-colors object-cover" />
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'profile' ? 'rotate-180' : ''}`} />
              </div>

              {activeDropdown === 'profile' && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                  <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center gap-3 md:hidden">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80" alt="Admin" className="w-10 h-10 rounded-md object-cover" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Dr. Sarah Chen</p>
                      <p className="text-xs text-gray-500">Hospital Admin</p>
                    </div>
                  </div>
                  <div className="p-2">
                    <Link href="/admin/profile" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors">
                      <User className="w-4 h-4" /> My Profile
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors">
                      <Settings className="w-4 h-4" /> Account Settings
                    </Link>
                  </div>
                  <div className="p-2 border-t border-gray-100">
                    <Link href="/auth/login" className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-red-600 rounded-md hover:bg-red-50 transition-colors">
                      <LogOut className="w-4 h-4" /> Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAFBFF]">
          {children}
        </div>
      </main>
    </div>
  );
}