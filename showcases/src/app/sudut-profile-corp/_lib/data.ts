export interface ActivityType {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  price: string;
  date: string;
  location: string;
  category: string;
  status: string;
  shortDescription: string;
}

export const activities = [
  {
    id: 1,
    title: "Talent Showcase Night",
    slug: "talent-showcase-night",
    imageUrl: "/images/sudut-profile-corp/events/night-comedy.jpg",
    price: "Rp.75.000",
    date: "2025-09-15",
    location: "Jakarta, Indonesia",
    category: "Showcase",
    status: "ongoing",
    shortDescription:
      "An evening dedicated to celebrating Indonesia’s emerging talents in music, dance, and performance art.",
  },
  {
    id: 2,
    title: "Music & Dance Festival",
    slug: "music-dance-festival",
    imageUrl: "/images/sudut-profile-corp/events/music-festival.jpg",
    price: "Rp.150.000",
    date: "2025-10-02",
    location: "Bandung, Indonesia",
    category: "Festival",
    status: "ongoing",
    shortDescription:
      "A fusion of rhythms and movements featuring electrifying music and dance from across the nation.",
  },
  {
    id: 3,
    title: "Charity Concert: Voices for Hope",
    slug: "charity-concert-voices-for-hope",
    imageUrl: "/images/sudut-profile-corp/events/charity-show.jpg",
    price: "Rp.100.000",
    date: "2025-08-30",
    location: "Surabaya, Indonesia",
    category: "Charity",
    status: "completed",
    shortDescription:
      "A heartfelt concert uniting music and compassion, with proceeds supporting education and healthcare.",
  },
  {
    id: 4,
    title: "Cultural Performance Night",
    slug: "cultural-performance-night",
    imageUrl: "/images/sudut-profile-corp/events/cultural-arts.jpg",
    price: "Rp.50.000",
    date: "2025-11-05",
    location: "Yogyakarta, Indonesia",
    category: "Culture",
    status: "completed",
    shortDescription:
      "An evening of Indonesia’s rich cultural heritage with traditional dances, music, and theater.",
  },
  {
    id: 5,
    title: "Open Mic & Rising Star Hunt",
    slug: "open-mic-rising-star-hunt",
    imageUrl: "/images/sudut-profile-corp/events/open-mic.jpg",
    price: "Rp.25.000",
    date: "2025-09-28",
    location: "Medan, Indonesia",
    category: "Open Mic",
    status: "completed",
    shortDescription:
      "A casual night where aspiring musicians, poets, and comedians take the stage and shine.",
  },
  {
    id: 6,
    title: "Indie Music Concert",
    slug: "indie-music-concert",
    imageUrl: "/images/sudut-profile-corp/events/indie-music.jpg",
    price: "Rp.200.000",
    date: "2025-12-12",
    location: "Bali, Indonesia",
    category: "Concert",
    status: "completed",
    shortDescription:
      "A soulful night of live performances by Indonesia’s top indie bands in Bali.",
  },
  {
    id: 7,
    title: "Acting & Theater Workshop",
    slug: "acting-theater-workshop",
    imageUrl: "/images/talent-management/events/acting-workshop.jpg",
    price: "Rp.120.000",
    date: "2025-09-05",
    location: "Jakarta, Indonesia",
    category: "Workshop",
    status: "completed",
    shortDescription:
      "A practical workshop for aspiring actors to enhance stage presence, voice, and expression.",
  },
  {
    id: 8,
    title: "Content Creator Bootcamp",
    slug: "content-creator-bootcamp",
    imageUrl: "/images/talent-management/events/creator-bootcamp.jpg",
    price: "Rp.80.000",
    date: "2025-07-20",
    location: "Bandung, Indonesia",
    category: "Training",
    status: "completed",
    shortDescription:
      "A hands-on bootcamp teaching branding, editing, and growth strategies for content creators.",
  },
  {
    id: 9,
    title: "Food & Lifestyle Festival with Talents",
    slug: "food-lifestyle-festival-with-talents",
    imageUrl: "/images/talent-management/events/lifestyle-fest.jpg",
    price: "Rp.60.000",
    date: "2025-10-18",
    location: "Semarang, Indonesia",
    category: "Festival",
    status: "ongoing",
    shortDescription:
      "A vibrant festival combining food, fashion, and performances from top rising stars.",
  },
  {
    id: 10,
    title: "Sports & Fitness Day with Influencers",
    slug: "sports-fitness-day-with-influencers",
    imageUrl: "/images/talent-management/events/fitness-day.jpg",
    price: "Rp.100.000",
    date: "2025-06-10",
    location: "Surabaya, Indonesia",
    category: "Sports",
    status: "completed",
    shortDescription:
      "A fun day of sports, fitness classes, and wellness activities alongside popular influencers.",
  },
];

export interface EventDetailType {
  title: string;
  subtitle?: string;
  description: string[];
  dateTime: string;
  hours: {
    doorsOpen: string;
    showStarts: string;
    showEnds: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  location: {
    name: string;
    venue: string;
    address: string;
  };
  tags: string[];
  heroImage: string;
}

export const activityDetails = {
  "talent-showcase-night": {
    title: "Talent Showcase Night",
    subtitle: "Discover Hidden Talents",
    descriptions: [
      "Talent Showcase Night is a special evening featuring a variety of talents from Indonesia’s young generation. Music, dance, and stage art come together in one grand performance, giving new talents the opportunity to be seen and celebrated.",
      "This event is more than entertainment; it is an appreciation of creativity, dedication, and hard work. With professional stage production, every performer will experience the atmosphere of being a star.",
      "Audiences will be taken on an emotional journey through acoustic performances, contemporary dances, and theatrical shows carefully curated for maximum impact. Each moment delivers a new surprise that keeps the event unforgettable.",
      "Talent Showcase Night is a space where new stars are born and a source of inspiration for the next generation of artists.",
    ],
    dateTime: "Monday, September 15, 2025 at 7:00 PM",
    hours: {
      doorsOpen: "6:00 PM",
      showStarts: "7:00 PM",
      showEnds: "10:00 PM",
    },
    contact: {
      phone: "+62 21 1111 2222",
      email: "info@talentshowcase.com",
    },
    location: {
      name: "Talent Showcase Night",
      venue: "Gedung Kesenian Jakarta",
      address: "Jl. Gedung Kesenian, Jakarta Pusat",
    },
    tags: ["Showcase", "Performance", "Talent"],
    heroImage: "/images/sudut-profile-corp/events/night-comedy.jpg",
  },

  "music-dance-festival": {
    title: "Music & Dance Festival",
    subtitle: "A Celebration of Rhythms",
    descriptions: [
      "Music & Dance Festival is a vibrant celebration combining the energy of music and dance across multiple genres and cultures. It offers a unique experience filled with colorful stage performances and dynamic movements.",
      "From traditional music to pop and modern EDM, all genres come together in harmony, sparking excitement and joy. Audiences will feel the atmosphere of an international festival without leaving the country.",
      "Beyond performances, the festival includes food bazaars, interactive booths, and thematic photo spots that enhance the overall experience. This festive vibe makes the event a true celebration of togetherness.",
      "It is not only entertainment, but also a platform to appreciate cultural diversity through rhythm and movement.",
    ],
    dateTime: "Thursday, October 2, 2025 at 5:00 PM",
    hours: {
      doorsOpen: "4:00 PM",
      showStarts: "5:00 PM",
      showEnds: "11:00 PM",
    },
    contact: {
      phone: "+62 22 3333 4444",
      email: "festival@musicdance.com",
    },
    location: {
      name: "Music & Dance Festival",
      venue: "Lapangan Sabuga",
      address: "Jl. Tamansari, Bandung",
    },
    tags: ["Festival", "Music", "Dance"],
    heroImage: "/images/sudut-profile-corp/events/music-festival.jpg",
  },

  "charity-concert-voices-for-hope": {
    title: "Charity Concert: Voices for Hope",
    subtitle: "Music with a Purpose",
    descriptions: [
      "Charity Concert: Voices for Hope is a heartfelt music event where every note carries a message of compassion. Talented musicians gather not only to entertain but also to raise funds for a noble cause.",
      "Every ticket sold contributes directly to foundations focusing on education and healthcare, ensuring that attendees play an active role in meaningful social change.",
      "The performances are filled with emotion, reminding us that music is a universal language that unites people for a shared purpose.",
      "This charity concert is living proof that art can be a powerful force for social impact and solidarity.",
    ],
    dateTime: "Saturday, August 30, 2025 at 7:30 PM",
    hours: {
      doorsOpen: "6:30 PM",
      showStarts: "7:30 PM",
      showEnds: "10:30 PM",
    },
    contact: {
      phone: "+62 31 5555 6666",
      email: "charity@voicesforhope.com",
    },
    location: {
      name: "Charity Concert: Voices for Hope",
      venue: "Grand City Hall",
      address: "Jl. Pemuda, Surabaya",
    },
    tags: ["Charity", "Concert", "Fundraising"],
    heroImage: "/images/sudut-profile-corp/events/charity-show.jpg",
  },

  "cultural-performance-night": {
    title: "Cultural Performance Night",
    subtitle: "Celebrating Traditions",
    descriptions: [
      "Cultural Performance Night celebrates Indonesia’s rich traditions through dance, music, and theatrical acts presented on one grand stage. Each performance reflects heritage passed down for generations.",
      "Audiences will enjoy captivating regional dances, calming gamelan music, and theatrical plays filled with symbolic meaning, all crafted to showcase the nation’s cultural identity.",
      "The evening becomes even more special with thematic stage design and the unique atmosphere of Yogyakarta as the cultural hub of Indonesia.",
      "It is not only entertainment, but also an effort to preserve and honor Indonesia’s cultural legacy amidst modern life.",
    ],
    dateTime: "Wednesday, November 5, 2025 at 6:00 PM",
    hours: {
      doorsOpen: "5:00 PM",
      showStarts: "6:00 PM",
      showEnds: "9:00 PM",
    },
    contact: {
      phone: "+62 274 7777 8888",
      email: "culture@performances.com",
    },
    location: {
      name: "Cultural Performance Night",
      venue: "Taman Budaya Yogyakarta",
      address: "Jl. Sriwedani No. 1, Yogyakarta",
    },
    tags: ["Culture", "Performance", "Traditional Arts"],
    heroImage: "/images/sudut-profile-corp/events/cultural-arts.jpg",
  },

  "open-mic-rising-star-hunt": {
    title: "Open Mic & Rising Star Hunt",
    subtitle: "Where New Stars Are Born",
    descriptions: [
      "Open Mic & Rising Star Hunt is a stage for young musicians, poets, and comedians to showcase their creativity. It provides a free and open space for spontaneous performances enjoyed directly by the audience.",
      "What makes it unique is the involvement of the audience in determining the best act of the night. Every performer has a chance to shine, with the audience’s cheers serving as the ultimate judgment.",
      "The relaxed and intimate atmosphere makes it the perfect place for fresh talents to express themselves without pressure, while still gaining valuable experience.",
      "This is not just entertainment, but the first stepping stone toward bigger stages for tomorrow’s rising stars.",
    ],
    dateTime: "Sunday, September 28, 2025 at 7:00 PM",
    hours: {
      doorsOpen: "6:00 PM",
      showStarts: "7:00 PM",
      showEnds: "10:00 PM",
    },
    contact: {
      phone: "+62 61 9999 0000",
      email: "openmic@risingstar.com",
    },
    location: {
      name: "Open Mic & Rising Star Hunt",
      venue: "Medan Cultural Hall",
      address: "Jl. Balai Kota, Medan",
    },
    tags: ["Open Mic", "Music", "Comedy"],
    heroImage: "/images/sudut-profile-corp/events/open-mic.jpg",
  },

  "indie-music-concert": {
    title: "Indie Music Concert",
    subtitle: "Celebrating Independent Artists",
    descriptions: [
      "Indie Music Concert brings together some of the best independent musicians in Indonesia for a night of original work. Their music delivers honesty, passion, and personal stories that touch the heart.",
      "The concert is a platform for indie bands to showcase their identity and creativity, offering a refreshing alternative to mainstream music.",
      "Held in the unique atmosphere of Bali, the event gives audiences an intimate and authentic listening experience unlike any other.",
      "It is more than a concert; it is a celebration of creativity, passion, and the indie spirit.",
    ],
    dateTime: "Friday, December 12, 2025 at 8:00 PM",
    hours: {
      doorsOpen: "7:00 PM",
      showStarts: "8:00 PM",
      showEnds: "11:30 PM",
    },
    contact: {
      phone: "+62 361 1234 5678",
      email: "indie@musicconcert.com",
    },
    location: {
      name: "Indie Music Concert",
      venue: "Bali Beach Arena",
      address: "Jl. Pantai Kuta, Bali",
    },
    tags: ["Concert", "Indie", "Live Music"],
    heroImage: "/images/sudut-profile-corp/events/indie-music.jpg",
  },

  "acting-theater-workshop": {
    title: "Acting & Theater Workshop",
    subtitle: "Learn the Art of Stage Performance",
    descriptions: [
      "Acting & Theater Workshop is an intensive program designed for aspiring actors who want to build confidence, master expression, and enhance their stage presence.",
      "Participants will learn vocal techniques, body language, improvisation, and character building, guided by professional theater coaches.",
      "Beyond theory, the workshop emphasizes hands-on practice with live simulations, ensuring every participant gains real stage experience.",
      "This is the perfect opportunity for anyone dreaming of a career in performing arts, whether on stage or on screen.",
    ],
    dateTime: "Friday, September 5, 2025 at 10:00 AM",
    hours: {
      doorsOpen: "9:30 AM",
      showStarts: "10:00 AM",
      showEnds: "5:00 PM",
    },
    contact: {
      phone: "+62 21 2345 6789",
      email: "workshop@theateracting.com",
    },
    location: {
      name: "Acting & Theater Workshop",
      venue: "Jakarta Theater Academy",
      address: "Jl. Sudirman, Jakarta",
    },
    tags: ["Workshop", "Acting", "Theater"],
    heroImage: "/images/talent-management/events/acting-workshop.jpg",
  },

  "content-creator-bootcamp": {
    title: "Content Creator Bootcamp",
    subtitle: "Master the Digital Era",
    descriptions: [
      "Content Creator Bootcamp is a comprehensive training program for aspiring digital creators who want to build personal branding, master editing, and understand audience growth strategies.",
      "Led by influencers and digital marketing experts, the bootcamp provides real-world insights into the fast-paced world of content creation.",
      "From beginner to advanced, participants will learn content production, storytelling, and monetization strategies in an interactive and practical format.",
      "It is the ultimate starting point for turning creativity into a sustainable career in the digital world.",
    ],
    dateTime: "Sunday, July 20, 2025 at 9:00 AM",
    hours: {
      doorsOpen: "8:30 AM",
      showStarts: "9:00 AM",
      showEnds: "5:00 PM",
    },
    contact: {
      phone: "+62 22 8765 4321",
      email: "bootcamp@contentcreator.com",
    },
    location: {
      name: "Content Creator Bootcamp",
      venue: "Creative Space Bandung",
      address: "Jl. Asia Afrika, Bandung",
    },
    tags: ["Training", "Content Creation", "Digital"],
    heroImage: "/images/talent-management/events/creator-bootcamp.jpg",
  },

  "food-lifestyle-festival-with-talents": {
    title: "Food & Lifestyle Festival with Talents",
    subtitle: "Taste, Style, and Entertainment",
    descriptions: [
      "Food & Lifestyle Festival with Talents is a lively event combining culinary, fashion, and entertainment in one place. Visitors can enjoy delicious dishes while watching performances by various talents.",
      "The festival features food stalls, fashion shows, and live performances, making it colorful and engaging for all ages.",
      "It also offers interactive opportunities where audiences can connect directly with performers and creators, adding a more personal touch to the experience.",
      "This festival is not just about fun but also a celebration of healthy, creative, and inspiring lifestyles.",
    ],
    dateTime: "Saturday, October 18, 2025 at 12:00 PM",
    hours: {
      doorsOpen: "11:00 AM",
      showStarts: "12:00 PM",
      showEnds: "10:00 PM",
    },
    contact: {
      phone: "+62 24 4444 5555",
      email: "festival@foodlifestyle.com",
    },
    location: {
      name: "Food & Lifestyle Festival with Talents",
      venue: "Simpang Lima Square",
      address: "Jl. Pandanaran, Semarang",
    },
    tags: ["Festival", "Food", "Lifestyle"],
    heroImage: "/images/talent-management/events/lifestyle-fest.jpg",
  },

  "sports-fitness-day-with-influencers": {
    title: "Sports & Fitness Day with Influencers",
    subtitle: "Get Fit, Stay Strong",
    descriptions: [
      "Sports & Fitness Day with Influencers combines entertainment with healthy living. Alongside favorite influencers, participants can join a variety of fun sports and fitness activities.",
      "From yoga and zumba to interactive workouts, the event is designed for all fitness levels. The engaging atmosphere makes exercising enjoyable for everyone.",
      "The program also includes talk shows on wellness, nutrition, and mental health, offering valuable knowledge for a balanced lifestyle.",
      "It is more than a fitness event; it is a community movement for health, motivation, and positive energy.",
    ],
    dateTime: "Tuesday, June 10, 2025 at 8:00 AM",
    hours: {
      doorsOpen: "7:30 AM",
      showStarts: "8:00 AM",
      showEnds: "4:00 PM",
    },
    contact: {
      phone: "+62 31 7890 1234",
      email: "sports@fitnessday.com",
    },
    location: {
      name: "Sports & Fitness Day with Influencers",
      venue: "Gelora Pancasila Stadium",
      address: "Jl. Indragiri, Surabaya",
    },
    tags: ["Sports", "Fitness", "Influencers"],
    heroImage: "/images/talent-management/events/fitness-day.jpg",
  },
};

export interface Talent {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  category: string;
  bio: string;
  socialMedia: {
    instagram: string;
    twitter: string;
    youtube: string;
    tiktok: string;
  };
}

export const talents = [
  {
    id: 1,
    name: "Hasan Minhaj",
    slug: "hasan-minhaj",
    category: "Comedian",
    imageUrl: "/images/sudut-profile-corp/talents/hasan-minhaj.jpg",
    bio: "An American comedian, writer, and producer, best known for his Netflix show 'Patriot Act' where he blends humor with insightful social and political commentary.",
    socialMedia: {
      instagram: "https://instagram.com/hasanminhaj",
      twitter: "https://twitter.com/hasanminhaj",
      youtube: "#",
      tiktok: "#",
    },
  },
  {
    id: 2,
    name: "Billie Eilish",
    slug: "billie-eilish",
    category: "Musician",
    imageUrl: "/images/sudut-profile-corp/talents/billie-eilish.jpg",
    bio: "Grammy-winning singer and songwriter known for her unique sound and style, redefining modern pop music on a global scale.",
    socialMedia: {
      instagram: "https://instagram.com/billieeilish",
      twitter: "https://twitter.com/billieeilish",
      youtube: "https://youtube.com/billieeilish",
      tiktok: "https://tiktok.com/@billieeilish",
    },
  },
  {
    id: 3,
    name: "Banksy",
    slug: "banksy",
    category: "Artist",
    imageUrl: "/images/sudut-profile-corp/talents/banksy.jpg",
    bio: "An anonymous England-based street artist and political activist, Banksy is known for his provocative artworks and satirical street art.",
    socialMedia: {
      instagram: "#",
      twitter: "#",
      youtube: "#",
      tiktok: "#",
    },
  },
  {
    id: 4,
    name: "Emma Stone",
    slug: "emma-stone",
    category: "Actor",
    imageUrl: "/images/sudut-profile-corp/talents/emma-stone.jpg",
    bio: "Academy Award-winning actress acclaimed for roles in 'La La Land', 'The Help', and 'Cruella'.",
    socialMedia: {
      instagram: "#",
      twitter: "#",
      youtube: "#",
      tiktok: "#",
    },
  },
  {
    id: 5,
    name: "Trevor Noah",
    slug: "trevor-noah",
    category: "Host",
    imageUrl: "/images/sudut-profile-corp/talents/trevor-noah.jpg",
    bio: "South African comedian and former host of 'The Daily Show', Trevor Noah is celebrated for his sharp humor and insightful perspectives.",
    socialMedia: {
      instagram: "https://instagram.com/trevornoah",
      twitter: "https://twitter.com/trevornoah",
      youtube: "#",
      tiktok: "#",
    },
  },
  {
    id: 6,
    name: "Charli D’Amelio",
    slug: "charli-damelio",
    category: "Influencer",
    imageUrl: "/images/sudut-profile-corp/talents/charli-damelio.jpg",
    bio: "One of the most-followed TikTok stars worldwide, known for her dance videos, collaborations, and influence in Gen Z culture.",
    socialMedia: {
      instagram: "https://instagram.com/charlidamelio",
      twitter: "https://twitter.com/charlidamelio",
      youtube: "https://youtube.com/c/charlidamelio",
      tiktok: "https://tiktok.com/@charlidamelio",
    },
  },
  {
    id: 7,
    name: "Misty Copeland",
    slug: "misty-copeland",
    category: "Dancer",
    imageUrl: "/images/sudut-profile-corp/talents/misty-copeland.jpg",
    bio: "The first African American woman promoted to principal dancer in American Ballet Theatre’s 75-year history.",
    socialMedia: {
      instagram: "https://instagram.com/mistyonpointe",
      twitter: "#",
      youtube: "#",
      tiktok: "#",
    },
  },
  {
    id: 8,
    name: "Haruki Murakami",
    slug: "haruki-murakami",
    category: "Writer",
    imageUrl: "/images/sudut-profile-corp/talents/haruki-murakami.jpg",
    bio: "Internationally acclaimed Japanese author of novels such as 'Norwegian Wood' and 'Kafka on the Shore'.",
    socialMedia: {
      instagram: "#",
      twitter: "#",
      youtube: "#",
      tiktok: "#",
    },
  },
];

export const talentsDetail = [
  {
    id: 1,
    name: "Hasan Minhaj",
    slug: "hasan-minhaj",
    category: "Comedian",
    imageUrl: "/images/sudut-profile-corp/talents/hasan-minhaj.jpg",
    bio: "An American comedian, writer, and producer, best known for his Netflix show 'Patriot Act' where he blends humor with insightful social and political commentary. Through his sharp wit and engaging storytelling, he has addressed topics ranging from global politics to pop culture. His unique style has earned him critical acclaim and a loyal fanbase across the world.",
    socials: {
      instagram: "https://instagram.com/hasanminhaj",
      twitter: "https://twitter.com/hasanminhaj",
      youtube: "#",
      tiktok: "#",
    },
    filmography: {
      standUpSpecials: [
        "Homecoming King (2017)",
        "Hasan Minhaj: The King's Jester (2022)",
      ],
      tvShows: [
        "The Daily Show (2014–2018)",
        "Patriot Act with Hasan Minhaj (2018–2020)",
      ],
    },
    act: {
      roles: ["Comedian", "Writer", "Producer"],
    },
    relatedBlogs: [
      {
        id: 1,
        title: "Hasan Minhaj: Mengubah Stand-Up Comedy dengan Politik & Humor",
        slug: "hasan-minhaj-comedy-politics",
        excerpt:
          "Hasan Minhaj, komedian Amerika, dikenal lewat 'Patriot Act' yang menggabungkan humor dan komentar sosial. Temukan perjalanan kariernya dan insight unik dari dunia stand-up comedy.",
        imageUrl: "/images/sudut-profile-corp/blogs/hasan-minhaj.jpg",
        author: {
          name: "Hasan Minhaj",
          role: "Comedian & Writer",
          avatarUrl: "/images/sudut-profile-corp/talents/hasan-minhaj.jpg",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Billie Eilish",
    slug: "billie-eilish",
    category: "Musician",
    imageUrl: "/images/sudut-profile-corp/talents/billie-eilish.jpg",
    bio: "A Grammy-winning singer and songwriter recognized for her innovative sound, blending elements of pop, R&B, and electronic music. She has redefined modern pop with chart-topping hits and genre-defying albums that resonate with audiences worldwide. Known for her bold fashion choices and artistic vision, she continues to influence a new generation of artists and fans.",
    socials: {
      instagram: "https://instagram.com/billieeilish",
      twitter: "https://twitter.com/billieeilish",
      youtube: "https://youtube.com/billieeilish",
      tiktok: "https://tiktok.com/@billieeilish",
    },
    filmography: {
      albums: [
        "When We All Fall Asleep, Where Do We Go? (2019)",
        "Happier Than Ever (2021)",
        "Hit Me Hard and Soft (2024)",
      ],
      awards: ["7 Grammy Awards", "1 Academy Award (Best Original Song, 2022)"],
    },
    act: {
      roles: ["Singer", "Songwriter", "Performer"],
    },
    relatedBlogs: [
      {
        id: 2,
        title: "The Rise of Billie Eilish",
        slug: "billie-eilish-rise",
        excerpt:
          "Billie Eilish, penyanyi muda Amerika, mengubah wajah musik pop modern dengan suara uniknya dan estetika kreatif yang khas.",
        imageUrl: "/images/sudut-profile-corp/blogs/blog2.jpg",
        author: {
          name: "Billie Eilish",
          role: "Singer & Songwriter",
          avatarUrl: "/images/sudut-profile-corp/talents/billie-eilish.jpg",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Banksy",
    slug: "banksy",
    category: "Artist",
    imageUrl: "/images/sudut-profile-corp/talents/banksy.jpg",
    bio: "An anonymous England-based street artist and political activist, Banksy has become one of the most influential figures in contemporary art. His works, often featuring satirical imagery and thought-provoking themes, challenge societal norms and question authority. Despite his hidden identity, his exhibitions and murals have sparked global conversations about politics, consumerism, and freedom.",
    socials: {
      instagram: "#",
      twitter: "#",
      youtube: "#",
      tiktok: "#",
    },
    filmography: {
      notableWorks: [
        "Girl With a Balloon",
        "Flower Thrower",
        "There Is Always Hope",
        "Dismaland (2015)",
      ],
      films: ["Exit Through the Gift Shop (2010)"],
    },
    act: {
      roles: ["Street Artist", "Political Activist", "Film Director"],
    },
    relatedBlogs: [
      {
        id: 3,
        title: "Banksy: The Mystery of Modern Street Art",
        slug: "banksy-street-art",
        excerpt:
          "Banksy, seniman jalanan Inggris, terkenal karena karya seni provokatif dan kritik sosialnya yang penuh satire.",
        imageUrl: "/images/sudut-profile-corp/blogs/blog3.jpg",
        author: {
          name: "Banksy",
          role: "Street Artist & Activist",
          avatarUrl: "/images/sudut-profile-corp/talents/banksy.jpg",
        },
      },
    ],
  },
  {
    id: 4,
    name: "Emma Stone",
    slug: "emma-stone",
    category: "Actor",
    imageUrl: "/images/sudut-profile-corp/talents/emma-stone.jpg",
    bio: "An Academy Award-winning actress acclaimed for her versatile roles in films like 'La La Land', 'The Help', and 'Cruella'. With her natural charisma and emotional depth, she has become one of Hollywood’s most respected talents. Beyond acting, she advocates for mental health awareness and continues to inspire audiences both on and off the screen.",
    socials: {
      instagram: "#",
      twitter: "#",
      youtube: "#",
      tiktok: "#",
    },
    filmography: {
      notableFilms: [
        "La La Land (2016)",
        "The Help (2011)",
        "Birdman (2014)",
        "Cruella (2021)",
        "Poor Things (2023)",
      ],
      awards: ["2 Academy Awards", "Golden Globe Awards"],
    },
    act: {
      roles: ["Actress", "Producer"],
    },
    relatedBlogs: [
      {
        id: 4,
        title: "Emma Stone: From Comedy to Oscar Glory",
        slug: "emma-stone-journey",
        excerpt:
          "Emma Stone, aktris pemenang Oscar, menapaki karier dari komedi hingga meraih penghargaan tertinggi di industri film.",
        imageUrl: "/images/sudut-profile-corp/blogs/blog4.jpg",
        author: {
          name: "Emma Stone",
          role: "Actress",
          avatarUrl: "/images/sudut-profile-corp/talents/emma-stone.jpg",
        },
      },
    ],
  },
  {
    id: 5,
    name: "Trevor Noah",
    slug: "trevor-noah",
    category: "Host",
    imageUrl: "/images/sudut-profile-corp/talents/trevor-noah.jpg",
    bio: "A South African comedian, writer, and political commentator, Trevor Noah rose to global prominence as the host of 'The Daily Show'. Known for his sharp humor and insightful perspectives, he skillfully blends personal storytelling with global political analysis. His memoir 'Born a Crime' became a bestseller, further cementing his impact as both an entertainer and social voice.",
    socials: {
      instagram: "https://instagram.com/trevornoah",
      twitter: "https://twitter.com/trevornoah",
      youtube: "#",
      tiktok: "#",
    },
    filmography: {
      tvShows: [
        "The Daily Show (2015–2022)",
        "Trevor Noah: I Wish You Would (2022)",
      ],
      books: ["Born a Crime: Stories from a South African Childhood (2016)"],
    },
    act: {
      roles: ["Comedian", "Host", "Writer"],
    },
    relatedBlogs: [
      {
        id: 5,
        title: "Trevor Noah: From South Africa to The Daily Show",
        slug: "trevor-noah-journey",
        excerpt:
          "Trevor Noah, komedian dan host asal Afrika Selatan, membawa perspektif unik ke kancah global lewat The Daily Show.",
        imageUrl: "/images/sudut-profile-corp/blogs/blog5.jpg",
        author: {
          name: "Trevor Noah",
          role: "Comedian & TV Host",
          avatarUrl: "/images/sudut-profile-corp/talents/trevor-noah.jpg",
        },
      },
    ],
  },
  {
    id: 6,
    name: "Charli D’Amelio",
    slug: "charli-damelio",
    category: "Influencer",
    imageUrl: "/images/sudut-profile-corp/talents/charli-damelio.jpg",
    bio: "One of the most-followed TikTok stars worldwide, she rose to fame with her viral dance videos, collaborations, and engaging content that captivated millions. As a Gen Z cultural icon, she has expanded her influence into music, fashion, and brand partnerships. Her journey reflects the power of social media in shaping modern celebrity culture.",
    socials: {
      instagram: "https://instagram.com/charlidamelio",
      twitter: "https://twitter.com/charlidamelio",
      youtube: "https://youtube.com/c/charlidamelio",
      tiktok: "https://tiktok.com/@charlidamelio",
    },
    filmography: {
      tvShows: ["The D’Amelio Show (2021–present)"],
      collaborations: ["Dancing with J-Lo", "Sabra Hummus Super Bowl Ad"],
    },
    act: {
      roles: ["Influencer", "Dancer", "Content Creator"],
    },
    relatedBlogs: [
      {
        id: 6,
        title: "Charli D’Amelio and the TikTok Generation",
        slug: "charli-damelio-genz",
        excerpt:
          "Charli D’Amelio menjadi fenomena TikTok, menginspirasi generasi muda dengan kreativitas dan engagement tinggi di platform video pendek.",
        imageUrl: "/images/sudut-profile-corp/blogs/blog6.jpg",
        author: {
          name: "Charli D’Amelio",
          role: "TikTok Influencer",
          avatarUrl: "/images/sudut-profile-corp/talents/charli-damelio.jpg",
        },
      },
    ],
  },
  {
    id: 7,
    name: "Misty Copeland",
    slug: "misty-copeland",
    category: "Dancer",
    imageUrl: "/images/sudut-profile-corp/talents/misty-copeland.jpg",
    bio: "The first African American woman promoted to principal dancer in American Ballet Theatre’s 75-year history, she broke barriers in the world of classical ballet. Known for her artistry, strength, and resilience, she has become a symbol of representation and perseverance. Beyond her performances, she advocates for diversity in the arts and inspires young dancers globally.",
    socials: {
      instagram: "https://instagram.com/mistyonpointe",
      twitter: "#",
      youtube: "#",
      tiktok: "#",
    },
    filmography: {
      performances: [
        "Swan Lake",
        "Romeo and Juliet",
        "Firebird",
        "The Nutcracker",
      ],
      books: [
        "Life in Motion: An Unlikely Ballerina (2014)",
        "Ballerina Body (2017)",
      ],
    },
    act: {
      roles: ["Ballet Dancer", "Author", "Philanthropist"],
    },
    relatedBlogs: [
      {
        id: 7,
        title: "Misty Copeland: Breaking Ballet Barriers",
        slug: "misty-copeland-ballet",
        excerpt:
          "Misty Copeland adalah penari balet Amerika yang memecahkan batasan rasial dan menjadi inspirasi generasi baru penari profesional.",
        imageUrl: "/images/sudut-profile-corp/blogs/blog7.jpg",
        author: {
          name: "Misty Copeland",
          role: "Ballet Dancer",
          avatarUrl: "/images/sudut-profile-corp/talents/misty-copeland.jpg",
        },
      },
    ],
  },
  {
    id: 8,
    name: "Haruki Murakami",
    slug: "haruki-murakami",
    category: "Writer",
    imageUrl: "/images/sudut-profile-corp/talents/haruki-murakami.jpg",
    bio: "An internationally acclaimed Japanese author celebrated for his novels such as 'Norwegian Wood' and 'Kafka on the Shore'. His works, often surreal and deeply introspective, blend magical realism with themes of love, memory, and identity. With a dedicated global readership, he has become one of the most influential literary voices of his generation.",
    socials: {
      instagram: "#",
      twitter: "#",
      youtube: "#",
      tiktok: "#",
    },
    filmography: {
      novels: [
        "Norwegian Wood (1987)",
        "Kafka on the Shore (2002)",
        "1Q84 (2009)",
        "The Wind-Up Bird Chronicle (1994)",
      ],
      awards: ["Franz Kafka Prize (2006)", "Jerusalem Prize (2009)"],
    },
    act: {
      roles: ["Novelist", "Translator", "Essayist"],
    },
    relatedBlogs: [
      {
        id: 8,
        title: "Haruki Murakami: Blurring Reality and Surrealism",
        slug: "haruki-murakami-literature",
        excerpt:
          "Haruki Murakami, penulis Jepang terkenal, memadukan realitas dan surealisme dalam karya-karyanya yang mendunia.",
        imageUrl: "/images/sudut-profile-corp/blogs/blog8.jpg",
        author: {
          name: "Haruki Murakami",
          role: "Author",
          avatarUrl: "/images/sudut-profile-corp/talents/haruki-murakami.jpg",
        },
      },
    ],
  },
];

export interface BlogType {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  slug: string;
}
export const blogs = [
  {
    id: 1,
    title: "Hasan Minhaj: Mengubah Stand-Up Comedy dengan Politik & Humor",
    excerpt:
      "Hasan Minhaj, komedian Amerika, dikenal lewat 'Patriot Act' yang menggabungkan humor dan komentar sosial. Temukan perjalanan kariernya dan insight unik dari dunia stand-up comedy.",
    imageUrl: "/images/sudut-profile-corp/blogs/hasan-minhaj.jpg",
    author: {
      name: "Hasan Minhaj",
      role: "Comedian & Writer",
      avatarUrl: "/images/sudut-profile-corp/talents/hasan-minhaj.jpg",
    },
    slug: "hasan-minhaj-comedy-politics",
  },
  {
    id: 2,
    title: "Billie Eilish: Transformasi Musik Pop Global",
    excerpt:
      "Grammy-winning Billie Eilish membawa pop ke level baru dengan suara unik dan gaya khas. Pelajari bagaimana ia membentuk tren musik generasi muda dunia.",
    imageUrl: "/images/sudut-profile-corp/blogs/billie-eilish.jpg",
    author: {
      name: "Billie Eilish",
      role: "Musician",
      avatarUrl: "/images/sudut-profile-corp/talents/billie-eilish.jpg",
    },
    slug: "billie-eilish-pop-global",
  },
  {
    id: 3,
    title: "Banksy: Seni Jalanan yang Mengubah Perspektif Dunia",
    excerpt:
      "Banksy, seniman anonim Inggris, terkenal dengan karya satir dan kritik sosialnya. Temukan cara Banksy menggunakan seni untuk menyampaikan pesan kuat.",
    imageUrl: "/images/sudut-profile-corp/blogs/banksy.jpg",
    author: {
      name: "Banksy",
      role: "Street Artist",
      avatarUrl: "/images/sudut-profile-corp/talents/banksy.jpg",
    },
    slug: "banksy-street-art",
  },
  {
    id: 4,
    title: "Emma Stone: Dari Layar Kaca ke Panggung Oscar",
    excerpt:
      "Aktris pemenang Academy Award Emma Stone memukau lewat perannya di 'La La Land' dan 'Cruella'. Simak perjalanan karier dan tips suksesnya di dunia akting.",
    imageUrl: "/images/sudut-profile-corp/blogs/emma-stone.jpg",
    author: {
      name: "Emma Stone",
      role: "Actor",
      avatarUrl: "/images/sudut-profile-corp/talents/emma-stone.jpg",
    },
    slug: "emma-stone-acting-journey",
  },
  {
    id: 5,
    title: "Trevor Noah: Menghubungkan Dunia lewat Komedi",
    excerpt:
      "Trevor Noah, mantan host 'The Daily Show', dikenal karena perspektif tajam dan humornya. Pelajari bagaimana ia membawa komentar sosial ke panggung internasional.",
    imageUrl: "/images/sudut-profile-corp/blogs/trevor-noah.jpg",
    author: {
      name: "Trevor Noah",
      role: "Comedian & Host",
      avatarUrl: "/images/sudut-profile-corp/talents/trevor-noah.jpg",
    },
    slug: "trevor-noah-comedy-global",
  },
  {
    id: 6,
    title: "Charli D’Amelio: Fenomena TikTok & Gen Z",
    excerpt:
      "Charli D’Amelio adalah salah satu bintang TikTok paling berpengaruh di dunia. Simak perjalanan kariernya dan dampaknya pada budaya Gen Z global.",
    imageUrl: "/images/sudut-profile-corp/blogs/charli-damelio.jpg",
    author: {
      name: "Charli D’Amelio",
      role: "Influencer",
      avatarUrl: "/images/sudut-profile-corp/talents/charli-damelio.jpg",
    },
    slug: "charli-damelio-tiktok-genz",
  },
  {
    id: 7,
    title: "Misty Copeland: Ballerina yang Menginspirasi Dunia",
    excerpt:
      "Misty Copeland menjadi wanita Afrika-Amerika pertama yang dipromosikan menjadi principal dancer di American Ballet Theatre. Pelajari kisah inspiratifnya di dunia tari klasik.",
    imageUrl: "/images/sudut-profile-corp/blogs/misty-copeland.jpg",
    author: {
      name: "Misty Copeland",
      role: "Dancer",
      avatarUrl: "/images/sudut-profile-corp/talents/misty-copeland.jpg",
    },
    slug: "misty-copeland-ballet-inspiration",
  },
  {
    id: 8,
    title: "Haruki Murakami: Menelusuri Dunia Magis & Realitas",
    excerpt:
      "Pengarang Jepang terkenal, Haruki Murakami, menghadirkan kisah surreal dan introspektif. Temukan bagaimana novelnya mempengaruhi pembaca global.",
    imageUrl: "/images/sudut-profile-corp/blogs/haruki-murakami.jpg",
    author: {
      name: "Haruki Murakami",
      role: "Writer",
      avatarUrl: "/images/sudut-profile-corp/talents/haruki-murakami.jpg",
    },
    slug: "haruki-murakami-literary-world",
  },
];

export const blogDetail = [
  {
    id: 1,
    title: "Hasan Minhaj: Mengubah Stand-Up Comedy dengan Politik & Humor",
    excerpt:
      "Hasan Minhaj, komedian Amerika, dikenal lewat 'Patriot Act' yang menggabungkan humor dan komentar sosial. Temukan perjalanan kariernya dan insight unik dari dunia stand-up comedy.",
    imageUrl: "/images/sudut-profile-corp/blogs/hasan-minhaj.jpg",
    author: {
      name: "Hasan Minhaj",
      role: "Comedian & Writer",
      avatarUrl: "/images/sudut-profile-corp/talents/hasan-minhaj.jpg",
    },
    slug: "hasan-minhaj-comedy-politics",
    content: `
      <p>Hasan Minhaj adalah komedian, penulis, dan produser Amerika yang dikenal karena kemampuan uniknya menggabungkan humor dan komentar sosial. Lahir di Davis, California pada 1985, Hasan tumbuh dalam komunitas India-Amerika yang erat, yang kemudian menginspirasi perspektif komedinya.</p>
      <h2 id="early-life">Kehidupan Awal</h2>
      <p>Sejak muda, Hasan tertarik pada bercerita dan pertunjukan. Ia menempuh pendidikan di UC Davis dengan jurusan Ilmu Politik, dan aktif dalam debat dan teater, yang membentuk dasar karier komedinya.</p>
      <h2 id="career">Perjalanan Karier</h2>
      <p>Hasan memulai karier profesionalnya dengan tampil di berbagai klub komedi di Amerika. Ia kemudian menjadi koresponden di 'The Daily Show', dan mendapatkan perhatian nasional berkat gaya penyampaian yang cerdas dan menghibur.</p>
      <h2 id="patriot-act">Patriot Act</h2>
      <p>Pada 2018, Hasan meluncurkan 'Patriot Act', sebuah acara Netflix yang membahas isu global dan domestik melalui komedi. Acara ini dipuji karena riset yang mendalam dan cara Hasan menyampaikan isu kompleks secara menghibur dan informatif.</p>
      <h2 id="style">Gaya & Pengaruh</h2>
      <p>Gaya komedi Hasan menggabungkan cerita pribadi, komentar sosial, dan presentasi multimedia. Ia terinspirasi dari Jon Stewart, Dave Chappelle, dan pengalamannya tumbuh dalam budaya multikultural.</p>
      <h2 id="awards">Penghargaan & Prestasi</h2>
      <p>Hasan meraih Emmy untuk Outstanding Original Interactive Program dan terus tur internasional, menghadirkan perspektif uniknya di dunia komedi.</p>
      <h2 id="fun-facts">Fakta Menarik</h2>
      <ul>
        <li>Terinspirasi oleh Jon Stewart dan George Carlin.</li>
        <li>Sangat peduli dengan isu keadilan sosial.</li>
        <li>Mendukung pendidikan dan seni bagi anak muda.</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Billie Eilish: Transformasi Musik Pop Global",
    excerpt:
      "Grammy-winning Billie Eilish membawa pop ke level baru dengan suara unik dan gaya khas. Pelajari bagaimana ia membentuk tren musik generasi muda dunia.",
    imageUrl: "/images/sudut-profile-corp/blogs/billie-eilish.jpg",
    slug: "billie-eilish-pop-global",
    content: `
      <p>Billie Eilish Pirate Baird O'Connell lahir pada 18 Desember 2001 di Los Angeles. Ia dikenal karena suara vokalnya yang unik, produksi musik inovatif, dan gaya visual khas yang memengaruhi budaya pop global.</p>
      <h2 id="early-life">Kehidupan Awal</h2>
      <p>Billie tumbuh di keluarga kreatif; orang tuanya adalah musisi dan penulis. Ia mulai menulis dan merekam lagu sejak usia muda, sering bereksperimen dengan suara dan genre musik yang berbeda.</p>
      <h2 id="career">Perjalanan Karier</h2>
      <p>Debutnya dengan lagu 'Ocean Eyes' menarik perhatian besar. Album pertamanya, 'When We All Fall Asleep, Where Do We Go?', meraih kesuksesan global, memenangkan Grammy, dan mengubah standar musik pop generasi muda.</p>
      <h2 id="style">Gaya & Filosofi</h2>
      <p>Billie terkenal dengan produksi musik yang gelap dan minimalis, lirik introspektif, serta fashion yang anti-mainstream. Ia selalu menekankan pentingnya autenticity dan ekspresi diri dalam berkarya.</p>
      <h2 id="awards">Penghargaan & Prestasi</h2>
      <p>Billie telah memenangkan banyak Grammy Awards, termasuk Album of the Year, dan menjadi salah satu artis termuda yang meraih kesuksesan global di usia remaja.</p>
      <h2 id="fun-facts">Fakta Menarik</h2>
      <ul>
        <li>Menghasilkan musik bersama kakaknya, Finneas O'Connell.</li>
        <li>Sering mengeksplorasi visual unik dalam video musiknya.</li>
        <li>Dikenal sebagai ikon Gen Z dengan pengaruh global.</li>
      </ul>
    `,
    author: {
      name: "Sudut Corp",
      avatar: "/images/shared/avatar.jpg",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Music", "Pop", "Trends"],
    likes: 142,
    comments: 23,
  },
  {
    id: 3,
    title: "Banksy: Seni Jalanan yang Mengubah Perspektif Dunia",
    excerpt:
      "Banksy, seniman anonim Inggris, terkenal dengan karya satir dan kritik sosialnya. Temukan cara Banksy menggunakan seni untuk menyampaikan pesan kuat.",
    imageUrl: "/images/sudut-profile-corp/blogs/banksy.jpg",
    slug: "banksy-street-art",
    content: `
      <p>Banksy adalah seniman jalanan anonim asal Inggris, terkenal karena karya satir yang menyoroti isu politik, sosial, dan budaya. Identitasnya tetap menjadi misteri, menambah aura unik pada karya-karyanya.</p>
      <h2 id="early-life">Awal Karier</h2>
      <p>Meski sedikit yang diketahui tentang kehidupan pribadi Banksy, karya-karya awalnya muncul di Bristol, Inggris, dan dikenal karena stensil yang inovatif serta pesan yang tajam.</p>
      <h2 id="style">Gaya & Filosofi</h2>
      <p>Gaya Banksy menggabungkan grafiti dengan pesan satir. Ia sering menyoroti ketidakadilan sosial, perang, dan konsumerisme, membuat penonton berpikir kritis melalui visual yang sederhana tapi kuat.</p>
      <h2 id="impact">Dampak Global</h2>
      <p>Karya Banksy dipamerkan di galeri dan ruang publik di seluruh dunia, memengaruhi banyak seniman modern. Ia membuktikan bahwa seni jalanan bisa menjadi media kritik sosial yang efektif.</p>
      <h2 id="fun-facts">Fakta Menarik</h2>
      <ul>
        <li>Identitasnya masih misterius hingga kini.</li>
        <li>Karya ikonik: 'Girl with Balloon'.</li>
        <li>Kerap menyisipkan pesan politik dalam kejutan publik.</li>
      </ul>
    `,
    author: {
      name: "Sudut Corp",
      avatar: "/images/shared/avatar.jpg",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Trends", "JavaScript"],
    likes: 142,
    comments: 23,
  },
  {
    id: 4,
    title: "Emma Stone: Dari Layar Kaca ke Panggung Oscar",
    excerpt:
      "Aktris pemenang Academy Award Emma Stone memukau lewat perannya di 'La La Land' dan 'Cruella'. Simak perjalanan karier dan tips suksesnya di dunia akting.",
    imageUrl: "/images/sudut-profile-corp/blogs/emma-stone.jpg",
    slug: "emma-stone-acting-journey",
    content: `
      <p>Emma Stone adalah aktris Amerika yang telah memenangkan Academy Award dan dikenal karena kemampuan aktingnya yang ekspresif. Lahir pada 6 November 1988 di Scottsdale, Arizona, ia memulai karier di teater musikal sebelum pindah ke film.</p>
      <h2 id="career">Perjalanan Karier</h2>
      <p>Debutnya di film komedi teen 'Superbad' menarik perhatian publik. Puncaknya datang melalui peran di 'La La Land', yang memberinya Oscar Best Actress. Emma dikenal mampu beradaptasi dengan berbagai genre, dari drama hingga komedi.</p>
      <h2 id="style">Gaya & Filosofi</h2>
      <p>Emma menekankan dedikasi pada karakter dan keautentikan emosi. Ia sering meneliti latar belakang peran secara mendalam untuk menghadirkan performa yang meyakinkan dan relatable.</p>
      <h2 id="fun-facts">Fakta Menarik</h2>
      <ul>
        <li>Awalnya bercita-cita menjadi penulis komedi.</li>
        <li>Suka bermain piano dan akting musikal.</li>
        <li>Dikenal ramah dan sering berbagi tips akting kepada penggemar.</li>
      </ul>
    `,
    author: {
      name: "Sudut Corp",
      avatar: "/images/shared/avatar.jpg",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Trends", "JavaScript"],
    likes: 142,
    comments: 23,
  },
  {
    id: 5,
    title: "Trevor Noah: Menghubungkan Dunia lewat Komedi",
    excerpt:
      "Trevor Noah, mantan host 'The Daily Show', dikenal karena perspektif tajam dan humornya. Pelajari bagaimana ia membawa komentar sosial ke panggung internasional.",
    imageUrl: "/images/sudut-profile-corp/blogs/trevor-noah.jpg",
    slug: "trevor-noah-comedy-global",
    content: `
      <p>Trevor Noah adalah komedian asal Afrika Selatan, mantan host 'The Daily Show', yang dikenal karena kemampuannya menggabungkan humor dan komentar sosial. Lahir di Johannesburg pada 20 Februari 1984, ia menghadapi tantangan kehidupan apartheids yang membentuk perspektifnya.</p>
      <h2 id="career">Perjalanan Karier</h2>
      <p>Trevor memulai karier di stand-up lokal, lalu tampil di televisi Afrika Selatan. Kesuksesannya di Amerika dimulai saat ia menjadi koresponden 'The Daily Show' dan akhirnya mengambil alih peran host, membawanya ke panggung internasional.</p>
      <h2 id="style">Gaya & Filosofi</h2>
      <p>Humornya menggabungkan cerita pribadi, observasi sosial, dan satire politik. Ia menekankan empati dan perspektif global, membuat isu kompleks lebih mudah dicerna melalui komedi.</p>
      <h2 id="fun-facts">Fakta Menarik</h2>
      <ul>
        <li>Menguasai beberapa bahasa termasuk Zulu dan Inggris.</li>
        <li>Menulis memoar berjudul 'Born a Crime'.</li>
        <li>Kerap membahas isu rasial dan sosial dengan cara menghibur.</li>
      </ul>
    `,
    author: {
      name: "Sudut Corp",
      avatar: "/images/shared/avatar.jpg",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Trends", "JavaScript"],
    likes: 142,
    comments: 23,
  },
  {
    id: 6,
    title: "Charli D’Amelio: Fenomena TikTok & Gen Z",
    excerpt:
      "Charli D’Amelio adalah salah satu bintang TikTok paling berpengaruh di dunia. Simak perjalanan kariernya dan dampaknya pada budaya Gen Z global.",
    imageUrl: "/images/sudut-profile-corp/blogs/charli-damelio.jpg",
    slug: "charli-damelio-tiktok-genz",
    content: `
      <p>Charli D’Amelio adalah fenomena TikTok yang dikenal dengan video tari dan kolaborasinya yang viral. Lahir pada 1 Mei 2004 di Norwalk, Connecticut, ia dengan cepat menjadi ikon budaya Gen Z.</p>
      <h2 id="career">Perjalanan Karier</h2>
      <p>Charli mulai memposting video tari di TikTok pada 2019, dan dalam hitungan bulan, pengikutnya melonjak menjadi jutaan. Ia kemudian merambah ke berbagai kampanye brand global, reality show, dan media sosial lainnya.</p>
      <h2 id="influence">Pengaruh & Filosofi</h2>
      <p>Charli menekankan pentingnya kerja keras, kreativitas, dan konsistensi. Ia menjadi inspirasi bagi generasi muda dalam memanfaatkan platform digital untuk berekspresi dan membangun karier.</p>
      <h2 id="fun-facts">Fakta Menarik</h2>
      <ul>
        <li>Mulai menari sejak usia 3 tahun.</li>
        <li>Sering membuat konten bersama keluarganya.</li>
        <li>Menjadi salah satu influencer dengan pengaruh global terbesar di TikTok.</li>
      </ul>
    `,
    author: {
      name: "Sudut Corp",
      avatar: "/images/shared/avatar.jpg",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Trends", "JavaScript"],
    likes: 142,
    comments: 23,
  },
  {
    id: 7,
    title: "Misty Copeland: Ballerina yang Menginspirasi Dunia",
    excerpt:
      "Misty Copeland menjadi wanita Afrika-Amerika pertama yang dipromosikan menjadi principal dancer di American Ballet Theatre. Pelajari kisah inspiratifnya di dunia tari klasik.",
    imageUrl: "/images/sudut-profile-corp/blogs/misty-copeland.jpg",
    slug: "misty-copeland-ballet-inspiration",
    content: `
      <p>Misty Copeland adalah penari balet Afrika-Amerika yang menorehkan sejarah sebagai principal dancer pertama di American Ballet Theatre. Lahir di Kansas City pada 10 September 1982, ia mengatasi banyak rintangan dalam dunia balet yang dominan kulit putih.</p>
      <h2 id="career">Perjalanan Karier</h2>
      <p>Misty mulai menari secara profesional pada usia remaja dan dengan cepat menonjol berkat teknik, ekspresi, dan ketekunannya. Ia menerima banyak penghargaan dan menginspirasi generasi penari muda, terutama perempuan Afrika-Amerika.</p>
      <h2 id="style">Gaya & Filosofi</h2>
      <p>Misty dikenal karena kekuatan, fleksibilitas, dan keanggunannya. Ia percaya balet adalah sarana ekspresi dan pemberdayaan, serta menekankan pentingnya ketekunan dan keberanian dalam mengejar mimpi.</p>
      <h2 id="fun-facts">Fakta Menarik</h2>
      <ul>
        <li>Mulai menari di usia 13 tahun, termasuk terlambat untuk balerina profesional.</li>
        <li>Menulis buku motivasi untuk anak muda.</li>
        <li>Menjadi inspirasi bagi banyak penari kulit berwarna di seluruh dunia.</li>
      </ul>
    `,
    author: {
      name: "Sudut Corp",
      avatar: "/images/shared/avatar.jpg",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Trends", "JavaScript"],
    likes: 142,
    comments: 23,
  },
  {
    id: 8,
    title: "Haruki Murakami: Menelusuri Dunia Magis & Realitas",
    excerpt:
      "Pengarang Jepang terkenal, Haruki Murakami, menghadirkan kisah surreal dan introspektif. Temukan bagaimana novelnya mempengaruhi pembaca global.",
    imageUrl: "/images/sudut-profile-corp/blogs/haruki-murakami.jpg",
    slug: "haruki-murakami-literary-world",
    content: `
      <p>Haruki Murakami adalah penulis Jepang yang terkenal karena novel-novelnya yang surreal, introspektif, dan memadukan realitas dengan dunia magis. Lahir di Kyoto pada 12 Januari 1949, Murakami menjadi salah satu penulis Jepang yang paling berpengaruh di dunia.</p>
      <h2 id="career">Perjalanan Karier</h2>
      <p>Murakami memulai karier menulis novel setelah membuka toko jazz. Karya terkenalnya termasuk 'Norwegian Wood', 'Kafka on the Shore', dan '1Q84'. Ia dikenal karena bahasa yang sederhana tapi mendalam, serta tema alienasi dan pencarian jati diri.</p>
      <h2 id="style">Gaya & Filosofi</h2>
      <p>Gaya penulisan Murakami memadukan realisme magis, musik jazz, dan budaya Barat dengan kehidupan Jepang. Ia menekankan introspeksi, mimpi, dan hubungan antar manusia dalam cerita-ceritanya.</p>
      <h2 id="fun-facts">Fakta Menarik</h2>
      <ul>
        <li>Juga seorang pelari marathon dan menekankan disiplin dalam hidup dan menulis.</li>
        <li>Banyak karyanya diterjemahkan ke lebih dari 50 bahasa.</li>
        <li>Mengintegrasikan musik dan budaya pop Barat dalam novel-novelnya.</li>
      </ul>
    `,
    author: {
      name: "Sudut Corp",
      avatar: "/images/shared/avatar.jpg",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Trends", "JavaScript"],
    likes: 142,
    comments: 23,
  },
];

export const courses = [
  {
    id: 1,
    title: "Mastering Personal Branding",
    slug: "mastering-personal-branding",
    duration: "90 Min",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2070&q=80",
    description:
      "Learn how to craft a strong personal brand that highlights your strengths, builds credibility, and opens new career opportunities.",
  },
  {
    id: 2,
    title: "Public Speaking for Talents",
    slug: "public-speaking-for-talents",
    duration: "120 Min",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80",
    description:
      "Develop confidence and clarity in your public speaking. This course provides practical tips and real-life exercises to captivate audiences.",
  },
  {
    id: 3,
    title: "Social Media Strategy for Creatives",
    slug: "social-media-strategy-for-creatives",
    duration: "100 Min",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=2070&q=80",
    description:
      "Discover how to grow your presence on social media, create engaging content, and connect with your audience effectively.",
  },
  {
    id: 4,
    title: "Career Growth in Entertainment Industry",
    slug: "career-growth-entertainment-industry",
    duration: "150 Min",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80",
    description:
      "A practical guide for talents navigating the entertainment industry—learn strategies to sustain, scale, and succeed in your career.",
  },
  {
    id: 5,
    title: "Content Creation & Storytelling",
    slug: "content-creation-storytelling",
    duration: "95 Min",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2070&q=80",
    description:
      "Learn the art of storytelling and how to create engaging content that resonates with audiences across platforms.",
  },
  {
    id: 6,
    title: "Negotiation & Talent Contracts",
    slug: "negotiation-talent-contracts",
    duration: "110 Min",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2070&q=80",
    description:
      "Understand key aspects of negotiation and contracts in the talent industry to protect your rights and maximize opportunities.",
  },
  {
    id: 7,
    title: "Wellness & Mindset for Performers",
    slug: "wellness-mindset-for-performers",
    duration: "80 Min",
    imageUrl:
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=2070&q=80",
    description:
      "Discover practical techniques to manage stress, build resilience, and maintain a positive mindset in demanding creative industries.",
  },
  {
    id: 8,
    title: "Networking & Collaboration Mastery",
    slug: "networking-collaboration-mastery",
    duration: "105 Min",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2070&q=80",
    description:
      "Build strong professional relationships, find collaborators, and expand your network to accelerate your growth as a talent.",
  },
];

export const courseDetail = [
  {
    slug: "mastering-personal-branding",
    title: "Mastering Personal Branding",
    instructor: "Hasan Minhaj",
    price: "149.000 IDR",
    description:
      "Pelajari cara membangun personal brand yang kuat untuk meningkatkan kredibilitas dan membuka peluang karier baru.",
    content: [
      "Hasan Minhaj adalah seorang komedian, penulis, dan pembawa acara yang dikenal karena kemampuannya membangun citra personal yang kuat di dunia hiburan internasional.",
      "Dalam kelas ini, Hasan akan membagikan pengalaman serta strategi praktis tentang bagaimana personal branding dapat membuka peluang karier baru dan meningkatkan kredibilitas Anda.",
      "Kelas ini cocok untuk siapa saja yang ingin lebih dikenal sebagai profesional yang unik, baik di dunia kerja, industri kreatif, maupun bisnis.",
      "Video pembukaan dapat Anda akses gratis untuk melihat gambaran isi kelas ini.",
    ],
    curriculum: [
      {
        title: "Chapter 1: Introduction",
        items: ["Introduction to Personal Branding"],
      },
      {
        title: "Chapter 2: Defining Your Value",
        items: ["Defining Your Unique Value"],
      },
      {
        title: "Chapter 3: Storytelling & Presence",
        items: ["Storytelling & Social Media Presence"],
      },
      {
        title: "Chapter 4: Case Studies",
        items: ["Case Studies & Best Practices"],
      },
    ],
    faqs: [
      {
        q: "Apakah kelas ini cocok untuk pemula?",
        a: "Ya, kelas ini dirancang untuk semua level, termasuk pemula.",
      },
      {
        q: "Apakah ada materi praktek?",
        a: "Ada, Anda akan mendapat tugas untuk melatih personal branding Anda.",
      },
    ],
  },
  {
    slug: "public-speaking-for-talents",
    title: "Public Speaking for Talents",
    instructor: "Raditya Dika",
    price: "199.000 IDR",
    description:
      "Bangun kepercayaan diri saat berbicara di depan umum dengan tips praktis dan latihan nyata.",
    content: [
      "Raditya Dika adalah seorang penulis, sutradara, sekaligus public speaker yang berpengalaman lebih dari satu dekade di dunia hiburan Indonesia.",
      "Dalam kelas ini, Raditya mengajarkan teknik public speaking agar Anda bisa tampil percaya diri di depan audiens, mulai dari mengatasi gugup hingga menyusun struktur presentasi yang kuat.",
      "Kursus ini dirancang untuk siapa saja yang ingin meningkatkan kemampuan berbicara, baik untuk pekerjaan, presentasi akademik, maupun performa di depan kamera.",
      "Tersedia video pembukaan kelas yang bisa Anda tonton gratis sebelum membeli.",
    ],
    curriculum: [
      {
        title: "Chapter 1: Overcoming Nervousness",
        items: ["Mengatasi Rasa Gugup"],
      },
      {
        title: "Chapter 2: Vocal Techniques",
        items: ["Teknik Vokal & Intonasi"],
      },
      {
        title: "Chapter 3: Presentation Structure",
        items: ["Membangun Struktur Presentasi"],
      },
      {
        title: "Chapter 4: Practice",
        items: ["Latihan Public Speaking"],
      },
    ],
    faqs: [
      {
        q: "Apakah ada sertifikat?",
        a: "Ya, setelah menyelesaikan kelas ini Anda akan mendapat e-certificate.",
      },
      {
        q: "Apakah bisa diakses selamanya?",
        a: "Benar, akses kursus bersifat lifetime.",
      },
    ],
  },
  {
    slug: "creative-storytelling",
    title: "Creative Storytelling for Content",
    instructor: "Najwa Shihab",
    price: "179.000 IDR",
    description:
      "Tingkatkan kemampuan storytelling untuk membuat konten yang menarik dan memikat audiens di berbagai platform.",
    content: [
      "Najwa Shihab adalah seorang jurnalis dan presenter yang dikenal lewat wawancara mendalam serta kemampuan bercerita yang memikat audiens.",
      "Dalam kelas ini, Najwa mengajarkan bagaimana membangun struktur cerita yang kuat dan relevan untuk berbagai medium, mulai dari tulisan hingga video.",
      "Anda akan mempelajari cara menggabungkan fakta dengan narasi agar pesan tersampaikan dengan lebih berkesan.",
      "Kelas ini sangat cocok untuk content creator, jurnalis, maupun siapa saja yang ingin meningkatkan engagement lewat cerita.",
    ],
    curriculum: [
      {
        title: "Chapter 1: Importance of Storytelling",
        items: ["Mengapa Storytelling Penting?"],
      },
      {
        title: "Chapter 2: Story Structure",
        items: ["Membangun Struktur Cerita"],
      },
      {
        title: "Chapter 3: Social Media Techniques",
        items: ["Teknik Storytelling di Media Sosial"],
      },
      {
        title: "Chapter 4: Practice",
        items: ["Praktek: Membuat Cerita Anda"],
      },
    ],
    faqs: [
      {
        q: "Apakah ada contoh konten nyata?",
        a: "Ya, kelas ini berisi case study konten dari berbagai platform.",
      },
      {
        q: "Apakah cocok untuk content creator?",
        a: "Sangat cocok, terutama untuk kreator yang ingin memperkuat engagement.",
      },
    ],
  },
  {
    slug: "social-media-strategy",
    title: "Social Media Strategy for Talents",
    instructor: "Agnez Mo",
    price: "249.000 IDR",
    description:
      "Pelajari cara merancang strategi media sosial yang efektif untuk membangun audiens dan meningkatkan exposure.",
    content: [
      "Agnez Mo adalah seorang penyanyi dan artis internasional yang juga dikenal memiliki strategi personal branding dan media sosial yang kuat.",
      "Dalam kelas ini, Agnez akan membagikan pengalaman membangun audiens global melalui perencanaan konten yang konsisten dan efektif.",
      "Anda akan belajar cara memilih platform yang tepat, mengukur performa konten, hingga menggunakan tools otomatisasi untuk menghemat waktu.",
      "Kelas ini cocok untuk personal branding, kreator konten, maupun bisnis kecil yang ingin memperluas jangkauan.",
    ],
    curriculum: [
      {
        title: "Chapter 1: Fundamentals",
        items: ["Dasar-dasar Strategi Media Sosial"],
      },
      {
        title: "Chapter 2: Content & Engagement",
        items: ["Konten & Engagement"],
      },
      {
        title: "Chapter 3: Performance Measurement",
        items: ["Mengukur Performa"],
      },
      {
        title: "Chapter 4: Tools & Automation",
        items: ["Tools & Automation"],
      },
    ],
    faqs: [
      {
        q: "Platform apa saja yang dibahas?",
        a: "Instagram, TikTok, YouTube, dan LinkedIn.",
      },
      {
        q: "Apakah strategi ini bisa untuk bisnis kecil?",
        a: "Ya, strategi ini fleksibel untuk personal branding maupun bisnis kecil.",
      },
    ],
  },
  {
    slug: "negotiation-for-success",
    title: "Negotiation Skills for Success",
    instructor: "Ernest Prakasa",
    price: "159.000 IDR",
    description:
      "Kuasai teknik negosiasi untuk meningkatkan peluang sukses dalam karier maupun kehidupan sehari-hari.",
    content: [
      "Ernest Prakasa adalah seorang komedian, penulis, dan produser yang sering terlibat dalam berbagai negosiasi di dunia hiburan dan bisnis.",
      "Dalam kelas ini, Ernest berbagi teknik negosiasi yang efektif untuk menciptakan situasi win-win.",
      "Anda akan mempelajari bahasa tubuh, psikologi negosiasi, hingga praktek simulasi untuk melatih kemampuan secara nyata.",
      "Kelas ini relevan untuk profesional, wirausahawan, maupun siapa saja yang ingin meningkatkan keterampilan komunikasi dalam kehidupan sehari-hari.",
    ],
    curriculum: [
      {
        title: "Chapter 1: Basics of Negotiation",
        items: ["Dasar-dasar Negosiasi"],
      },
      {
        title: "Chapter 2: Win-Win Situation",
        items: ["Membangun Win-Win Situation"],
      },
      {
        title: "Chapter 3: Body Language & Psychology",
        items: ["Bahasa Tubuh & Psikologi Negosiasi"],
      },
      {
        title: "Chapter 4: Simulation",
        items: ["Simulasi Negosiasi"],
      },
    ],
    faqs: [
      {
        q: "Apakah ada role play?",
        a: "Ya, terdapat simulasi role play yang bisa Anda ikuti.",
      },
      {
        q: "Apakah materi ini relevan untuk dunia kerja?",
        a: "Sangat relevan, terutama untuk profesional dan wirausahawan.",
      },
    ],
  },
  {
    slug: "career-management",
    title: "Career Management for Talents",
    instructor: "Dian Sastrowardoyo",
    price: "189.000 IDR",
    description:
      "Belajar cara mengelola karier Anda dengan strategi jangka panjang yang terarah dan berkelanjutan.",
    content: [
      "Dian Sastrowardoyo adalah seorang aktris dan entrepreneur yang berhasil membangun karier berkelanjutan di dunia hiburan dan bisnis.",
      "Dalam kelas ini, Dian akan membimbing Anda menentukan tujuan karier, membangun skill set yang relevan, serta memanfaatkan networking dan mentorship.",
      "Selain itu, Anda akan belajar bagaimana menjaga keseimbangan hidup agar karier tetap berjalan tanpa mengorbankan kesehatan mental.",
      "Kelas ini sangat cocok untuk fresh graduate maupun profesional yang ingin merencanakan karier jangka panjang.",
    ],
    curriculum: [
      {
        title: "Chapter 1: Career Goals",
        items: ["Menentukan Tujuan Karier"],
      },
      {
        title: "Chapter 2: Skill Building",
        items: ["Membangun Skill Set yang Tepat"],
      },
      {
        title: "Chapter 3: Networking & Mentorship",
        items: ["Networking & Mentorship"],
      },
      {
        title: "Chapter 4: Work-Life Balance",
        items: ["Mencapai Work-Life Balance"],
      },
    ],
    faqs: [
      {
        q: "Apakah cocok untuk fresh graduate?",
        a: "Ya, sangat cocok untuk mereka yang baru memulai karier.",
      },
      {
        q: "Apakah ada panduan praktis?",
        a: "Tentu, terdapat action plan yang bisa langsung diaplikasikan.",
      },
    ],
  },
];
