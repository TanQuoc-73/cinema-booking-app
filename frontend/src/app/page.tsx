import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full flex items-center justify-center text-center">
        <Image
          src="/assets/imgs/banner.jpg" 
          alt="Cinema Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          priority
        />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-4">Đặt Vé Xem Phim Trực Tuyến</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Trải nghiệm mua vé dễ dàng, chọn chỗ ngồi yêu thích và nhận ưu đãi hấp dẫn.
          </p>
          <Link
            href="/showtimes"
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Xem lịch chiếu
          </Link>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Tại sao chọn RạpPhim?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300 text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Đặt vé nhanh chóng</h3>
            <p>Chỉ vài cú click là bạn đã có vé xem phim trong tay, không cần xếp hàng.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Chọn ghế yêu thích</h3>
            <p>Tự do chọn vị trí ngồi theo sở thích, dễ dàng và trực quan.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Ưu đãi mỗi ngày</h3>
            <p>Rất nhiều mã giảm giá và khuyến mãi hấp dẫn dành cho bạn.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
