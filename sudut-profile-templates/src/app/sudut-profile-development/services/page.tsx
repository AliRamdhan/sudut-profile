/* eslint-disable @next/next/no-img-element */
import React from "react";
import SliderService from "../_components/slider-service";
import Cta from "../_components/cta";

const Page = () => {
  return (
    <div>
      <section className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium">Services</p>

          <h1
            className={`italic text-4xl md:text-6xl font-semibold italic tracking-tighter leading-[130%]`}
          >
            What We Offer
          </h1>
        </div>

        <div className="max-w-5xl mt-10 text-3xl font-medium text-justify px-8">
          <h2 className="text-gray-800 leading-relaxed">
            We are a trusted real estate agency dedicated to helping you find
            the perfect property, whether you are buying, selling, or renting.
            Our team offers expert market insights, personalized guidance, and a
            commitment to making every transaction smooth and successful.
          </h2>
          <p className="text-gray-800 mt-4 leading-relaxed">
            From luxury homes and commercial spaces to investment properties and
            rentals, we connect clients with the right opportunities. We also
            provide professional property management, valuation services, and
            legal support to ensure your real estate journey is stress-free and
            rewarding.
          </p>
        </div>
      </section>
      <SliderService />
      <section>
        <div className="w-full py-12 px-4 py-8 md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-8 md:items-center md:gap-8">
            <div className="order-1 md:order-2 md:col-span-3">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-3xl font-semibold text-gray-900 sm:text-5xl">
                  Berinvestasi dengan mudah: <br />
                  <span> Visi Anda, Misi Kami</span>
                </h2>

                <p className="text-xl leading-8 mt-4 text-gray-800">
                  Di Mirah, layanan dari hulu ke hilir kami dirancang untuk
                  memastikan perjalanan investasi real estat yang benar-benar
                  pasif bagi klien kami. Konsep kami dibuat untuk memaksimalkan
                  pendapatan & ROI pemilik, sementara desain kami
                  memprioritaskan kenyamanan dan fasilitas terbaik. Dari
                  manajemen properti yang ahli hingga pemasaran strategis, kami
                  mencakup semua dasar untuk memastikan kinerja dan
                  profitabilitas yang optimal. Proses kami yang mulus
                  menghilangkan beban operasional dari klien, memungkinkan
                  mereka untuk menikmati hasil investasi mereka, mengetahui
                  bahwa aset mereka berada di tangan yang tepat, siap untuk
                  pertumbuhan dan kesuksesan yang berkelanjutan.
                </p>
              </div>
            </div>

            <div className="order-2 md:order-1 md:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded w-full h-[90vh] object-cover object-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </div>
  );
};

export default Page;
