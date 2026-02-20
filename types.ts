
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
  date?: string;
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
  category: string;
}

export interface Section {
  id: string;
  title: string;
  icon?: string;
}

export interface OutcomeSubItem {
  title: string;
  description: string;
}

export interface OutcomeCategory {
  title: string;
  items: OutcomeSubItem[];
}

export interface MicroLesson {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  tag: string;
}
