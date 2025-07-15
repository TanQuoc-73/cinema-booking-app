import Link from 'next/link';
import { FaSearch, FaUserAlt, FaTicketAlt, FaFilm } from 'react-icons/fa';

const navItems = [
  { label: 'Lịch chiếu', href: '/showtimes' },
  { label: 'Rạp phim', href: '/cinemas' },
  { label: 'Khuyến mãi', href: '/promotions' },
];

export default function Header() {
  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-red-500 text-xl font-bold">
          <FaFilm />
          <span>LOGO</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-red-500 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/search" className="text-gray-300 hover:text-red-500">
            <FaSearch size={18} />
          </Link>
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
