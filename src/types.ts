export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  details: string;
  category: string;
  impactMetrics: string;
  imageUrl: string;
  featured?: boolean;
}

export interface ImpactStat {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: 'Athletics' | 'Teacher Training' | 'Donations' | 'Empowerment' | 'Community';
  imageUrl: string;
  caption: string;
  date?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnailUrl: string;
  youtubeId?: string;
  category: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  venue: string;
  status: 'APPLICATIONS OPEN' | 'UPCOMING' | 'COMPLETED';
  category: string;
  summary: string;
  fullContent?: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface ApplicationFormData {
  fullName: string;
  phone: string;
  email: string;
  lga: string;
  program: string;
  cvFileName?: string;
  statement: string;
}

export interface DonationOption {
  amount: number;
  label: string;
  impactNote: string;
}
