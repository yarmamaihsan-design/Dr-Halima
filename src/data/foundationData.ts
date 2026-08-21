import { ProgramItem, ImpactStat, MediaItem, VideoItem, NewsItem, DonationOption } from '../types';

// Import founder images so bundler resolves asset URLs
import heroImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/1000033744.jpg';
import aboutImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/1000033743.jpg';
import impactImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/1000033740.jpg';
import closingImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/1000033742.jpg';

// Import real Media Gallery & initiative images
import centeredHalimaImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/centerd_halima.jpg';
import abujaDinnerImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/abuja_dinner.jpg';
import ramadanSupportImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/Ramadan_support.jpg';
import empowermentImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/150_empowerment.jpg';
import vvfDonationImg from '../NANA HALIMA EMPOWERMENT INITIATIVE/VVF_donation.jpg';
import inCircle1Img from '../NANA HALIMA EMPOWERMENT INITIATIVE/in_circle_1.jpg';
import inCircle2Img from '../NANA HALIMA EMPOWERMENT INITIATIVE/in_circle_2.jpg';
import inCircle3Img from '../NANA HALIMA EMPOWERMENT INITIATIVE/in_circle_3.jpg';

export const FOUNDER_INFO = {
  name: "Her Excellency Dr. Ambassador Halima Sulaiman Zakari",
  title: "Jigawa Central Philanthropist",
  organization: "Nana Halima Empowerment Initiative",
  shortName: "Dr. Amb. Halima S. Zakari",
  quote: "My passion is to see every child in Jigawa go to school, every youth gain a skill, and every family live with dignity.",
  bio: "Dr. Halima is a renowned Philanthropist, Humanitarian and Advocate for Youth Development in Jigawa Central. Through the Nana Halima Empowerment Initiative, she has dedicated her life to supporting education, youth skills and women economic empowerment.",
  phone: "09032356601",
  email: "nanahalimaempowerorg@gmail.com",
  location: "Dutse, Jigawa State, Nigeria",
  virtualConnect: "Birnin Kudu virtual connect",
  developer: "Kowaguru Technology Limited"
};

// 4 Official Images of Her Excellency Dr. Halima Sulaiman Zakari
export const FOUNDER_IMAGES = {
  // Image 1 - Hero
  hero: heroImg,

  // Image 2 - About
  about: aboutImg,

  // Image 3 - Impact Story
  impact: impactImg,

  // Image 4 - Closing / Founder Quote
  closing: closingImg
};

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "teachers",
    value: 350,
    suffix: "+",
    label: "Teachers Trained",
    description: "Equipped with essential computer literacy, MS Office & modern AI pedagogical tools."
  },
  {
    id: "lgas",
    value: 14,
    suffix: "",
    label: "LGAs Reached",
    description: "Grassroots outreach expanding across local government areas in Jigawa State."
  },
  {
    id: "youths",
    value: 5000,
    suffix: "+",
    label: "Youths Empowered",
    description: "Direct beneficiaries of sports initiatives, digital skills, and vocational grants."
  },
  {
    id: "invested",
    value: 57,
    prefix: "₦",
    suffix: "M+",
    label: "Invested",
    description: "Capital mobilized for classroom renovations, relief packages, and youth enterprise."
  }
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "prog-1",
    title: "DR. HALIMA TEACHERS DIGITAL SKILLS EMPOWERMENT PROGRAM",
    subtitle: "5-Day Intensive Training + 25-Day Mentorship",
    details: "Equipping 350 primary and secondary school educators across Jigawa with practical computer operations, Microsoft Office suite proficiency, and practical AI tools for modern lesson delivery.",
    category: "Education & Tech",
    impactMetrics: "350+ Educators • 14 LGAs",
    imageUrl: centeredHalimaImg,
    featured: true
  },
  {
    id: "prog-2",
    title: "DR. HALIMA OLYMPIC COMPETITION 2026",
    subtitle: "Athletics & Sports Development Beyond Football",
    details: "A multi-discipline track and field tournament designed to discover raw athletic talent, engage young boys and girls, and build disciplined pathways to international athletic careers.",
    category: "Youth & Sports",
    impactMetrics: "7 LGAs • 14 Top Athletes Selected",
    imageUrl: aboutImg,
    featured: true
  },
  {
    id: "prog-3",
    title: "YOUTH & WOMEN EMPOWERMENT",
    subtitle: "Micro Grants, Vocational Skills & Enterprise Training",
    details: "Hands-on vocational workshops providing women and young adults with tailoring machines, commercial soap making equipment, digital marketing toolkits, and micro-SME startup capital.",
    category: "Economic Growth",
    impactMetrics: "1,200+ Beneficiaries Supported",
    imageUrl: empowermentImg,
    featured: false
  },
  {
    id: "prog-4",
    title: "HEALTHCARE & HUMANITARIAN AID",
    subtitle: "Medical Outreaches, Food Distribution & Support",
    details: "Direct humanitarian interventions providing free health screenings, essential medications, monthly staple food baskets for widows, and support funds for orphans.",
    category: "Humanitarian",
    impactMetrics: "2,500+ Medical Kits & Relief Packs",
    imageUrl: vvfDonationImg,
    featured: false
  },
  {
    id: "prog-5",
    title: "EDUCATION SUPPORT & REHABILITATION",
    subtitle: "Scholarships, Materials & Classroom Refurbishment",
    details: "Sponsoring vulnerable students with tuition fee waivers, exercise books, uniforms, and rehabilitating dilapidated classroom structures to facilitate safe learning spaces.",
    category: "Education",
    impactMetrics: "15 Schools Renovated • 800+ Scholarships",
    imageUrl: ramadanSupportImg,
    featured: false
  }
];

/**
 * Media Gallery
 * Real initiatives & events photographs
 */
export const MEDIA_GALLERY_DATA: MediaItem[] = [
  {
    id: "media-1",
    title: "Dr. Halima Addressing Jigawa Educator Forum",
    category: "Teacher Training",
    imageUrl: centeredHalimaImg,
    caption: "Her Excellency Dr. Amb. Halima S. Zakari at the opening ceremony of the Teachers Digital Skills Workshop.",
    date: "2026"
  },
  {
    id: "media-2",
    title: "Grassroots Track & Field Athletics Meet",
    category: "Athletics",
    imageUrl: aboutImg,
    caption: "Young athletes and participants gathering for preliminary sports trials.",
    date: "2026"
  },
  {
    id: "media-3",
    title: "Dr. Halima Engagement with Community Elders",
    category: "Community",
    imageUrl: abujaDinnerImg,
    caption: "Consultations with community leaders and stakeholders.",
    date: "2026"
  },
  {
    id: "media-4",
    title: "Distribution of Micro-Enterprise Toolkits",
    category: "Empowerment",
    imageUrl: empowermentImg,
    caption: "Empowerment beneficiaries receiving vocational certifications and enterprise starter toolkits.",
    date: "2026"
  },
  {
    id: "media-5",
    title: "Dr. Halima Humanitarian Aid Event",
    category: "Donations",
    imageUrl: vvfDonationImg,
    caption: "Direct presentation of relief items and medical aid support to patients and families.",
    date: "2026"
  },
  {
    id: "media-6",
    title: "Official Foundation Address by Dr. Halima",
    category: "Community",
    imageUrl: ramadanSupportImg,
    caption: "Dr. Halima addressing the community during the flagship relief distribution ceremony.",
    date: "2026"
  },
  {
    id: "media-7",
    title: "Emergency Food Relief Package Distribution",
    category: "Donations",
    imageUrl: inCircle1Img,
    caption: "Distribution of essential food aid hampers to vulnerable households across Jigawa.",
    date: "2026"
  },
  {
    id: "media-8",
    title: "Community Welfare & Staple Provisions Staging",
    category: "Donations",
    imageUrl: inCircle2Img,
    caption: "Rice, provisions, and staple food supplies staged for grassroots distribution.",
    date: "2026"
  },
  {
    id: "media-9",
    title: "Nutritional Support & Essential Goods Outreaches",
    category: "Donations",
    imageUrl: inCircle3Img,
    caption: "Wholesome food grains and semolina supplies mobilized for community relief.",
    date: "2026"
  }
];

export const VIDEO_GALLERY_DATA: VideoItem[] = [
  {
    id: "vid-1",
    title: "Dr. Halima Olympic Competition Highlights 2026",
    description: "Watch the thrilling moments from the 7 LGAs athletics competition discovering young sports talent.",
    duration: "4:15",
    thumbnailUrl: aboutImg,
    category: "Sports"
  },
  {
    id: "vid-2",
    title: "Teachers Digital Skills Training — Birnin Kudu",
    description: "Documentary footage of 350 educators gaining hands-on computer and AI literacy.",
    duration: "6:30",
    thumbnailUrl: centeredHalimaImg,
    category: "Education"
  },
  {
    id: "vid-3",
    title: "Dr. Halima's Message to Jigawa Youth",
    description: "An inspiring address by Her Excellency on youth self-reliance, moral leadership, and continuous learning.",
    duration: "3:45",
    thumbnailUrl: closingImg,
    category: "Speeches"
  }
];

export const NEWS_EVENTS_DATA: NewsItem[] = [
  {
    id: "news-1",
    title: "DR. HALIMA TEACHERS DIGITAL SKILLS PROGRAM — LGA 2",
    date: "[Insert Date]",
    venue: "[Insert Venue]",
    status: "APPLICATIONS OPEN",
    category: "Upcoming Program",
    summary: "The second cohort of the flagship digital literacy initiative is now enrolling teachers across Jigawa schools.",
    fullContent: "The Nana Halima Empowerment Initiative announces the opening of applications for the LGA 2 Teachers Digital Skills Program. The intensive 5-day workshop covers Microsoft Office, modern pedagogical AI tools and practical classroom activities.",
    imageUrl: centeredHalimaImg,
    isFeatured: true
  },
  {
    id: "news-2",
    title: "Registration Opens for Dr. Halima Olympic Competition 2026",
    date: "[Insert Date]",
    venue: "[Insert Venue]",
    status: "UPCOMING",
    category: "Sports Initiative",
    summary: "Youth athletes across 7 local governments are invited to register for preliminary track trials.",
    fullContent: "Organized under the patronage of Her Excellency Dr. Amb. Halima Sulaiman Zakari, this sports event aims to foster athletic excellence and nurture future stars.",
    imageUrl: aboutImg,
    isFeatured: false
  },
  {
    id: "news-3",
    title: "Empowerment Grant Distribution to Women Groups in Dutse",
    date: "[Insert Date]",
    venue: "Dutse Municipal Center, Jigawa State",
    status: "COMPLETED",
    category: "Humanitarian",
    summary: "Over 200 women entrepreneurs received business startup packages and micro seed grants.",
    fullContent: "Dr. Halima personally oversaw the handover of seed funding, soap-making vats, and sewing equipment to women co-operatives.",
    imageUrl: empowermentImg,
    isFeatured: false
  }
];

export const JIGAWA_LGAS: string[] = [
  "Auyo",
  "Babura",
  "Biriniwa",
  "Birnin Kudu",
  "Buji",
  "Dutse",
  "Gagarawa",
  "Garki",
  "Gumel",
  "Guri",
  "Gwaram",
  "Gwiwa",
  "Hadejia",
  "Jahun",
  "Kafin Hausa",
  "Kazaure",
  "Kiri Kasamma",
  "Kiyawa",
  "Maigatari",
  "Malam Madori",
  "Miga",
  "Ringim",
  "Roni",
  "Sule Tankarkar",
  "Taura",
  "Yankwashi",
  "Other"
];

export const DONATION_AMOUNTS: DonationOption[] = [
  {
    amount: 5000,
    label: "₦5,000",
    impactNote: "Provides exercise books & stationery for 5 students"
  },
  {
    amount: 10000,
    label: "₦10,000",
    impactNote: "Funds a food relief hamper for one vulnerable family"
  },
  {
    amount: 25000,
    label: "₦25,000",
    impactNote: "Sponsors a youth for one week of digital skills training"
  },
  {
    amount: 50000,
    label: "₦50,000",
    impactNote: "Covers startup toolkit for one woman entrepreneur"
  },
  {
    amount: 100000,
    label: "₦100,000",
    impactNote: "Funds a complete teacher digital empowerment session"
  },
  {
    amount: 500000,
    label: "₦500,000",
    impactNote: "Sponsors an entire LGA grassroots outreach program"
  }
];