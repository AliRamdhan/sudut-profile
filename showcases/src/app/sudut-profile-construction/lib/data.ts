export interface ProductType {
  label: string;
  price: string;
  image: string;
  description: string;
}

export const productsData = [
  {
    label: "Bahan Konstruksi Dasar",
    price: "Rp.700 - Rp.350.000",
    image: "/images/construction/construction-product-base-material.jpg",
    description:
      "Material utama untuk pembangunan seperti semen, pasir, batu bata, dan batu split yang menjadi fondasi konstruksi.",
  },
  {
    label: "Material Struktural",
    price: "Rp.15.000 - Rp.150.000",
    image: "/images/construction/construction-product-structural.jpg",
    description:
      "Bahan pendukung struktur bangunan seperti besi beton, baja ringan, kayu, dan plywood untuk rangka dan kekuatan konstruksi.",
  },
  {
    label: "Material Dinding & Plafon",
    price: "Rp.45.000 - Rp.180.000",
    image: "/images/construction/construction-product-support.jpg",
    description:
      "Produk pelapis dan pembentuk ruangan seperti papan gypsum, GRC board, dan material plafon lainnya untuk finishing interior.",
  },
  {
    label: "Peralatan Pertukangan & Konstruksi",
    price: "Rp.150.000 - Rp.1.150.000",
    image: "/images/construction/construction-product-tools.jpg",
    description:
      "Peralatan kerja seperti bor listrik, palu, gergaji, dan alat ukur yang digunakan dalam proses pembangunan dan renovasi.",
  },
  {
    label: "Material Penutup & Pelapis",
    price: "Rp.2.000 - Rp.300.000",
    image: "/images/construction/construction-product-cover.jpg",
    description:
      "Produk penutup bangunan seperti genteng tanah liat, genteng metal, keramik lantai, dan marmer untuk estetika dan perlindungan.",
  },
  {
    label: "Material Pintu & Jendela",
    price: "Rp.50.000 - Rp.2.500.000",
    image: "/images/construction/construction-product-door-window.jpg",
    description:
      "Pintu, kusen, jendela, kaca, dan aksesorisnya yang digunakan untuk akses, pencahayaan, dan sirkulasi udara.",
  },
  {
    label: "Material Plumbing & Drainase",
    price: "Rp.10.000 - Rp.800.000",
    image: "/images/construction/construction-product-plumbing.jpg",
    description:
      "Perlengkapan saluran air seperti kran, shower, wastafel, toren air, dan floor drain untuk instalasi sanitasi.",
  },
  {
    label: "Material Listrik & Pencahayaan",
    price: "Rp.5.000 - Rp.1.500.000",
    image: "/images/construction/construction-product-electric.jpg",
    description:
      "Kabel listrik, stop kontak, saklar, lampu, dan panel listrik untuk instalasi penerangan dan tenaga listrik.",
  },
  {
    label: "Perlengkapan Finishing",
    price: "Rp.5.000 - Rp.250.000",
    image: "/images/construction/construction-product-finishing.jpg",
    description:
      "Produk finishing seperti cat, lem, sealant, grout, dan aksesoris interior untuk hasil akhir yang rapi dan estetis.",
  },
];

export const portfolios = [
  {
    label: "Kardian Office Tower Construction",
    slug: "kardian-office-tower-construction",
    image: "/images/construction/construction-portfolio-1.jpg",
    description:
      "Construction of a 40-story, state-of-the-art office tower in the heart of the downtown financial district. The project includes modern office spaces, retail outlets, and advanced energy-efficient systems.",
    location: "Tegal, Indonesia",
    duration: "36 months",
    price: "Rp. 180M",
  },
  {
    label: "Bridge Reconstruction Interstate Highway",
    slug: "bridge-reconstruction-interstate-highway",
    image: "/images/construction/construction-portfolio-2.jpg",
    description:
      "Reconstruction and widening of a vital interstate highway bridge to enhance traffic flow and safety. The project includes the demolition of the existing structure and the installation of a new, wider bridge.",
    location: "Bekasi, Indonesia",
    duration: "36 months",
    price: "Rp. 180M",
  },
  {
    label: "Residential Housing Development",
    slug: "residential-housing-development",
    image: "/images/construction/construction-portfolio-3.jpg",
    description:
      "Development of a suburban residential community consisting of 150 single-family homes and associated infrastructure, including roads, utilities, and recreational areas.",
    location: "Jakarta, Indonesia",
    duration: "36 months",
    price: "Rp. 180M",
  },
  {
    label: "Luxury Hotel & Resort Complex",
    slug: "luxury-hotel-resort-complex",
    image: "/images/construction/construction-portfolio-4.jpg",
    description:
      "Design and construction of a luxury beachfront hotel and resort complex featuring 200 guest rooms, villas, restaurants, swimming pools, and wellness facilities.",
    location: "Bali, Indonesia",
    duration: "30 months",
    price: "Rp. 250M",
  },
  {
    label: "University Campus Expansion",
    slug: "university-campus-expansion",
    image: "/images/construction/construction-portfolio-5.jpg",
    description:
      "Expansion of a major university campus, including the construction of new lecture halls, student dormitories, libraries, and sports facilities.",
    location: "Yogyakarta, Indonesia",
    duration: "24 months",
    price: "Rp. 120M",
  },
  {
    label: "Renewable Energy Power Plant",
    slug: "renewable-energy-power-plant",
    image: "/images/construction/construction-portfolio-6.jpg",
    description:
      "Construction of a large-scale solar power plant with cutting-edge technology to supply renewable energy to more than 50,000 households.",
    location: "Surabaya, Indonesia",
    duration: "28 months",
    price: "Rp. 300M",
  },
  {
    label: "Airport Terminal Modernization",
    slug: "airport-terminal-modernization",
    image: "/images/construction/construction-portfolio-7.jpg",
    description:
      "Upgrading and modernization of an existing airport terminal, including new passenger lounges, security checkpoints, and automated baggage handling systems.",
    location: "Medan, Indonesia",
    duration: "36 months",
    price: "Rp. 500M",
  },
  {
    label: "Smart City Infrastructure Development",
    slug: "smart-city-infrastructure-development",
    image: "/images/construction/construction-portfolio-8.jpg",
    description:
      "Comprehensive smart city infrastructure project featuring intelligent traffic systems, green parks, digital utilities, and public transport facilities.",
    location: "Bandung, Indonesia",
    duration: "48 months",
    price: "Rp. 750M",
  },
];
