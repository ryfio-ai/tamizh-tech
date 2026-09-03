export interface CareerJob {
  id: string;
  slug: string;
  categorySlug: string;
  title: string;
  location: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  status: 'open' | 'closed';
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// Only verified, public, open jobs should be published here.
// When new open job roles are published by Tamizh Tech, they are added here.
export const careers: CareerJob[] = [];

export function getCareerByCategoryAndSlug(categorySlug: string, slug: string): CareerJob | undefined {
  return careers.find(
    (c) => c.categorySlug === categorySlug && c.slug === slug && c.published && c.status === 'open'
  );
}

export function getCareersByCategory(categorySlug: string): CareerJob[] {
  return careers.filter((c) => c.categorySlug === categorySlug && c.published && c.status === 'open');
}
