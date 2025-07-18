"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import clsx from "clsx"; // bạn cần cài: npm i clsx (nếu chưa có)

export default function ShowtimeDropdown() {
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
      {/* Trigger với hiệu ứng khi dropdown mở */}
      <div
        className={clsx(
          "px-3 py-1 rounded-md transition cursor-pointer font-medium",
          open ? "bg-red-500 text-white shadow-md" : "text-white hover:text-red-500"
        )}
      >
        Lịch chiếu
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] max-w-4xl h-[100px] bg-black/50 text-white rounded-lg shadow-lg z-50 flex items-center justify-around"
        >
          <Link href="/showtimes/today" className="px-4 py-2 hover:underline">
            Hôm nay
          </Link>
          <Link href="/showtimes/week" className="px-4 py-2 hover:underline">
            Tuần này
          </Link>
          <Link href="/showtimes/coming-soon" className="px-4 py-2 hover:underline">
            Sắp chiếu
          </Link>
        </div>
      )}
    </div>
  );
}
