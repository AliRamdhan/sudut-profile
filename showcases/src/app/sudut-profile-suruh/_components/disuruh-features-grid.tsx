import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const Features = () => {
  return (
    <section id="solution" className="py-16 md:py-24 bg-background min-h-screen flex items-center text-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="lg:pr-12 lg:sticky lg:top-0 lg:self-start py-32">
          {" "}
          {/* Re-added sticky classes */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
            Layanan Terbaik, Pengalaman Terpercaya
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Kami menghubungkan Anda dengan mitra terpercaya untuk belanja
            titipan, kirim barang, antar makanan, dan banyak lagi — cepat, aman,
            dan tanpa ribet.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Card className="bg-white border border-gray-200 p-6 flex flex-col items-start text-left text-black">
            <Image
              src="/images/sudut-profile-suruh/benefit-fast.jpg"
              alt="Fast delivery"
              width={100}
              height={100}
              className="rounded-lg mb-4 object-cover aspect-square"
            />
            <h3 className="text-xl font-semibold mb-2">
              Pesan & Antar dalam Hitungan Menit
            </h3>
            <p className="text-gray-600 text-sm">
              Layanan cepat untuk kebutuhan mendadak Anda — dari belanja hingga
              pengantaran dokumen.
            </p>
          </Card>

          <Card className="bg-white border border-gray-200 p-6 flex flex-col items-start text-left text-black">
            <Image
              src="/images/sudut-profile-suruh/benefit-partner.jpg"
              alt="Trusted partner"
              width={100}
              height={100}
              className="rounded-lg mb-4 object-cover aspect-square"
            />
            <h3 className="text-xl font-semibold mb-2">
              Mitra Terpercaya & Terverifikasi
            </h3>
            <p className="text-gray-600 text-sm">
              Semua mitra kami melalui proses verifikasi untuk memastikan
              keamanan dan kualitas layanan.
            </p>
          </Card>

          <Card className="bg-white border border-gray-200 p-6 flex flex-col items-start text-left text-black">
            <Image
              src="/images/sudut-profile-suruh/benefit-price.jpg"
              alt="Fair pricing"
              width={100}
              height={100}
              className="rounded-lg mb-4 object-cover aspect-square"
            />
            <h3 className="text-xl font-semibold mb-2">
              Harga Transparan & Terjangkau
            </h3>
            <p className="text-gray-600 text-sm">
              Tidak ada biaya tersembunyi, semua harga jelas di awal sebelum
              Anda memesan.
            </p>
          </Card>

          <Card className="bg-white border border-gray-200 p-6 flex flex-col items-start text-left text-black">
            <Image
              src="/images/sudut-profile-suruh/benefits-custom.jpg"
              alt="Custom request"
              width={100}
              height={100}
              className="rounded-lg mb-4 object-cover aspect-square"
            />
            <h3 className="text-xl font-semibold mb-2">
              Layanan Sesuai Permintaan Anda
            </h3>
            <p className="text-gray-600 text-sm">
              Punya permintaan khusus? Tulis saja, dan kami akan mencarikan
              mitra yang tepat untuk Anda.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
