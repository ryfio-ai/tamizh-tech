export interface Newsletter {
  id: string;
  slug: string;
  categorySlug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  published: boolean;
}

// Only verified, public newsletters should be published here.
// Private email lists, drafts, and campaigns must never be exposed.
export const newsletters: Newsletter[] = [];

export function getNewsletterByCategoryAndSlug(categorySlug: string, slug: string): Newsletter | undefined {
  return newsletters.find(
    (n) => n.categorySlug === categorySlug && n.slug === slug && n.published
  );
}

export function getNewslettersByCategory(categorySlug: string): Newsletter[] {
  return newsletters.filter((n) => n.categorySlug === categorySlug && n.published);
}
