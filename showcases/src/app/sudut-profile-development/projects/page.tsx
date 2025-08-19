"use client";

import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeImage2, setActiveImage2] = useState<string | null>(null);

  const properties1 = [
    {
      address:
        "JL. PANTAI LUAR AGUNG, JL. PANTAI PERMAI, CANGGU, KEC. KUTA UTARA, KABUPATEN BADUNG, BALI 80361",
      title: "Secana Beachtown",
      image: "/images/sudut-profile-development/cta.jpg",
    },
    {
      address: "JL. KAYU AYA NO. 88, SEMINYAK, KUTA, BADUNG, BALI 80361",
      title: "Sunset Villas",
      image: "/images/sudut-profile-development/cta.jpg",
    },
    {
      address:
        "JL. DANAU TAMBLINGAN NO. 21, SANUR, DENPASAR SELATAN, BALI 80228",
      title: "Sanur Beachfront",
      image: "/images/sudut-profile-development/testimonial.jpg",
    },
  ];

  const properties2 = [
    {
      address:
        "JL. PANTAI LUAR AGUNG, JL. PANTAI PERMAI, CANGGU, KEC. KUTA UTARA, KABUPATEN BADUNG, BALI 80361",
      title: "Secana",
      image: "/images/sudut-profile-development/cta.jpg",
    },
    {
      address: "JL. KAYU AYA NO. 88, SEMINYAK, KUTA, BADUNG, BALI 80361",
      title: "Villas",
      image: "/images/sudut-profile-development/cta.jpg",
    },
    {
      address:
        "JL. DANAU TAMBLINGAN NO. 21, SANUR, DENPASAR SELATAN, BALI 80228",
      title: "Beachfront",
      image: "/images/sudut-profile-development/testimonial.jpg",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center">
        {/* LEFT CONTENT */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full p-8 space-y-8">
            <div className="flex">
              <h3 className="w-96 text-left text-lg font-semibold text-black mb-4">
                Location
              </h3>
              <h3 className="text-left text-lg font-semibold text-black mb-4">
                Property
              </h3>
            </div>

            <div className="w-full">
              {properties1.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full flex justify-center items-center gap-x-8 space-y-8"
                >
                  <div className="w-96">
                    <p className="text-sm text-gray-600 leading-relaxed pt-8">
                      {item.address}
                    </p>
                  </div>
                  <div className="w-full">
                    <h1
                      className="text-7xl font-bold text-transparent leading-tight transition-all duration-500 bg-gradient-to-b from-gray-800 to-gray-800 bg-[length:100%_0%] hover:bg-[length:100%_100%] bg-no-repeat bg-clip-text cursor-default"
                      style={{
                        WebkitTextStroke: "1px rgb(0 0 0)",
                        transition: "background-size 0.5s ease-in-out",
                      }}
                      onMouseEnter={() => setActiveImage(item.image)}
                      onMouseLeave={() => setActiveImage(null)}
                    >
                      {item.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2 flex justify-center items-center overflow-hidden">
          {activeImage && (
            <Image
              src={activeImage}
              alt="Preview"
              width={1000}
              height={1000}
              className="w-full h-96 transition-all duration-500 ease-out transform translate-y-10 opacity-0"
              style={{
                transform: "translateY(0)",
                opacity: 1,
                transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
              }}
            />
          )}
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        {/* LEFT CONTENT */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full p-8 space-y-8">
            <div className="flex">
              <h3 className="w-96 text-left text-lg font-semibold text-black mb-4">
                Location
              </h3>
              <h3 className="text-left text-lg font-semibold text-black mb-4">
                Property
              </h3>
            </div>

            <div className="w-full">
              {properties2.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full flex justify-center items-center gap-x-8 space-y-8"
                >
                  <div className="w-96">
                    <p className="text-sm text-gray-600 leading-relaxed pt-8">
                      {item.address}
                    </p>
                  </div>
                  <div className="w-full">
                    <h1
                      className="text-7xl font-bold text-transparent leading-tight transition-all duration-500 bg-gradient-to-b from-gray-800 to-gray-800 bg-[length:100%_0%] hover:bg-[length:100%_100%] bg-no-repeat bg-clip-text cursor-default"
                      style={{
                        WebkitTextStroke: "1px rgb(0 0 0)",
                        transition: "background-size 0.5s ease-in-out",
                      }}
                      onMouseEnter={() => setActiveImage2(item.image)}
                      onMouseLeave={() => setActiveImage2(null)}
                    >
                      {item.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2 flex justify-center items-center overflow-hidden">
          {activeImage2 && (
            <Image
              src={activeImage2}
              alt="Preview"
              width={1000}
              height={1000}
              className="w-full h-96 transition-all duration-500 ease-out transform translate-y-10 opacity-0"
              style={{
                transform: "translateY(0)",
                opacity: 1,
                transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
