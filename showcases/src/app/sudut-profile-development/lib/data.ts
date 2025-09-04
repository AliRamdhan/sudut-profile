export const testimonials = [
  {
    id: 1,
    content:
      "Sudut Profile Development transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "Tech Innovations Inc.",
    avatar: "/professional-woman-diverse.png",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Working with this team was an absolute pleasure. They delivered on time and within budget while maintaining exceptional quality.",
    author: "Michael Chen",
    role: "Project Manager",
    company: "Urban Development Co.",
    avatar: "/professional-man.png",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The level of professionalism and expertise shown throughout our project was remarkable. Highly recommended for any development needs.",
    author: "Emily Rodriguez",
    role: "Architect",
    company: "Design Studio Plus",
    avatar: "/professional-woman-architect.png",
    rating: 5,
  },
  {
    id: 4,
    content:
      "From concept to completion, they guided us through every step. The final result speaks for itself - simply outstanding work.",
    author: "David Thompson",
    role: "Business Owner",
    company: "Thompson Enterprises",
    avatar: "/business-owner.png",
    rating: 5,
  },
]

export const stats = [
  { value: 150, suffix: "+", prefix: "", label: "Projects Completed" },
  { value: 98, suffix: "%", prefix: "", label: "Client Satisfaction" },
  { value: 25, suffix: "+", prefix: "", label: "Years Experience" },
  { value: 500, suffix: "+", prefix: "", label: "Happy Clients" },
  { value: 50, suffix: "+", prefix: "", label: "Team Members" },
  { value: 15, suffix: "+", prefix: "", label: "Awards Won" },
]

export const portfolioFrames = [
  {
    id: 1,
    video: "/videos/project1.mp4",
    position: { top: "10%", left: "5%" },
    size: { width: "280px", height: "200px" },
    rotation: "-2deg",
  },
  {
    id: 2,
    video: "/videos/project2.mp4",
    position: { top: "15%", right: "10%" },
    size: { width: "250px", height: "180px" },
    rotation: "3deg",
  },
  {
    id: 3,
    video: "/videos/project3.mp4",
    position: { top: "40%", left: "15%" },
    size: { width: "300px", height: "220px" },
    rotation: "1deg",
  },
  {
    id: 4,
    video: "/videos/project4.mp4",
    position: { top: "35%", right: "5%" },
    size: { width: "270px", height: "190px" },
    rotation: "-1deg",
  },
  {
    id: 5,
    video: "/videos/project5.mp4",
    position: { bottom: "20%", left: "8%" },
    size: { width: "260px", height: "185px" },
    rotation: "2deg",
  },
  {
    id: 6,
    video: "/videos/project6.mp4",
    position: { bottom: "25%", right: "12%" },
    size: { width: "290px", height: "210px" },
    rotation: "-3deg",
  },
]

export const news = [
  {
    id: "kuara-resort-launch",
    title: "Mirah Investment & Development Achieves Key Milestone...",
    date: "June 24, 2025",
    category: "Featured Story",
    description:
      "A groundbreaking achievement in luxury hospitality and more about Kuara Resort's grand opening story...",
    image: "/images/logistics/templates-logistic1-client2.jpg",
    type: "featured",
  },
  {
    id: "klara-ocean-place",
    title: "Introducing Klara Ocean Place: Batu Belig's Newest...",
    date: "May 23, 2025",
    category: "Press Release",
    image: "/images/logistics/templates-logistic1-client2.jpg",
    type: "recent",
  },
  {
    id: "finns-bali-stage-2",
    title: "After Record Sell-Out, FINNS Bali Resort Launches Stage 2 Sales",
    date: "May 5, 2025",
    category: "Press Release",
    image: "/images/logistics/templates-logistic1-client2.jpg",
    type: "recent",
  },
  {
    id: "cocana-resort-award",
    title: "Cocana Resort Named Top 10% of Hotels Worldwide...",
    date: "June 17, 2025",
    category: "Award",
    image: "/images/logistics/templates-logistic1-client2.jpg",
    type: "recent",
  },
  {
    id: "cocana-best-earner",
    title: "Cocana Resort Wins 'Best Earner' Award from Expedia Group",
    date: "April 14, 2025",
    category: "Award",
    description: "Recognition for outstanding performance and revenue generation...",
    image: "/images/logistics/templates-logistic1-client2.jpg",
    type: "more",
  },
]

export const services = [
  {
    id: 1,
    title: "Design and Planning Services",
    description: "Comprehensive architectural design and planning solutions tailored to your vision and requirements.",
    features: ["Architectural Design", "Interior Planning", "3D Visualization", "Project Consultation"],
    image: "/architectural-design-planning.png",
  },
  {
    id: 2,
    title: "Construction and Building",
    description: "Full-scale construction services with quality craftsmanship and attention to detail.",
    features: ["General Contracting", "Project Management", "Quality Control", "Timeline Management"],
    image: "/construction-building.png",
  },
  {
    id: 3,
    title: "Renovation and Remodeling",
    description: "Transform existing spaces with our expert renovation and remodeling services.",
    features: ["Space Optimization", "Modern Updates", "Structural Improvements", "Design Integration"],
    image: "/renovation-remodeling.png",
  },
]


export interface ProjectBase {

  id: number
  slug: string
  address: string 
  title: string
  status: string
  completion: string
  investment: string
  units: string
  image: string
  category: string
  description: string
  features: string[]
  specifications: {
    [key: string]: string
  }
  sustainability: string[]
}

export interface CurrentProject extends ProjectBase {
  timeline: {
    [key: string]: string
  }
}

export interface CompletedProject extends ProjectBase {
  achievements: string[]
}

export type Project = CurrentProject | CompletedProject

export const currentProjects: CurrentProject[] = [
  {
    id: 1,
    slug: "secana-beachtown", // Added slug field for URL routing
    address: "JL. PANTAI LUAR AGUNG, JL. PANTAI PERMAI, CANGGU, KEC. KUTA UTARA, KABUPATEN BADUNG, BALI 80361",
    title: "Secana Beachtown",
    status: "Under Construction",
    completion: "Q2 2025",
    investment: "$45M",
    units: "120 Villas",
    image: "/images/sudut-profile-development/cta.jpg",
    category: "Residential Resort",
    description:
      "An exclusive beachfront villa development featuring contemporary Balinese architecture with direct beach access. Each villa includes private pools, tropical gardens, and panoramic ocean views.",
    features: [
      "Private beach access",
      "Individual swimming pools",
      "Smart home technology",
      "Sustainable design elements",
      "24/7 concierge service",
      "Fitness center and spa",
    ],
    specifications: {
      totalArea: "15 hectares",
      villaSize: "180-350 sqm",
      bedrooms: "2-4 bedrooms",
      amenities: "Beach club, restaurant, spa, fitness center",
      parking: "2 cars per villa",
    },
    timeline: {
      groundbreaking: "January 2024",
      construction: "March 2024 - June 2025",
      handover: "July 2025",
    },
    sustainability: [
      "Solar panel integration",
      "Rainwater harvesting system",
      "Local material sourcing",
      "Waste management facility",
    ],
  },
  {
    id: 2,
    slug: "sunset-villas", // Added slug field for URL routing
    address: "JL. KAYU AYA NO. 88, SEMINYAK, KUTA, BADUNG, BALI 80361",
    title: "Sunset Villas",
    status: "Planning Phase",
    completion: "Q4 2025",
    investment: "$32M",
    units: "85 Villas",
    image: "/images/sudut-profile-development/cta_2.jpg",
    category: "Luxury Residential",
    description:
      "Premium villa complex in the heart of Seminyak, combining modern luxury with traditional Balinese charm. Located minutes from world-class dining and shopping.",
    features: [
      "Prime Seminyak location",
      "Rooftop terraces",
      "Private courtyards",
      "High-end finishes",
      "Security system",
      "Community facilities",
    ],
    specifications: {
      totalArea: "8 hectares",
      villaSize: "150-280 sqm",
      bedrooms: "2-3 bedrooms",
      amenities: "Clubhouse, swimming pool, garden",
      parking: "2 cars per villa",
    },
    timeline: {
      planning: "October 2024",
      construction: "January 2025 - October 2025",
      handover: "November 2025",
    },
    sustainability: [
      "Energy-efficient design",
      "Green building materials",
      "Water conservation systems",
      "Landscaping with native plants",
    ],
  },
  {
    id: 3,
    slug: "sanur-beachfront", // Added slug field for URL routing
    address: "JL. DANAU TAMBLINGAN NO. 21, SANUR, DENPASAR SELATAN, BALI 80228",
    title: "Sanur Beachfront",
    status: "Pre-Launch",
    completion: "Q1 2026",
    investment: "$28M",
    units: "60 Units",
    image: "/images/sudut-profile-development/testimonial.jpg",
    category: "Mixed-Use Development",
    description:
      "Sophisticated mixed-use development combining residential units with commercial spaces. Features stunning sunrise views and direct access to Sanur's pristine beach.",
    features: [
      "Beachfront location",
      "Mixed residential/commercial",
      "Sunrise ocean views",
      "Cultural district proximity",
      "Investment opportunities",
      "Resort-style amenities",
    ],
    specifications: {
      totalArea: "5 hectares",
      unitSize: "80-200 sqm",
      types: "Studios, 1-3 bedrooms, commercial",
      amenities: "Beach access, restaurant, retail",
      parking: "1-2 spaces per unit",
    },
    timeline: {
      preLaunch: "December 2024",
      construction: "March 2025 - December 2025",
      handover: "January 2026",
    },
    sustainability: [
      "LEED certification target",
      "Renewable energy systems",
      "Sustainable transportation",
      "Community integration",
    ],
  },
]

export const completedProjects: CompletedProject[] = [
  {
    id: 4,
    slug: "cocana-resort", // Added slug field for URL routing
    address: "JL. RAYA ULUWATU, PECATU, KUTA SELATAN, BADUNG, BALI 80361",
    title: "Cocana Resort",
    status: "Completed",
    completion: "2023",
    investment: "$55M",
    units: "150 Rooms",
    image: "/images/sudut-profile-development/cta.jpg",
    category: "Luxury Resort",
    description:
      "Award-winning luxury resort perched on Uluwatu's dramatic cliffs. Features world-class amenities and breathtaking ocean views, recognized as one of Bali's premier destinations.",
    features: [
      "Clifftop location",
      "Infinity pools",
      "Multiple restaurants",
      "Spa and wellness center",
      "Private beach access",
      "Event facilities",
    ],
    specifications: {
      totalArea: "12 hectares",
      roomSize: "45-120 sqm",
      roomTypes: "Deluxe, Suite, Villa categories",
      amenities: "3 restaurants, 2 bars, spa, gym, pools",
      facilities: "Conference center, wedding venues",
    },
    achievements: [
      "Top 10% Hotels Worldwide - TripAdvisor",
      "Best Luxury Resort - Bali Tourism Awards 2023",
      "Sustainable Tourism Certificate",
      "95% Guest Satisfaction Rating",
    ],
    sustainability: [
      "Zero waste to landfill",
      "Coral reef restoration program",
      "Local community employment",
      "Organic garden and farm",
    ],
  },
  {
    id: 5,
    slug: "finns-resort", // Added slug field for URL routing
    address: "JL. PANTAI BINGIN, ULUWATU, KUTA SELATAN, BADUNG, BALI 80361",
    title: "FINNS Resort",
    status: "Completed",
    completion: "2022",
    investment: "$42M",
    units: "200 Rooms",
    image: "/images/sudut-profile-development/cta_2.jpg",
    category: "Beach Resort",
    description:
      "Contemporary beach resort featuring innovative design and world-class facilities. Known for its vibrant atmosphere and exceptional guest experiences.",
    features: [
      "Beachfront location",
      "Modern architecture",
      "Multiple pool areas",
      "Entertainment venues",
      "Water sports center",
      "Kids club facilities",
    ],
    specifications: {
      totalArea: "10 hectares",
      roomSize: "35-85 sqm",
      roomTypes: "Standard, Deluxe, Family suites",
      amenities: "4 restaurants, 3 bars, spa, pools",
      facilities: "Beach club, water sports, kids area",
    },
    achievements: [
      "Best Family Resort - Indonesia Tourism Awards 2022",
      "Excellence in Design - Architecture Awards",
      "Sustainable Hospitality Recognition",
      "92% Guest Satisfaction Rating",
    ],
    sustainability: [
      "Plastic-free initiative",
      "Solar energy integration",
      "Local sourcing program",
      "Marine conservation support",
    ],
  },
  {
    id: 6,
    slug: "kuara-resort", // Added slug field for URL routing
    address: "JL. RAYA SENGGIGI, LOMBOK BARAT, NUSA TENGGARA BARAT 83355",
    title: "Kuara Resort",
    status: "Completed",
    completion: "2024",
    investment: "$38M",
    units: "100 Villas",
    image: "/images/sudut-profile-development/testimonial.jpg",
    category: "Eco Resort",
    description:
      "Pioneering eco-resort development showcasing sustainable luxury in Lombok. Combines environmental consciousness with premium hospitality standards.",
    features: [
      "Eco-friendly design",
      "Private villa concept",
      "Organic gardens",
      "Cultural experiences",
      "Wellness programs",
      "Adventure activities",
    ],
    specifications: {
      totalArea: "20 hectares",
      villaSize: "80-150 sqm",
      villaTypes: "Garden, Ocean, Hillside villas",
      amenities: "Restaurant, spa, yoga pavilion, pools",
      facilities: "Cultural center, organic farm, library",
    },
    achievements: [
      "Green Building Certification - Gold Level",
      "Best Eco Resort - Sustainable Tourism Awards 2024",
      "Community Impact Recognition",
      "96% Guest Satisfaction Rating",
    ],
    sustainability: [
      "100% renewable energy",
      "Permaculture farming",
      "Local artisan partnerships",
      "Wildlife conservation program",
    ],
  },
]
