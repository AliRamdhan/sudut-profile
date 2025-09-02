import { Button } from "@/components/ui/button";
import React from "react";

const Cta = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Punya Kebutuhan Mendesak?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          Pesan jasa Disuruh sekarang dan biarkan kami membantu Anda — mulai
          dari belanja titipan, kirim barang, hingga jasa custom sesuai
          permintaan.
        </p>
        <Button className="px-8 py-3 text-lg rounded-full bg-gray-900 text-white hover:bg-gray-800">
          Pesan Sekarang
        </Button>
      </div>
    </section>
  );
};

export default Cta;
