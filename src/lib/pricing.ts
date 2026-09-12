/**
 * Tamizh Tech Robotics Company — Pricing Helper
 * 
 * Safety rules:
 * - Only verified product pricing from the central product data model may be rendered.
 * - Non-product offerings (courses, events, competitions, services, solutions, projects)
 *   do not have finalized public pricing and must never render numeric prices or fake zero prices.
 * - Never renders ₹0, ₹undefined, ₹NaN, ₹null, or "From ₹0".
 */

export interface PriceableProduct {
  price?: number | null;
  sellingPrice?: number | null;
  regularPrice?: number | null;
  mrp?: number | null;
  priceUnit?: string | null;
  configurations?: Array<{
    id?: string;
    name?: string;
    price: number;
    regularPrice?: number | null;
    mrp?: number | null;
    isDefault?: boolean;
  }> | null;
}

/**
 * Validates whether a price is a genuine, positive numeric price.
 */
export function hasVerifiedPrice(price?: number | null): price is number {
  return typeof price === 'number' && !isNaN(price) && price > 0;
}

/**
 * Product Data Admin Safety Validator (Section 8)
 * Ensures:
 * - sellingPrice > 0 (strictly positive numeric, reject NaN, null, undefined, <= 0)
 * - if regularPrice is present:
 *     - regularPrice > 0
 *     - regularPrice > sellingPrice (reject if sellingPrice >= regularPrice for a discount)
 * - if mrp is present:
 *     - mrp > 0
 *     - mrp >= sellingPrice
 */
export function validateProductPricing(product: PriceableProduct): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const selling = hasVerifiedPrice(product.sellingPrice)
    ? product.sellingPrice
    : hasVerifiedPrice(product.price)
    ? product.price
    : null;

  if (selling === null) {
    errors.push('Selling price is missing, zero, negative, NaN, or non-numeric.');
  }

  if (product.regularPrice !== undefined && product.regularPrice !== null) {
    if (!hasVerifiedPrice(product.regularPrice)) {
      errors.push(`regularPrice must be a positive number, received: ${product.regularPrice}`);
    } else if (selling !== null && product.regularPrice <= selling) {
      errors.push(
        `regularPrice (₹${product.regularPrice}) must be strictly greater than sellingPrice (₹${selling}) for a sale discount.`
      );
    }
  }

  if (product.mrp !== undefined && product.mrp !== null) {
    if (!hasVerifiedPrice(product.mrp)) {
      errors.push(`mrp must be a positive number, received: ${product.mrp}`);
    } else if (selling !== null && product.mrp < selling) {
      errors.push(`sellingPrice (₹${selling}) cannot legally exceed MRP (₹${product.mrp}).`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Calculates discount percentage strictly when regularPrice > sellingPrice.
 * Formula: ((regularPrice - sellingPrice) / regularPrice) * 100 rounded to nearest integer.
 * Returns null if regularPrice <= sellingPrice or either price is unverified.
 */
export function calculateDiscountPercentage(
  regularPrice?: number | null,
  sellingPrice?: number | null
): number | null {
  if (
    !hasVerifiedPrice(regularPrice) ||
    !hasVerifiedPrice(sellingPrice) ||
    regularPrice <= sellingPrice
  ) {
    return null;
  }
  const discount = Math.round(((regularPrice - sellingPrice) / regularPrice) * 100);
  return discount > 0 ? discount : null;
}

/**
 * Formats a verified product price into standard Indian currency format (e.g., "₹3,800").
 * Returns null if the price is invalid, missing, zero, or negative.
 */
export function formatProductPrice(price?: number | null, unit?: string | null): string | null {
  if (!hasVerifiedPrice(price)) {
    return null;
  }
  const formatted = `₹${price.toLocaleString('en-IN')}`;
  return unit ? `${formatted} ${unit}` : formatted;
}

/**
 * Formats a product configuration range (e.g., "₹7,999 – ₹20,999") or single configuration price.
 * Returns null if configurations are empty or have invalid prices.
 */
export function formatConfigurationPriceRange(
  configurations?: Array<{ price: number }> | null
): string | null {
  if (!configurations || configurations.length === 0) {
    return null;
  }

  const validPrices = configurations
    .map((c) => c.price)
    .filter(hasVerifiedPrice);

  if (validPrices.length === 0) {
    return null;
  }

  const min = Math.min(...validPrices);
  const max = Math.max(...validPrices);

  if (min === max) {
    return `₹${min.toLocaleString('en-IN')}`;
  }

  return `₹${min.toLocaleString('en-IN')} – ₹${max.toLocaleString('en-IN')}`;
}

/**
 * Gets the effective price display for a product, taking configurations and verified regular prices into account.
 */
export function getProductPriceDisplay(product: PriceableProduct): {
  hasPrice: boolean;
  displayPrice: string | null;
  sellingPrice: number | null;
  regularPrice: number | null;
  displayRegularPrice: string | null;
  discountPercentage: number | null;
  label: string;
} {
  const activeSellingPrice = hasVerifiedPrice(product.sellingPrice)
    ? product.sellingPrice
    : hasVerifiedPrice(product.price)
    ? product.price
    : null;

  const verifiedRegular = hasVerifiedPrice(product.regularPrice) ? product.regularPrice : null;
  const discount = calculateDiscountPercentage(verifiedRegular, activeSellingPrice);

  if (product.configurations && product.configurations.length > 0) {
    const range = formatConfigurationPriceRange(product.configurations);
    if (range) {
      return {
        hasPrice: true,
        displayPrice: range,
        sellingPrice: activeSellingPrice,
        regularPrice: verifiedRegular,
        displayRegularPrice: formatProductPrice(verifiedRegular),
        discountPercentage: discount,
        label: 'Configurations',
      };
    }
  }

  if (hasVerifiedPrice(activeSellingPrice)) {
    return {
      hasPrice: true,
      displayPrice: formatProductPrice(activeSellingPrice, product.priceUnit),
      sellingPrice: activeSellingPrice,
      regularPrice: verifiedRegular,
      displayRegularPrice: formatProductPrice(verifiedRegular),
      discountPercentage: discount,
      label: 'Catalogue Price',
    };
  }

  return {
    hasPrice: false,
    displayPrice: null,
    sellingPrice: null,
    regularPrice: null,
    displayRegularPrice: null,
    discountPercentage: null,
    label: 'On Enquiry',
  };
}
