/**
 * Centralized Routing Helpers for Tamizh Tech Robotics Platform
 * Follows the canonical hierarchical pattern:
 * /{contentType}/{categorySlug}/{slug}
 */

// ── Products ──────────────────────────────────────────────────────────────────
export function getProductCategoryUrl(categorySlug: string): string {
  return `/products/${categorySlug}`;
}

export function getProductUrl(categorySlug: string, slug: string): string {
  return `/products/${categorySlug}/${slug}`;
}

// ── Courses ───────────────────────────────────────────────────────────────────
export function getCourseCategoryUrl(categorySlug: string): string {
  return `/courses/${categorySlug}`;
}

export function getCourseUrl(categorySlug: string, slug: string): string {
  return `/courses/${categorySlug}/${slug}`;
}

// ── Blog ──────────────────────────────────────────────────────────────────────
export function getBlogCategoryUrl(categorySlug: string): string {
  return `/blog/${categorySlug}`;
}

export function getBlogUrl(categorySlug: string, slug: string): string {
  return `/blog/${categorySlug}/${slug}`;
}

// ── Projects ──────────────────────────────────────────────────────────────────
export function getProjectCategoryUrl(categorySlug: string): string {
  return `/projects/${categorySlug}`;
}

export function getProjectUrl(categorySlug: string, slug: string): string {
  return `/projects/${categorySlug}/${slug}`;
}

// ── Events ────────────────────────────────────────────────────────────────────
export function getEventCategoryUrl(categorySlug: string): string {
  return `/events/${categorySlug}`;
}

export function getEventUrl(categorySlug: string, slug: string): string {
  return `/events/${categorySlug}/${slug}`;
}

// ── Careers (Architecture for public open jobs) ────────────────────────────────
export function getCareerCategoryUrl(categorySlug: string): string {
  return `/careers/${categorySlug}`;
}

export function getCareerUrl(categorySlug: string, slug: string): string {
  return `/careers/${categorySlug}/${slug}`;
}

// ── Newsletters (Architecture for public newsletters) ─────────────────────────
export function getNewsletterCategoryUrl(categorySlug: string): string {
  return `/newsletters/${categorySlug}`;
}

export function getNewsletterUrl(categorySlug: string, slug: string): string {
  return `/newsletters/${categorySlug}/${slug}`;
}
