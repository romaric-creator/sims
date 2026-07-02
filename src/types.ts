export interface Department {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  route: string;
  icon: string;
  accentColor: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface Course {
  id: string;
  language: "french" | "english" | "german";
  title: string;
  exam: string;
  levels: string[];
  duration: string;
  description: string;
  benefits: string[];
}

export interface Permit {
  id: string;
  category: "A" | "B" | "C";
  title: string;
  description: string;
  duration: string;
  requirements: string[];
}

export interface Destination {
  id: string;
  country: string;
  flag: string;
  type: "studies" | "work";
  processingTime: string;
  description: string;
  programs: Program[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
}

export interface Trade {
  id: string;
  title: string;
  icon: string;
  description: string;
  modules: string[];
}

export interface AcademyLevel {
  id: string;
  level: number;
  title: string;
  duration: string;
  color: string;
  prerequisites: string;
  outcomes: string[];
  certification: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  department: string;
  text: string;
  avatar?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  department: string;
  caption?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  subject: string;
  message: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai" | "system";
  text: string;
  timestamp: string;
}
