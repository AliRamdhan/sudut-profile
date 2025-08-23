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

export const solutions = [
  {
    label: "Design and Planning Services",
    slug: "design-planning",
    image: "/images/construction/construction-solutions-1.jpg",
    description:
      "Our expert design and planning services ensure meticulous execution.",
  },
  {
    label: "Construction and Building",
    slug: "construction-building",
    image: "/images/construction/construction-solutions-2.jpg",
    description:
      "From groundbreaking to the finishing touches, we bring your vision to life with precision.",
  },
  {
    label: "Renovation and Remodeling",
    slug: "renovation-remodeling",
    image: "/images/construction/construction-solutions-3.jpg",
    description:
      "Enhance existing spaces or rejuvenate structures with tailored solutions.",
  },
  {
    label: "Interior Design",
    slug: "interior-design",
    image: "/images/construction/construction-solutions-4.jpg",
    description:
      "Transform your space with modern, functional, and aesthetic interior design.",
  },
  {
    label: "Project Management",
    slug: "project-management",
    image: "/images/construction/construction-solutions-5.jpg",
    description:
      "Efficient project management to ensure on-time delivery and cost control.",
  },
  {
    label: "Landscaping and Outdoor",
    slug: "landscaping-outdoor",
    image: "/images/construction/construction-solutions-6.jpg",
    description:
      "Design and build outdoor spaces that blend beauty and functionality.",
  },
  {
    label: "Facility Maintenance",
    slug: "facility-maintenance",
    image: "/images/construction/construction-solutions-7.jpg",
    description:
      "Comprehensive maintenance services to keep your facilities running smoothly.",
  },
];

export const solutionsDetail = {
  "design-planning": {
    title: "Innovative Design and Meticulous Planning",
    client: "Confidential Client",
    date: "Jan 15, 2023",
    services: ["Design", "Planning", "Consulting"],
    heroImage: "/images/construction/construction-solutions-1.jpg",
    about:
      "Our design and planning services serve as the foundation for every successful construction project. We combine technical expertise with creative innovation to craft layouts that are practical, sustainable, and visually compelling. By utilizing advanced design tools, market insights, and industry best practices, we ensure that each plan is not only aesthetically aligned with client aspirations but also meets strict regulatory and structural requirements. From early-stage feasibility studies to the preparation of detailed blueprints, our approach bridges vision and execution seamlessly, setting the tone for project success.",
    clients:
      "Our design and planning solutions are trusted by a wide spectrum of clients including property developers, commercial investors, industrial facility managers, and individual homeowners. Each of them requires clarity at the planning stage to minimize risk, optimize budgets, and maximize long-term project value. Whether for high-rise buildings, residential complexes, or specialized industrial sites, our clients depend on us to translate their abstract ideas into tangible, well-structured plans that serve as a roadmap for construction.",
    challenge:
      "Design and planning projects are often challenged by the need to reconcile multiple factors such as regulatory compliance, cost limitations, land use restrictions, and the client’s evolving vision. Aligning all these variables while still maintaining architectural creativity is no small task. Our challenge is to strike the right balance between innovation and practicality, ensuring that all stakeholders—from government regulators to contractors—are on the same page. By adopting an integrated and iterative design process, we overcome these obstacles and prepare a plan that is both visionary and executable.",
    results: {
      totalRaised: "N/A",
      conversionRate: "+30% efficiency in execution",
      dailyUsers: "Multiple ongoing projects",
    },
    testimonial: {
      quote:
        "Their planning expertise streamlined our project from the very start, saving us both time and unexpected costs.",
      author: "Michael Tan",
      position: "Property Developer",
    },
    images: ["/images/construction/construction-solutions-1.jpg"],
  },

  "construction-building": {
    title: "From Groundbreaking to Finishing Touches",
    client: "Urban Developers Inc.",
    date: "Mar 22, 2023",
    services: ["Construction", "Engineering", "Project Execution"],
    heroImage: "/images/construction/construction-solutions-2.jpg",
    about:
      "Our construction and building services cover the full journey of project execution—from laying the first stone to the final paint strokes. With a highly skilled team of engineers, builders, and site managers, we provide the confidence that every phase of construction is handled with precision. Safety standards, quality control, and sustainability are at the heart of our process. We incorporate advanced project methodologies and cutting-edge construction technology to deliver results that are structurally sound, environmentally conscious, and architecturally impressive.",
    clients:
      "Our clients range from commercial developers and government agencies to residential communities and private corporations. Each relies on us to turn their vision into reality. Many of our commercial clients need large-scale, multi-phase projects that demand consistency and reliability across different sites. For residential developers, the priority often lies in speed, efficiency, and the delivery of modern, livable environments. In every case, we adapt our construction methodology to meet the unique goals and constraints of our clients.",
    challenge:
      "Large-scale construction projects often involve a series of complex challenges including weather uncertainties, fluctuating material costs, labor coordination, and strict deadlines. Beyond the logistical hurdles, managing stakeholder expectations while ensuring safety and compliance requires a strategic approach. Our biggest challenge lies in aligning all moving parts without compromising on quality. By implementing agile construction practices, robust supply chain management, and continuous on-site monitoring, we overcome these difficulties and deliver projects on schedule and within budget.",
    results: {
      totalRaised: "N/A",
      conversionRate: "On-time delivery rate 95%",
      dailyUsers: "Multiple stakeholders per project",
    },
    testimonial: {
      quote:
        "The construction process was smooth, professional, and delivered beyond expectations.",
      author: "Samantha Lee",
      position: "Project Owner",
    },
    images: ["/images/construction/construction-solutions-2.jpg"],
  },

  "renovation-remodeling": {
    title: "Tailored Renovation and Remodeling Solutions",
    client: "Private Homeowners",
    date: "Jul 10, 2023",
    services: ["Renovation", "Remodeling", "Space Optimization"],
    heroImage: "/images/construction/construction-solutions-3.jpg",
    about:
      "Our renovation and remodeling services are designed to enhance and revitalize spaces while respecting their original character. We approach each project with a personalized mindset, whether it’s modernizing outdated facilities, improving energy efficiency, or reconfiguring space for better usability. Our team applies innovative solutions and high-quality materials to ensure that every remodel blends functionality, comfort, and style. From small-scale room renovations to large-scale building transformations, we create spaces that feel brand new while maintaining their essence.",
    clients:
      "We work with private homeowners, real estate developers, corporate offices, and hospitality businesses who want to transform their spaces without starting from scratch. Homeowners often seek aesthetic upgrades or functional improvements, while commercial clients may need modernized layouts to support new workflows or attract more customers. Across all client types, the common theme is a desire for meaningful upgrades that increase both usability and value.",
    challenge:
      "Renovation projects often present challenges that new builds do not—such as hidden structural damage, outdated electrical and plumbing systems, and limited space flexibility. Clients typically want significant upgrades while still controlling budgets and minimizing downtime. Our challenge is to manage these unknowns while delivering modernized designs that fit within existing frameworks. Through detailed assessments, phased execution strategies, and close communication with clients, we successfully navigate these complexities and deliver outstanding results.",
    results: {
      totalRaised: "N/A",
      conversionRate: "Increase in property value up to +40%",
      dailyUsers: "Individual project basis",
    },
    testimonial: {
      quote:
        "The remodel completely transformed our space while keeping the essence of the original design.",
      author: "David Chen",
      position: "Homeowner",
    },
    images: ["/images/construction/construction-solutions-3.jpg"],
  },

  "interior-design": {
    title: "Modern and Functional Interior Design",
    client: "Luxury Apartments Group",
    date: "Sep 2, 2023",
    services: ["Interior Design", "Space Styling", "Furniture Layout"],
    heroImage: "/images/construction/construction-solutions-4.jpg",
    about:
      "Our interior design services transform spaces into environments that are both visually striking and functionally efficient. We believe that interior design is more than decoration—it is the art of shaping experiences. By carefully studying space utilization, human behavior, and client preferences, we craft interiors that enhance productivity, comfort, and well-being. Whether designing minimalist apartments, luxury hospitality spaces, or vibrant corporate offices, our design philosophy blends modern aesthetics with timeless principles. Each project benefits from our expertise in material selection, lighting strategy, color psychology, and ergonomics, ensuring a final result that is not only beautiful but also practical.",
    clients:
      "We collaborate with residential developers, boutique hotels, retail brands, and corporate enterprises seeking to elevate their environments. Residential clients often request warm, comfortable, and stylish interiors, while corporate clients prioritize layouts that improve collaboration and brand identity. Hospitality businesses rely on us to design inviting, memorable spaces that leave lasting impressions on guests. Across all client categories, our work is tailored to reflect the unique personality and goals of each organization or individual.",
    challenge:
      "The greatest challenge in interior design lies in achieving a balance between aesthetics and functionality. A space may look visually impressive but fail to serve the daily needs of its users. Clients also frequently face limitations in budget, space, or existing structural layouts. Our role is to creatively solve these challenges by maximizing space, optimizing lighting, and choosing durable yet stylish materials. We also need to carefully align our design vision with brand identity and client lifestyle requirements, ensuring that the outcome is both aspirational and sustainable.",
    results: {
      totalRaised: "N/A",
      conversionRate: "Enhanced client satisfaction by 50%",
      dailyUsers: "Corporate and residential tenants",
    },
    testimonial: {
      quote:
        "The interiors exceeded our expectations—both elegant and practical for everyday use.",
      author: "Anna Rodriguez",
      position: "Interior Project Manager",
    },
    images: ["/images/construction/construction-solutions-4.jpg"],
  },

  "project-management": {
    title: "Efficient Project Management",
    client: "Enterprise Builders",
    date: "Nov 18, 2023",
    services: ["Project Management", "Risk Control", "Scheduling"],
    heroImage: "/images/construction/construction-solutions-5.jpg",
    about:
      "Our project management services provide the structure and discipline necessary to deliver complex projects successfully. By integrating scheduling, budgeting, risk control, and communication, we ensure projects remain on track from inception to completion. Our team employs industry-standard methodologies such as Agile, Lean Construction, and PMI frameworks to anticipate risks, allocate resources effectively, and coordinate all stakeholders. We act as the single source of accountability, keeping clients updated with real-time progress reports, transparent cost tracking, and proactive risk mitigation strategies.",
    clients:
      "Our project management expertise is trusted by real estate developers, government contractors, and large corporations that handle multi-million-dollar investments. These clients value our ability to bring order and clarity to high-stakes projects with multiple moving parts. We also support smaller businesses and private investors who need reliable oversight to protect their budgets and timelines. Across all projects, our role is to safeguard client interests and ensure that visions are realized efficiently.",
    challenge:
      "Coordinating diverse stakeholders—such as architects, engineers, subcontractors, and regulatory bodies—is often a complex undertaking. Unexpected disruptions such as supply chain delays, weather issues, or scope changes add additional pressure. The challenge lies in ensuring alignment among all parties while keeping projects on time and within budget. Our approach uses detailed planning, constant communication, and adaptive strategies to minimize risks. By maintaining full transparency with clients and proactively addressing problems before they escalate, we keep projects moving forward seamlessly.",
    results: {
      totalRaised: "N/A",
      conversionRate: "On-time completion rate 98%",
      dailyUsers: "Active project managers",
    },
    testimonial: {
      quote:
        "Their project management approach gave us confidence and clarity throughout the build.",
      author: "James O’Connor",
      position: "CEO, Enterprise Builders",
    },
    images: ["/images/construction/construction-solutions-5.jpg"],
  },

  "landscaping-outdoor": {
    title: "Beautiful and Functional Outdoor Spaces",
    client: "Eco Resorts",
    date: "Feb 8, 2024",
    services: ["Landscaping", "Outdoor Design", "Green Architecture"],
    heroImage: "/images/construction/construction-solutions-6.jpg",
    about:
      "Our landscaping and outdoor services create environments where nature and design coexist harmoniously. We specialize in designing and building outdoor spaces that are not only visually captivating but also functional for daily use. By combining sustainable design practices with creative landscaping techniques, we turn gardens, courtyards, rooftops, and open grounds into vibrant ecosystems. Our work focuses on integrating native plants, water-efficient systems, and environmentally friendly materials, ensuring that every project promotes ecological balance while providing comfort and relaxation for users.",
    clients:
      "Our clients include luxury resorts, hotels, residential developers, and corporate campuses that wish to create distinctive outdoor environments. Hospitality clients aim to provide memorable guest experiences through serene landscapes, while residential developers want outdoor areas that improve property value and community livability. Corporate clients, on the other hand, often seek outdoor designs that foster employee wellness and brand identity. Regardless of sector, our landscaping solutions are customized to suit the lifestyle, culture, and vision of each client.",
    challenge:
      "Designing outdoor spaces comes with unique challenges such as climate adaptation, soil conditions, drainage systems, and long-term maintenance requirements. Additionally, clients often want outdoor areas that are both visually striking and sustainable—two goals that can sometimes conflict. Our challenge is to balance beauty, durability, and environmental responsibility. By employing climate-resilient design, eco-friendly irrigation systems, and modular outdoor structures, we create solutions that are easy to maintain and stand the test of time.",
    results: {
      totalRaised: "N/A",
      conversionRate: "Increase in visitor satisfaction by 45%",
      dailyUsers: "Hospitality and leisure clients",
    },
    testimonial: {
      quote:
        "They turned our outdoor areas into serene and welcoming spaces loved by all guests.",
      author: "Rachel Adams",
      position: "Resort Manager",
    },
    images: ["/images/construction/construction-solutions-6.jpg"],
  },

  "facility-maintenance": {
    title: "Comprehensive Facility Maintenance",
    client: "Global Enterprises",
    date: "Apr 5, 2024",
    services: ["Maintenance", "Facility Management", "Operations"],
    heroImage: "/images/construction/construction-solutions-7.jpg",
    about:
      "Our facility maintenance services provide ongoing support to ensure that buildings and infrastructure continue to operate at peak performance. We take a proactive approach that minimizes downtime, reduces repair costs, and extends asset lifespan. By combining preventive maintenance, emergency support, and routine inspections, we deliver peace of mind to clients who cannot afford interruptions. Our teams are equipped with modern diagnostic tools and follow strict safety protocols, ensuring that every facility remains reliable, efficient, and compliant with industry standards.",
    clients:
      "We serve a wide range of clients including corporate offices, manufacturing facilities, hospitals, and educational institutions. Each of these organizations depends on uninterrupted operations to function effectively. Corporate clients rely on us to maintain their work environments, factories depend on us to ensure production lines run smoothly, and institutions require us to keep their facilities safe and operational for staff and visitors. No matter the industry, our clients appreciate having a dedicated partner who manages the upkeep of their assets while they focus on their core business.",
    challenge:
      "The challenge in facility maintenance is the unpredictability of system failures and the complexity of managing diverse assets under one roof. Many facilities face recurring issues such as HVAC breakdowns, electrical malfunctions, or plumbing leaks that can disrupt operations if not addressed swiftly. Our challenge is to implement preventive strategies that anticipate problems before they escalate while also maintaining readiness to handle emergencies. By combining predictive analytics with hands-on expertise, we ensure that facilities remain resilient and fully functional at all times.",
    results: {
      totalRaised: "N/A",
      conversionRate: "Operational efficiency increased by 35%",
      dailyUsers: "Corporate facility teams",
    },
    testimonial: {
      quote:
        "Their maintenance services have kept our facilities running seamlessly year-round.",
      author: "Liam Wright",
      position: "Operations Director",
    },
    images: ["/images/construction/construction-solutions-7.jpg"],
  },
};

export const works = [
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

export const constructionProject = {
  "kardian-office-tower-construction": {
    title: "Kardian Office Tower Construction - Modern Commercial Development",
    client: "Kardian Development Corporation",
    date: "March 10, 2021",
    services: [
      "Commercial Construction",
      "High-rise Development",
      "Sustainable Design",
      "Project Management",
    ],
    heroImage: "/images/construction/construction-portfolio-1.jpg",
    overview:
      "The Kardian Office Tower stands as a testament to modern architectural excellence in Tegal's evolving skyline. This 40-story state-of-the-art office complex combines premium workspace solutions with energy-efficient systems. Located strategically in the heart of the downtown financial district, the project encompasses 1.2 million square feet of mixed-use space including premium office environments, street-level retail outlets, and advanced building automation systems. Our construction team delivered this landmark project while maintaining the highest safety standards and environmental consciousness.",
    scope:
      "Complete design-build services for a 40-story mixed-use tower including structural engineering, advanced MEP systems, curtain wall installation, interior build-out, and comprehensive site development. Key deliverables included 900,000 sq ft of Class A office space, 80,000 sq ft of retail space, 300,000 sq ft of parking facilities, executive amenities, conference centers, and full infrastructure development including utilities, landscaping, and transportation access.",
    specification:
      "Construction featured reinforced concrete core with steel frame structure, high-performance glazed facade systems, intelligent HVAC with zone control, comprehensive fire safety systems, high-speed elevator banks, fiber optic infrastructure, and integrated energy management systems. The building incorporates sustainable materials with 50% recycled content and exceeds local energy efficiency requirements by 35%.",
    stakeholders:
      "Project stakeholders included Kardian Development Corporation (primary client), Tegal Municipal Planning Authority, Indonesian Green Building Council, local business community representatives, future tenant organizations, and our integrated construction team of 20 specialized subcontractors. Monthly stakeholder coordination meetings ensured seamless project delivery and community integration throughout the construction timeline.",
    timeline: {
      phases: [
        {
          phase: "Planning & Permits",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Foundation & Core Structure",
          duration: "12 months",
          status: "Completed",
        },
        {
          phase: "Facade & Building Systems",
          duration: "12 months",
          status: "Completed",
        },
        {
          phase: "Interior & Fit-out",
          duration: "4 months",
          status: "Completed",
        },
        {
          phase: "Testing & Final Handover",
          duration: "2 months",
          status: "Completed",
        },
      ],
      totalDuration: "36 months",
      completionDate: "March 2024",
    },
    budget: {
      totalValue: "Rp. 180M",
      costPerSqFt: "Rp. 150,000",
      savings: "3% under budget",
      contingency: "2% utilized",
    },
    results: {
      occupancyRate: "92%",
      tenantSatisfaction: "4.7/5",
      energyPerformance: "+35% efficiency",
      awards: [
        "Best Commercial Tower 2024",
        "Excellence in Construction Safety",
      ],
    },
    testimonial: {
      quote:
        "The construction team's expertise and dedication transformed our vision into a world-class office tower. Their attention to detail, commitment to sustainability, and ability to deliver on schedule made this project a tremendous success for Tegal's business district.",
      author: "Budi Santoso",
      position: "Director of Development, Kardian Development Corporation",
    },
    images: [
      "/images/construction/kardian-works/kardian-process.jpg",
      "/images/construction/kardian-works/kardian-team.jpg",
      "/images/construction/kardian-works/kardian-construction.jpg",
      "/images/construction/kardian-works/kardian-foundation.jpg",
    ],
  },
  "bridge-reconstruction-interstate-highway": {
    title:
      "Bridge Reconstruction Interstate Highway - Infrastructure Modernization",
    client: "Indonesian Ministry of Public Works",
    date: "August 15, 2021",
    services: [
      "Infrastructure Construction",
      "Bridge Engineering",
      "Traffic Management",
      "Safety Systems",
    ],
    heroImage: "/images/construction/construction-portfolio-2.jpg",
    overview:
      "The Interstate Highway Bridge reconstruction project represents a critical infrastructure upgrade enhancing regional connectivity and safety standards. This comprehensive reconstruction involved complete demolition of the aging structure and construction of a modern, wider bridge designed to accommodate increased traffic volumes for the next 50 years. The project significantly improves traffic flow efficiency while incorporating advanced safety features and seismic resistance. Our engineering team successfully managed this complex project while maintaining traffic flow throughout construction.",
    scope:
      "Full reconstruction services including demolition of existing 800-meter bridge structure, construction of new dual-span bridge with expanded capacity, installation of modern safety barriers, LED lighting systems, advanced drainage, and comprehensive approach road improvements. Project deliverables included 4-lane bridge expansion, pedestrian walkways, emergency lanes, electronic traffic monitoring systems, and complete landscaping of surrounding areas.",
    specification:
      "Construction utilized high-strength prestressed concrete beams, corrosion-resistant reinforcement, expansion joints rated for heavy traffic loads, integrated cable management systems, and LED lighting throughout. The bridge design incorporates seismic isolation bearings, advanced drainage systems, anti-icing infrastructure, and meets all international safety standards with 75-year design lifespan.",
    stakeholders:
      "Key stakeholders included Indonesian Ministry of Public Works (client), Regional Transportation Authority, Local Municipal Governments, Environmental Impact Assessment teams, community representatives, logistics companies, and our specialized infrastructure consortium of 12 engineering firms. Weekly coordination meetings ensured minimal traffic disruption and adherence to strict safety protocols.",
    timeline: {
      phases: [
        {
          phase: "Design & Environmental Approval",
          duration: "8 months",
          status: "Completed",
        },
        {
          phase: "Demolition & Site Preparation",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Foundation & Structural Work",
          duration: "14 months",
          status: "Completed",
        },
        {
          phase: "Finishing & Safety Systems",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Testing & Traffic Integration",
          duration: "2 months",
          status: "Completed",
        },
      ],
      totalDuration: "36 months",
      completionDate: "August 2024",
    },
    budget: {
      totalValue: "Rp. 180M",
      costPerSqFt: "Rp. 225,000",
      savings: "2% under budget",
      contingency: "4% utilized",
    },
    results: {
      trafficCapacity: "+150% improvement",
      safetyRating: "5-star international standard",
      commuteTimes: "-30% reduction",
      awards: [
        "Infrastructure Excellence 2024",
        "Engineering Innovation Award",
      ],
    },
    testimonial: {
      quote:
        "This bridge reconstruction project exceeded all expectations. The team's innovative approach to maintaining traffic flow during construction while delivering a world-class infrastructure upgrade demonstrates exceptional project management and engineering expertise.",
      author: "Ir. Siti Nurhaliza",
      position: "Director of Infrastructure, Ministry of Public Works",
    },
    images: [
      "/images/construction/bridge-works/bridge-process.jpg",
      "/images/construction/bridge-works/bridge-team.jpg",
      "/images/construction/bridge-works/bridge-construction.jpg",
      "/images/construction/bridge-works/bridge-foundation.jpg",
    ],
  },
  "residential-housing-development": {
    title: "Residential Housing Development - Suburban Community Project",
    client: "Jakarta Housing Development Authority",
    date: "June 20, 2021",
    services: [
      "Residential Construction",
      "Community Planning",
      "Infrastructure Development",
      "Landscape Architecture",
    ],
    heroImage: "/images/construction/construction-portfolio-3.jpg",
    overview:
      "The Suburban Residential Community represents a comprehensive approach to modern family living in Jakarta. This master-planned development encompasses 150 thoughtfully designed single-family homes across 75 hectares of prime suburban land. The project integrates residential construction with complete infrastructure development including roads, utilities, recreational facilities, and community spaces. Our development team created a sustainable neighborhood that balances modern amenities with environmental consciousness and community-focused design.",
    scope:
      "Complete residential development including 150 single-family homes ranging from 120-300 sqm, comprehensive road network with sidewalks and bike paths, utilities infrastructure (water, sewer, electrical, telecommunications), recreational facilities including parks and playgrounds, community center, retail spaces, and extensive landscaping with native vegetation and storm water management systems.",
    specification:
      "Homes constructed with reinforced concrete foundations, brick and concrete block walls, clay tile roofing, energy-efficient windows and doors, modern electrical and plumbing systems, and individual solar water heating. Infrastructure includes underground utilities, LED street lighting, fiber optic internet, storm drainage systems, and water treatment facilities. All construction meets Indonesian Green Building standards.",
    stakeholders:
      "Project stakeholders included Jakarta Housing Development Authority (client), Jakarta Municipal Planning Department, Environmental Ministry representatives, local community leaders, utility companies, future homeowner associations, and our integrated development team of 18 contractors and suppliers. Bi-weekly community meetings ensured resident input and transparent communication throughout development phases.",
    timeline: {
      phases: [
        {
          phase: "Master Planning & Permits",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Site Preparation & Infrastructure",
          duration: "8 months",
          status: "Completed",
        },
        {
          phase: "Phase 1 Housing (50 units)",
          duration: "10 months",
          status: "Completed",
        },
        {
          phase: "Phase 2 Housing (50 units)",
          duration: "8 months",
          status: "Completed",
        },
        {
          phase: "Phase 3 Housing & Community Facilities",
          duration: "4 months",
          status: "Completed",
        },
      ],
      totalDuration: "36 months",
      completionDate: "June 2024",
    },
    budget: {
      totalValue: "Rp. 180M",
      costPerUnit: "Rp. 1.2M",
      savings: "4% under budget",
      contingency: "1% utilized",
    },
    results: {
      salesRate: "100% sold",
      residentSatisfaction: "4.9/5",
      propertyValues: "+15% above market",
      awards: [
        "Best Residential Development 2024",
        "Sustainable Community Award",
      ],
    },
    testimonial: {
      quote:
        "Our family couldn't be happier with our new home and community. The quality of construction, thoughtful neighborhood design, and attention to family needs created exactly the living environment we were looking for in Jakarta.",
      author: "Ahmad Wijaya",
      position: "Homeowner and Community Representative",
    },
    images: [
      "/images/construction/residential-works/residential-process.jpg",
      "/images/construction/residential-works/residential-team.jpg",
      "/images/construction/residential-works/residential-construction.jpg",
      "/images/construction/residential-works/residential-community.jpg",
    ],
  },
  "luxury-hotel-resort-complex": {
    title: "Luxury Hotel & Resort Complex - Beachfront Hospitality Development",
    client: "Bali Paradise Hospitality Group",
    date: "February 10, 2022",
    services: [
      "Hospitality Construction",
      "Resort Development",
      "Luxury Finishing",
      "Landscape Design",
    ],
    heroImage: "/images/construction/construction-portfolio-4.jpg",
    overview:
      "The Luxury Hotel & Resort Complex represents the pinnacle of beachfront hospitality development in Bali. This world-class destination resort combines traditional Balinese architectural elements with contemporary luxury amenities across 15 hectares of pristine oceanfront property. The project features 200 elegantly appointed guest rooms and villas, multiple dining venues, comprehensive wellness facilities, and recreational amenities that celebrate both natural beauty and cultural heritage. Our specialized resort construction team delivered this premium project while preserving environmental integrity and local cultural values.",
    scope:
      "Comprehensive resort development including 150 luxury hotel rooms, 50 private villas, 5 restaurants and bars, full-service spa and wellness center, multiple swimming pools and water features, conference facilities, retail spaces, recreational amenities, staff accommodation, extensive tropical landscaping, beach facilities, and complete infrastructure including utilities, roads, and parking areas.",
    specification:
      "Construction features natural stone and timber finishes, traditional Balinese architectural details, premium interior materials, advanced HVAC systems with humidity control, high-end kitchen and restaurant equipment, luxury spa facilities, infinity edge pools with water features, fiber optic internet throughout, comprehensive security systems, and sustainable water management including treatment and recycling facilities.",
    stakeholders:
      "Key stakeholders included Bali Paradise Hospitality Group (client), Bali Provincial Tourism Authority, Environmental Protection Agency, local village communities, cultural preservation organizations, international hotel management company, and our specialized resort construction consortium of 25 contractors and artisans. Regular stakeholder consultations ensured cultural sensitivity and environmental protection throughout construction.",
    timeline: {
      phases: [
        {
          phase: "Environmental & Cultural Assessment",
          duration: "4 months",
          status: "Completed",
        },
        {
          phase: "Site Development & Infrastructure",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Main Buildings & Guest Rooms",
          duration: "12 months",
          status: "Completed",
        },
        {
          phase: "Villas & Specialty Facilities",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Landscaping & Final Details",
          duration: "2 months",
          status: "Completed",
        },
      ],
      totalDuration: "30 months",
      completionDate: "August 2024",
    },
    budget: {
      totalValue: "Rp. 250M",
      costPerRoom: "Rp. 1.25M",
      savings: "1% under budget",
      contingency: "3% utilized",
    },
    results: {
      occupancyRate: "88% (first year)",
      guestSatisfaction: "4.9/5",
      internationalRating: "5-star luxury resort",
      awards: ["Best New Resort 2024", "Sustainable Tourism Excellence"],
    },
    testimonial: {
      quote:
        "The construction team brought our vision of authentic Balinese luxury to life while respecting our environment and culture. The attention to detail and commitment to sustainability created a resort that guests describe as paradise on earth.",
      author: "Made Sutrisna",
      position: "Resort General Manager, Bali Paradise Hospitality Group",
    },
    images: [
      "/images/construction/resort-works/resort-process.jpg",
      "/images/construction/bridge-works/bridge-team.jpg",
      "/images/construction/resort-works/resort-construction.jpg",
      "/images/construction/resort-works/resort-landscape.jpg",
    ],
  },
  "university-campus-expansion": {
    title:
      "University Campus Expansion - Educational Infrastructure Development",
    client: "Gadjah Mada University",
    date: "September 5, 2022",
    services: [
      "Educational Construction",
      "Campus Planning",
      "Technology Integration",
      "Sustainable Design",
    ],
    heroImage: "/images/construction/construction-portfolio-5.jpg",
    overview:
      "The University Campus Expansion project represents a transformative investment in higher education infrastructure in Yogyakarta. This comprehensive development program encompasses multiple new buildings designed to support 21st-century learning while honoring the university's rich academic tradition. The expansion includes state-of-the-art lecture halls, modern student housing, advanced library facilities, and world-class sports amenities. Our educational construction team delivered these facilities with emphasis on flexible learning spaces, technology integration, and sustainable campus development.",
    scope:
      "Complete campus expansion including 8 new lecture hall buildings with capacity for 300-500 students each, 4 student dormitory complexes housing 1,200 students, modern library and research center with digital archives, multi-purpose sports complex with gymnasium and outdoor facilities, student center with dining and recreational areas, faculty offices, parking structures, and comprehensive campus infrastructure including utilities, landscaping, and pedestrian pathways.",
    specification:
      "Buildings feature flexible classroom configurations with integrated audio-visual systems, high-speed internet infrastructure, energy-efficient lighting and HVAC systems, sustainable materials including bamboo and recycled content, earthquake-resistant construction meeting seismic standards, universal accessibility compliance, and integrated campus-wide technology networks supporting online and hybrid learning environments.",
    stakeholders:
      "Project stakeholders included Gadjah Mada University administration (client), Indonesian Ministry of Education, Yogyakarta Municipal Planning Authority, student body representatives, faculty committees, local community groups, and our specialized educational construction team of 22 contractors and technology specialists. Monthly progress meetings ensured minimal disruption to ongoing university operations.",
    timeline: {
      phases: [
        {
          phase: "Campus Planning & Design",
          duration: "4 months",
          status: "Completed",
        },
        {
          phase: "Phase 1: Academic Buildings",
          duration: "10 months",
          status: "Completed",
        },
        {
          phase: "Phase 2: Student Housing",
          duration: "8 months",
          status: "Completed",
        },
        {
          phase: "Phase 3: Sports & Recreation",
          duration: "6 months",
          status: "Completed",
        },
      ],
      totalDuration: "24 months",
      completionDate: "September 2024",
    },
    budget: {
      totalValue: "Rp. 120M",
      costPerSqFt: "Rp. 200,000",
      savings: "6% under budget",
      contingency: "2% utilized",
    },
    results: {
      studentCapacity: "+40% increase",
      facultySatisfaction: "4.8/5",
      energyEfficiency: "+50% improvement",
      awards: [
        "Educational Excellence in Construction",
        "Green Campus Certification",
      ],
    },
    testimonial: {
      quote:
        "The campus expansion has transformed our university's ability to serve students with world-class facilities. The construction team's understanding of educational needs and commitment to sustainable building practices created spaces that inspire learning and innovation.",
      author: "Prof. Dr. Panut Mulyono",
      position: "Rector, Gadjah Mada University",
    },
    images: [
      "/images/construction/university-works/university-process.jpg",
      "/images/construction/university-works/university-team.jpg",
      "/images/construction/university-works/university-construction.jpg",
      "/images/construction/university-works/university-campus.jpg",
    ],
  },
  "renewable-energy-power-plant": {
    title: "Renewable Energy Power Plant - Solar Energy Infrastructure",
    client: "Indonesia Renewable Energy Corporation",
    date: "January 12, 2022",
    services: [
      "Energy Infrastructure",
      "Solar Technology",
      "Grid Integration",
      "Environmental Engineering",
    ],
    heroImage: "/images/construction/construction-portfolio-6.jpg",
    overview:
      "The Renewable Energy Power Plant project represents Indonesia's commitment to sustainable energy independence through cutting-edge solar technology. This large-scale solar installation spans 200 hectares and incorporates advanced photovoltaic systems capable of generating clean energy for over 50,000 households. The project combines innovative solar tracking technology with comprehensive grid integration systems, energy storage capabilities, and environmental conservation measures. Our specialized energy construction team delivered this transformative infrastructure project while maintaining the highest environmental standards.",
    scope:
      "Complete solar power plant development including 150MW photovoltaic array installation, advanced solar tracking systems, electrical infrastructure with high-voltage transmission lines, control and monitoring facilities, energy storage systems, grid interconnection equipment, operations and maintenance buildings, security systems, access roads, and comprehensive environmental management including habitat preservation and water conservation measures.",
    specification:
      "Installation features high-efficiency monocrystalline solar panels with 22% efficiency rating, dual-axis tracking systems maximizing energy capture, weather-resistant mounting structures, SCADA control systems for remote monitoring, lithium-ion battery storage capacity, medium voltage electrical infrastructure, grid-tie inverters with advanced power management, and comprehensive environmental monitoring systems tracking local ecosystem impact.",
    stakeholders:
      "Key stakeholders included Indonesia Renewable Energy Corporation (client), Ministry of Energy and Mineral Resources, State Electricity Company (PLN), Environmental Impact Assessment teams, local farming communities, regional development authorities, and our specialized renewable energy consortium of 15 technology and construction partners. Quarterly community meetings ensured transparent communication about project benefits and environmental protection measures.",
    timeline: {
      phases: [
        {
          phase: "Environmental Assessment & Planning",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Site Preparation & Infrastructure",
          duration: "4 months",
          status: "Completed",
        },
        {
          phase: "Solar Panel Installation",
          duration: "12 months",
          status: "Completed",
        },
        {
          phase: "Electrical Systems & Grid Connection",
          duration: "4 months",
          status: "Completed",
        },
        {
          phase: "Testing & Commissioning",
          duration: "2 months",
          status: "Completed",
        },
      ],
      totalDuration: "28 months",
      completionDate: "May 2024",
    },
    budget: {
      totalValue: "Rp. 300M",
      costPerMW: "Rp. 2M",
      savings: "3% under budget",
      contingency: "2% utilized",
    },
    results: {
      energyGeneration: "150MW capacity",
      householdsServed: "50,000+ families",
      carbonReduction: "125,000 tons CO2/year",
      awards: [
        "Renewable Energy Excellence 2024",
        "Environmental Innovation Award",
      ],
    },
    testimonial: {
      quote:
        "This solar power plant represents a milestone in Indonesia's renewable energy journey. The construction team's expertise in both traditional construction and cutting-edge solar technology delivered a facility that will provide clean energy for generations while protecting our environment.",
      author: "Dr. Rida Mulyana",
      position:
        "Director of Renewable Energy, Ministry of Energy and Mineral Resources",
    },
    images: [
      "/images/construction/solar-works/solar-process.jpg",
      "/images/construction/solar-works/solar-team.jpg",
      "/images/construction/solar-works/solar-construction.jpg",
      "/images/construction/solar-works/solar-installation.jpg",
    ],
  },
  "airport-terminal-modernization": {
    title: "Airport Terminal Modernization - Aviation Infrastructure Upgrade",
    client: "Medan Airport Authority",
    date: "May 18, 2021",
    services: [
      "Airport Construction",
      "Infrastructure Modernization",
      "Security Systems",
      "Passenger Experience",
    ],
    heroImage: "/images/construction/construction-portfolio-7.jpg",
    overview:
      "The Airport Terminal Modernization project transforms Medan's primary aviation gateway into a world-class facility capable of handling increased passenger volumes and modern aviation requirements. This comprehensive upgrade encompasses complete renovation and expansion of existing terminal facilities while integrating cutting-edge passenger processing systems, security technologies, and comfort amenities. The project significantly enhances passenger experience while improving operational efficiency and meeting international aviation standards. Our specialized airport construction team executed this complex project while maintaining continuous airport operations.",
    scope:
      "Complete terminal modernization including expansion of passenger processing areas, installation of automated check-in and baggage handling systems, new security checkpoints with advanced screening technology, premium passenger lounges, expanded retail and dining areas, improved air traffic control facilities, enhanced parking structures, upgraded cargo handling facilities, and comprehensive utilities infrastructure supporting 24/7 airport operations.",
    specification:
      "Construction features reinforced concrete and steel frame structure, high-performance glazing systems, advanced HVAC with air quality management, integrated security systems including biometric access control, automated baggage sorting and tracking, fiber optic communications infrastructure, LED lighting throughout, noise reduction materials, and emergency power systems ensuring uninterrupted operations during any contingency.",
    stakeholders:
      "Project stakeholders included Medan Airport Authority (client), Indonesian Civil Aviation Authority, international airline partners, passenger associations, cargo operators, local business community, security agencies, and our specialized aviation construction consortium of 30 contractors and technology providers. Weekly operational coordination meetings ensured minimal disruption to flight schedules and passenger services throughout construction phases.",
    timeline: {
      phases: [
        {
          phase: "Design & Aviation Compliance",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Phase 1: Infrastructure Upgrade",
          duration: "10 months",
          status: "Completed",
        },
        {
          phase: "Phase 2: Terminal Expansion",
          duration: "12 months",
          status: "Completed",
        },
        {
          phase: "Phase 3: Technology Integration",
          duration: "6 months",
          status: "Completed",
        },
        {
          phase: "Testing & Certification",
          duration: "2 months",
          status: "Completed",
        },
      ],
      totalDuration: "36 months",
      completionDate: "May 2024",
    },
    budget: {
      totalValue: "Rp. 500M",
      costPerSqFt: "Rp. 400,000",
      savings: "2% under budget",
      contingency: "3% utilized",
    },
    results: {
      passengerCapacity: "+200% increase",
      processingTime: "-50% reduction",
      customerSatisfaction: "4.8/5",
      awards: ["Airport Excellence 2024", "Infrastructure Modernization Award"],
    },
    testimonial: {
      quote:
        "The terminal modernization has positioned Medan Airport as a premier regional hub. The construction team's ability to upgrade our facilities without disrupting operations while delivering world-class passenger amenities demonstrates exceptional project management and aviation expertise.",
      author: "Ir. Bambang Susilo",
      position: "Airport Director, Medan Airport Authority",
    },
    images: [
      "/images/construction/airport-works/airport-process.jpg",
      "/images/construction/airport-works/airport-team.jpg",
      "/images/construction/airport-works/airport-construction.jpg",
      "/images/construction/airport-works/airport-terminal.jpg",
    ],
  },
  "smart-city-infrastructure-development": {
    title:
      "Smart City Infrastructure Development - Urban Technology Integration",
    client: "Bandung Smart City Initiative",
    date: "October 8, 2020",
    services: [
      "Smart City Development",
      "Urban Planning",
      "Technology Infrastructure",
      "Sustainable Transportation",
    ],
    heroImage: "/images/construction/construction-portfolio-8.jpg",
    overview:
      "The Smart City Infrastructure Development project represents the most ambitious urban modernization initiative in Bandung's history. This comprehensive smart city transformation integrates advanced technology systems with sustainable urban development across multiple districts. The project encompasses intelligent traffic management, digital utilities infrastructure, environmental monitoring systems, public Wi-Fi networks, and integrated public transportation facilities. Our multidisciplinary urban development team delivered this groundbreaking project while enhancing quality of life for residents and establishing Bandung as a model smart city for Indonesia.",
    scope:
      "Comprehensive smart city infrastructure including intelligent traffic control systems with AI-powered optimization, IoT sensor networks for environmental monitoring, integrated public transportation hubs with electric bus systems, smart parking solutions, digital utility meters and management systems, public Wi-Fi and 5G infrastructure, green parks with smart irrigation, emergency response systems, digital governance platforms, and comprehensive urban data analytics capabilities.",
    specification:
      "Infrastructure features fiber optic backbone network supporting citywide connectivity, IoT sensors for air quality and traffic monitoring, AI-powered traffic signal systems, electric vehicle charging stations, solar-powered street lighting with smart controls, integrated waste management systems, flood monitoring and alert systems, digital payment infrastructure for all public services, and centralized urban operations center with real-time city management capabilities.",
    stakeholders:
      "Key stakeholders included Bandung Smart City Initiative (client), Bandung Municipal Government, Ministry of Communication and Information, public transportation authorities, utility companies, local community organizations, technology partners, environmental groups, and our integrated smart city development team of 35 specialized contractors and technology providers. Monthly public forums ensured citizen input and transparency throughout the transformation process.",
    timeline: {
      phases: [
        {
          phase: "Smart City Master Planning",
          duration: "8 months",
          status: "Completed",
        },
        {
          phase: "Phase 1: Core Infrastructure",
          duration: "12 months",
          status: "Completed",
        },
        {
          phase: "Phase 2: Transportation Systems",
          duration: "14 months",
          status: "Completed",
        },
        {
          phase: "Phase 3: Environmental & Parks",
          duration: "10 months",
          status: "Completed",
        },
        {
          phase: "Phase 4: Integration & Testing",
          duration: "4 months",
          status: "Completed",
        },
      ],
      totalDuration: "48 months",
      completionDate: "October 2024",
    },
    budget: {
      totalValue: "Rp. 750M",
      costPerResident: "Rp. 300,000",
      savings: "4% under budget",
      contingency: "2% utilized",
    },
    results: {
      trafficReduction: "-40% congestion",
      energyEfficiency: "+60% improvement",
      citizenSatisfaction: "4.9/5",
      awards: ["Smart City Excellence 2024", "Urban Innovation Global Award"],
    },
    testimonial: {
      quote:
        "Bandung's smart city transformation has exceeded all expectations. The integrated approach to technology, sustainability, and citizen services has created a model that cities across Southeast Asia are studying and adopting. This project represents the future of urban living.",
      author: "Oded M. Danial",
      position: "Mayor of Bandung",
    },
    images: [
      "/images/construction/smartcity-works/smartcity-process.jpg",
      "/images/construction/bridge-works/bridge-team.jpg",
      "/images/construction/smartcity-works/smartcity-construction.jpg",
      "/images/construction/smartcity-works/smartcity-technology.jpg",
    ],
  },
};
