"use client";

import React from "react";
import {
  Play,
  Disc3,
  Music2,
  AudioWaveformIcon as Waveform,
} from "lucide-react";
import PointItemCard from "@/components/cards/point-item-card";
import { motion } from "framer-motion";

const points = [
  {
    icon: <Play className="w-6 h-6" />,
    label: "Design",
    description:
      "Tampilan visual dan layout dirancang untuk memikat perhatian serta merepresentasikan karakter perusahaan Anda secara tepat.",
  },
  {
    icon: <Disc3 className="w-6 h-6" />,
    label: "Professional",
    description:
      "Konten disusun secara rapi dan sesuai dengan kaidah profesionalisme serta standar industri yang berlaku.",
  },
  {
    icon: <Music2 className="w-6 h-6" />,
    label: "Quality",
    description:
      "Isi mencakup informasi yang tepat, relevan, dan memberikan nilai tambah bagi pembaca.",
  },
  {
    icon: <Waveform className="w-6 h-6" />,
    label: "Simple",
    description:
      "Disusun dengan padat dan jelas—tidak bertele-tele namun cukup informatif untuk menggambarkan profil perusahaan Anda secara keseluruhan.",
  },
];

const Explain = () => {
  return (
    <section id="about" className="w-full px-5 overflow-hidden flex justify-center items-center">
      <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-4 py-12 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex justify-between items-center">
            <div className="flex-1 px-4 py-8 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11">
              <div className="w-full max-w-[1024px] text-justify text-foreground font-medium text-lg md:text-3xl lg:text-3xl">
                <h2>
                  Company profile adalah dokumen atau halaman yang berisi
                  informasi lengkap mengenai sebuah perusahaan, mulai dari
                  sejarah, visi dan misi, produk atau layanan, hingga pencapaian
                  dan kontak.
                </h2>
                <h3>
                  Tujuannya adalah memberikan gambaran menyeluruh tentang
                  identitas dan kredibilitas perusahaan kepada calon klien,
                  mitra, maupun investor.
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {points.map((point, index) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center cursor-default"
                  >
                    <PointItemCard point={point} />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center items-center gap-5">
                <div className="text-foreground text-base font-medium leading-6">
                  SUDUTPROFILE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explain;
