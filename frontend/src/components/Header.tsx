'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSearch, FaUserAlt, FaTicketAlt, FaFilm } from 'react-icons/fa';
import ShowtimeDropdown from './dropdowns/Showtime';

const navItems = [
  { label: 'Rạp phim', href: '/cinemas' },
  { label: 'Khuyến mãi', href: '/promotions' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-red-500 text-xl font-bold">
          <FaFilm />
          <span>LOGO</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ShowtimeDropdown />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition ${
                pathname === item.href
                  ? 'text-red-500 '
                  : 'text-white hover:text-red-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search box */}
          <form action="/search" method="GET" className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-1 gap-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              name="q"
              placeholder="Tìm phim..."
              className="bg-transparent text-white placeholder-gray-400 outline-none text-sm w-40"
            />
          </form>

          {/* Icons */}
          <Link href="/my-tickets" className="text-gray-300 hover:text-red-500">
            <FaTicketAlt size={18} />
          </Link>
          <Link href="/profile" className="text-gray-300 hover:text-red-500">
            <FaUserAlt size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
