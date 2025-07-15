import Link from 'next/link';
import { FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Mô tả */}
        <div>
          <h2 className="text-red-500 text-2xl font-bold">🎬 RạpPhim</h2>
          <p className="mt-2 text-sm">
            Nền tảng đặt vé xem phim trực tuyến nhanh chóng, tiện lợi và bảo mật.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-red-500">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="mailto:support@rapphim.vn" className="hover:text-red-500">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Liên kết nhanh */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Liên kết</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-red-500">Trang chủ</Link></li>
            <li><Link href="/cinemas" className="hover:text-red-500">Rạp chiếu</Link></li>
            <li><Link href="/showtimes" className="hover:text-red-500">Lịch chiếu</Link></li>
            <li><Link href="/promotions" className="hover:text-red-500">Khuyến mãi</Link></li>
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Liên hệ</h3>
          <p className="text-sm">Hotline: <span className="text-white">1900 123 456</span></p>
          <p className="text-sm">Email: <span className="text-white">support@rapphim.vn</span></p>
          <p className="text-sm">Địa chỉ: 19 Hà Đông, Hà Nội</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RạpPhim. All rights reserved.
      </div>
    </footer>
  );
}
