"use client"

import Link from "next/link"
import { useState, useRef } from "react"

export default function ShowtimeDropdown() {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div className="text-white hover:text-red-500 font-medium transition cursor-pointer">
        Lịch chiếu
      </div>

      {/* Dropdown full-width */}
      {open && (
        <div className="fixed left-0 right-0 top-[80px] z-40 bg-black/40 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 gap-6">
            <Link href="/showtimes/today" className="hover:text-red-400 font-medium">
              <h3 className="text-lg mb-1">Lịch chiếu hôm nay</h3>
              <p className="text-sm text-gray-300">Xem toàn bộ suất chiếu đang diễn ra trong ngày.</p>
            </Link>
            <Link href="/showtimes/week" className="hover:text-red-400 font-medium">
              <h3 className="text-lg mb-1">Tuần này</h3>
              <p className="text-sm text-gray-300">Tổng hợp các phim chiếu theo lịch trong tuần.</p>
            </Link>
            <Link href="/showtimes/coming-soon" className="hover:text-red-400 font-medium">
              <h3 className="text-lg mb-1">Sắp chiếu</h3>
              <p className="text-sm text-gray-300">Xem các phim sắp được công chiếu tại rạp.</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
