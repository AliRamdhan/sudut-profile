"use client";

import type React from "react";
import { useState } from "react";
import FaqItemCard from "../cards/faq-item-card";

const faqData = [
  {
    question:
      "Apa itu website company profile dan mengapa penting untuk bisnis saya di tahun 2025?",
    answer:
      "Website company profile adalah platform digital yang menyajikan informasi lengkap mengenai bisnis Anda, seperti sejarah, visi-misi, layanan, dan pencapaian. Di tahun 2025, kehadiran digital yang kuat sangat penting untuk membangun kredibilitas, menjangkau lebih banyak klien, dan mempermudah kerja sama dengan investor atau mitra bisnis.",
  },
  {
    question:
      "Apa saja layanan yang termasuk dalam jasa pembuatan company profile yang Anda tawarkan?",
    answer:
      "Layanan jasa pembuatan company profile kami meliputi konsultasi awal, perancangan konsep desain, pengembangan website (termasuk halaman utama, tentang kami, layanan/produk, portofolio, kontak, dan halaman lain sesuai kebutuhan), optimasi mobile-friendly, integrasi media sosial, dan basic SEO (Search Engine Optimization) agar website mudah ditemukan di mesin pencari.",
  },
  {
    question:
      "Berapa biaya yang dibutuhkan untuk jasa pembuatan company profile?",
    answer:
      "Biaya jasa pembuatan company profile bervariasi tergantung pada kompleksitas desain, jumlah halaman, fitur tambahan yang dibutuhkan (seperti formulir khusus, integrasi sistem lain), dan tingkat kustomisasi. Silakan hubungi kami untuk penawaran harga yang disesuaikan.",
  },
  {
    question:
      "Berapa lama waktu yang dibutuhkan untuk proses pembuatan website company profile?",
    answer:
      "Waktu pengerjaan website company profile juga bervariasi tergantung pada kompleksitas proyek dan kecepatan respons dari pihak klien dalam menyediakan materi. Waktu pengerjaan umumnya memakan waktu antara 2-8 minggu  kerja, tergantung pada kelengkapan konten dan revisi yang diperlukan.",
  },
  {
    question:
      "Apakah desain website company profile bisa disesuaikan dengan identitas merek (branding) perusahaan saya?",
    answer:
      "Tentu saja! Kami sangat memahami pentingnya identitas merek. Tim desain kami akan bekerja sama dengan Anda untuk memastikan desain website company profile sesuai dengan logo, warna, tipografi, dan gaya visual merek perusahaan Anda.",
  },
  {
    question:
      "Apakah website company profile yang Anda buat akan responsif dan bisa diakses melalui berbagai perangkat (desktop, tablet, smartphone)?",
    answer:
      "Tentu, semua website company profile kami dibuat dengan desain responsif sehingga tampil optimal di semua ukuran layar dan perangkat.",
  },
  {
    question: "Bagaimana jika saya ingin mengubah konten atau desain website?",
    answer:
      "Kami menyediakan layanan revisi dan pengelolaan konten agar Anda dapat memperbarui informasi atau tampilan website sesuai kebutuhan.",
  },
  {
    question:
      "Apakah Anda menyediakan layanan pemeliharaan dan dukungan teknis setelah website company profile selesai dibuat?",
    answer:
      "Ya, kami menyediakan paket dukungan teknis dan pemeliharaan berkala untuk memastikan website Anda tetap berjalan optimal dan aman.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };
  return (
    <section className="w-full relative flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-2xl text-center text-foreground text-5xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about Pointer and how it can transform
            your development workflow
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 grid grid-cols-1 justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FaqItemCard
            key={index}
            {...faq}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
