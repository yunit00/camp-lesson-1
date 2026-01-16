
export interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
  link?: string;
  category: 'registration' | 'tools' | 'workspace';
}

export interface Tool {
  name: string;
  purpose: string;
  when: string;
  link: string;
}

export interface CourseDay {
  day: string;
  topic: string;
  format: string;
  details: string;
  week: number;
}

export interface ProjectExample {
  title: string;
  features: string[];
  why: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Section {
  id: string;
  title: string;
  icon?: string;
}
