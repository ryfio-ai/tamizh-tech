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
  priceUnit?: string | null;
  configurations?: Array<{
    id?: string;
    name?: string;
    price: number;
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
 * Gets the effective price display for a product, taking configurations into account.
 */
export function getProductPriceDisplay(product: PriceableProduct): {
  hasPrice: boolean;
  displayPrice: string | null;
  label: string;
} {
  if (product.configurations && product.configurations.length > 0) {
    const range = formatConfigurationPriceRange(product.configurations);
    if (range) {
      return {
        hasPrice: true,
        displayPrice: range,
        label: 'Configurations',
      };
    }
  }

  if (hasVerifiedPrice(product.price)) {
    return {
      hasPrice: true,
      displayPrice: formatProductPrice(product.price, product.priceUnit),
      label: 'Catalogue Price',
    };
  }

  return {
    hasPrice: false,
    displayPrice: null,
    label: 'On Enquiry',
  };
}
