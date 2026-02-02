import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  images: string[];
  video?: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}