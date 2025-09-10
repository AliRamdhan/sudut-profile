import React from "react";
import Image from "next/image";

const ClientLogo = () => {
  const companies = [
    { name: "Arvindo Indonesia", logo: "/images/logo/arvindo.png" },
    { name: "Posyandu", logo: "/images/logo/posyandu.png" },
    { name: "Laduny Computer", logo: "/images/logo/laduny.png" },
    { name: "Meteseh", logo: "/images/logo/meteseh.gif" },
    { name: "IAICP", logo: "/images/logo/iaicp.png" },
    { name: "PUSB - President University", logo: "/images/logo/pusb.png" },
    { name: "AKAB V", logo: "/images/logo/akab.png" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
        {/* Split into rows dynamically */}
        {Array.from({ length: Math.ceil(companies.length / 4) }).map(
          (_, rowIndex) => {
            const row = companies.slice(rowIndex * 4, rowIndex * 4 + 4);
            return (
              <div
                key={rowIndex}
                className="flex justify-center flex-wrap gap-8 md:gap-16 lg:gap-32 my-8"
              >
                {row.map((company) => (
                  <div
                    key={company.name}
                    className="flex flex-col items-center justify-between gap-2 transition-all duration-300 text-gray-400 hover:text-gray-300 hover:scale-105"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={120}
                      height={56}
                      className="object-contain"
                    />
                    <span className="text-lg font-medium tracking-wide text-center">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default ClientLogo;
