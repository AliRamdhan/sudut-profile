import React from "react";
import { Check } from "lucide-react";
import CountUp from "react-countup";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="py-16 md:py-24 bg-[#0a0a2a] text-center bg-gray-50 text-black"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Track Record
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          Sejak 2020, Disuruh telah membantu ribuan orang menyelesaikan
          kebutuhan harian mereka — mulai dari belanja titipan, mengantar
          barang, hingga mengurus berbagai keperluan khusus. Cepat, aman, dan
          terpercaya.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <CountUp duration={3} end={260} />+
            </div>
            <div className="text-gray-600">Pesanan Selesai</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <CountUp duration={3} end={95} />%
            </div>
            <div className="text-gray-600">Tingkat Kepuasan</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <CountUp duration={3} end={200} />+
            </div>
            <div className="text-gray-600">Pelanggan Aktif</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <CountUp duration={3} end={100} />+
            </div>
            <div className="text-gray-600">Mitra Kurir</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          <Button variant={"outline"} className="rounded-full py-8 text-base">
            <Check /> Pesan & antar dalam hitungan menit
          </Button>
          <Button variant={"outline"} className="rounded-full py-8 text-base">
            <Check /> Mitra terpercaya & terverifikasi
          </Button>
          <Button variant={"outline"} className="rounded-full py-8 text-base">
            <Check /> Dukungan pelanggan 24/7
          </Button>
          <Button variant={"outline"} className="rounded-full py-8 text-base">
            <Check /> Harga transparan & terjangkau
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
