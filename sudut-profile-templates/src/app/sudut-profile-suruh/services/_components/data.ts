export type Product = {
  id: string;
  category: string;
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
};

export type CartItem = Product & { quantity: number };

export const products: Product[] = [
  {
    id: "101",
    category: "Belanja",
    title: "Belanja Titipan",
    price: 41,
    image: "/images/sudut-profile-suruh/services-shopping.jpg",
    description:
      "Titip belanja dari pasar, supermarket, atau toko favorit Anda, dan kami antar langsung ke rumah.",
    link: "#",
  },
  {
    id: "102",
    category: "Pengiriman",
    title: "Kirim Dokumen",
    price: 425,
    image: "/images/sudut-profile-suruh/service-document.jpg",
    description:
      "Kirim dokumen penting dengan cepat dan aman ke tujuan, tanpa repot keluar rumah.",
    link: "#",
  },
  {
    id: "103",
    category: "Antar Pesanan",
    title: "Antar Makanan",
    price: 45,
    image: "/images/sudut-profile-suruh/service-delivery.jpg",
    description:
      "Pesan makanan dari restoran favorit Anda dan biarkan kami mengantarkannya hangat ke pintu rumah.",
    link: "#",
  },
  {
    id: "104",
    category: "Jasa Harian",
    title: "Bantu Angkut Barang",
    price: 22,
    image: "/images/sudut-profile-suruh/services-send.jpg",
    description:
      "Butuh bantuan angkut barang pindahan atau belanja besar? Mitra kami siap membantu.",
    link: "#",
  },
  {
    id: "105",
    category: "Custom Request",
    title: "Jasa Khusus",
    price: 34,
    image: "/images/sudut-profile-suruh/services-request.jpg",
    description:
      "Punya permintaan unik? Tulis kebutuhan Anda dan kami akan carikan mitra yang tepat.",
    link: "#",
  },
  {
    id: "106",
    category: "Kebersihan",
    title: "Bersih-Bersih Rumah",
    price: 45,
    image: "/images/sudut-profile-suruh/service-clean.jpg",
    description:
      "Layanan pembersihan rumah harian atau mingguan, membuat rumah Anda tetap nyaman dan rapi.",
    link: "#",
  },
  {
    id: "107",
    category: "Perawatan",
    title: "Servis AC",
    price: 55,
    image: "/images/sudut-profile-suruh/service-repair.jpg",
    description:
      "Perawatan dan servis AC untuk memastikan udara tetap sejuk dan bersih.",
    link: "#",
  },
  {
    id: "108",
    category: "Perawatan Kendaraan",
    title: "Cuci Mobil & Motor",
    price: 75,
    image: "/images/sudut-profile-suruh/service-wash.jpg",
    description:
      "Layanan cuci kendaraan di rumah tanpa harus keluar, praktis dan cepat.",
    link: "#",
  },
  {
    id: "109",
    category: "Event",
    title: "Dekorasi Acara",
    price: 35,
    image: "/images/sudut-profile-suruh/service-event.jpg",
    description:
      "Dekorasi pernikahan, ulang tahun, atau acara spesial lainnya sesuai permintaan.",
    link: "#",
  },
  {
    id: "110",
    category: "Teknologi",
    title: "Perbaikan Gadget",
    price: 145,
    image: "/images/sudut-profile-suruh/service-gadget.jpg",
    description:
      "Perbaikan smartphone, laptop, atau perangkat elektronik lainnya dengan teknisi terpercaya.",
    link: "#",
  },
];
