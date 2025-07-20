'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function ShowtimeDropdown() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div
        className={clsx(
          'px-3 py-1 rounded-md transition cursor-pointer font-medium',
          pathname.startsWith('/showtimes')
            ? 'text-red-500 shadow-md'
            : open
              ? 'text-red-500'
              : 'text-white hover:text-red-500'
        )}
      >
        <Link href="/showtimes" className="flex items-center">
          Lịch chiếu
        </Link>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] max-w-4xl h-[300px] bg-black/50 text-white rounded-lg shadow-lg z-50 flex justify-around items-center">
          <Link
            href="/showtimes/today"
            className={clsx(
              'px-4 py-2 transition',
              pathname === '/showtimes/today' ? 'text-red-400 underline' : 'hover:underline'
            )}
          >
            Hôm nay
          </Link>
          <Link
            href="/showtimes/week"
            className={clsx(
              'px-4 py-2 transition',
              pathname === '/showtimes/week' ? 'text-red-400 underline' : 'hover:underline'
            )}
          >
            Tuần này
          </Link>
          <Link
            href="/showtimes/coming-soon"
            className={clsx(
              'px-4 py-2 transition',
              pathname === '/showtimes/coming-soon' ? 'text-red-400 underline' : 'hover:underline'
            )}
          >
            Sắp chiếu
          </Link>
        </div>
      )}
    </div>  
  );
}
