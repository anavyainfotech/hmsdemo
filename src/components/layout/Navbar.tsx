"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Specialties', href: '/departments' },
    { name: 'Find a Doctor', href: '/doctors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-[#0B1221]">Anavya Hospital</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold leading-6 text-gray-700 hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6 items-center">
          <Link href="/auth/login" className="text-sm font-bold leading-6 text-gray-500 hover:text-gray-900 transition-colors">
            Staff Login
          </Link>
          <Link
            href="/book-appointment"
            className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button 
            type="button" 
            onClick={toggleMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="block rounded-md px-3 py-3 text-base font-bold text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
                <Link
                  href="/book-appointment"
                  onClick={toggleMenu}
                  className="block w-full text-center rounded-md bg-blue-600 px-3 py-3 text-base font-bold text-white shadow-sm hover:bg-blue-700"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/auth/login"
                  onClick={toggleMenu}
                  className="block w-full text-center rounded-md bg-gray-50 px-3 py-3 text-base font-bold text-gray-900 border border-gray-200"
                >
                  Staff Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
