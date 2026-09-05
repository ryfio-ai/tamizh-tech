export type ProjectType = "topic" | "completed";

export interface Project {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  name: string;
  projectType: ProjectType;

  badge?: string;

  shortDescription: string;
  description: string;

  objective?: string;
  problem?: string;
  concept?: string;

  whyThisProject?: {
    heading: string;
    points: string[];
  };

  architectureModules?: string[];

  technologies: string[];
  hardware?: string[];
  software?: string[];

  applications: string[];

  engineeringConsiderations?: string[];

  images?: string[];
  videos?: string[];

  coverImage?: string;

  relatedServices?: string[];
  relatedProducts?: string[];
  relatedCourses?: string[];

  faqs?: {
    question: string;
    answer: string;
  }[];

  verifiedEvidence?: {
    clientType?: string;
    deliverables?: string[];
  };

  published: boolean;
  indexable: boolean;

  createdAt: string;
  updatedAt: string;
}
