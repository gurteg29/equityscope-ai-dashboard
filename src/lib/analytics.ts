export const formatCurrency = (value: number | null | undefined, digits = 0): string => {
  if (value === null || value === undefined) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
};

export const formatPercentage = (value: number | null | undefined, digits = 1): string => {
  if (value === null || value === undefined) return 'N/A';
  return `${value.toFixed(digits)}%`;
};

export const formatCompactNumber = (value: number | null | undefined): string => {
  if (value === null || value === undefined) return 'N/A';
  return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
};

export const formatLargeNumber = (value: number | null | undefined): string => {
  if (value === null || value === undefined) return 'N/A';
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);
};

export const formatDate = (value: string | null | undefined): string => {
  if (!value) return 'N/A';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const formatNull = <T>(value: T | null | undefined, fallback = 'Not available'): string =>
  value === null || value === undefined ? fallback : String(value);
