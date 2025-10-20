/**
 * Formats a price/number by removing trailing zeros and limiting decimal places
 */
export const formatPrice = (value: number, maxDecimals: number = 5): string => {
  if (value === 0) return '0';

  // Convert to string with max decimals
  const fixed = value.toFixed(maxDecimals);

  // Remove trailing zeros and decimal point if needed
  return fixed.replace(/\.?0+$/, '');
};