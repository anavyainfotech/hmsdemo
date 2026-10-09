import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050A15] pt-20 pb-10 px-6 lg:px-8 border-t border-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-black text-white flex items-center gap-2 mb-6">
              Anavya Hospital
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Premium healthcare services combining world-class medical expertise with luxurious comfort and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">
                <span className="font-bold text-xs">FB</span>
              </div>
              <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">
                <span className="font-bold text-xs">TW</span>
              </div>
              <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">
                <span className="font-bold text-xs">IN</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="text-gray-400 hover:text-blue-500 transition-colors">Find a Doctor</Link></li>
              <li><Link href="/departments" className="text-gray-400 hover:text-blue-500 transition-colors">Departments</Link></li>
              <li><Link href="/book-appointment" className="text-gray-400 hover:text-blue-500 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Departments</h4>
            <ul className="space-y-4">
              <li><Link href="/departments/cardiology" className="text-gray-400 hover:text-blue-500 transition-colors">Cardiology</Link></li>
              <li><Link href="/departments/neurology" className="text-gray-400 hover:text-blue-500 transition-colors">Neurology</Link></li>
              <li><Link href="/departments/orthopedics" className="text-gray-400 hover:text-blue-500 transition-colors">Orthopedics</Link></li>
              <li><Link href="/departments/pediatrics" className="text-gray-400 hover:text-blue-500 transition-colors">Pediatrics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>123 Health Avenue, Medical District, NY 10001</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>contact@anavya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Anavya Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
