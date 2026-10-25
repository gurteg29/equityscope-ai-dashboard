export const safeNumber = (value: number | null | undefined): number | null => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null;
  }
  return value;
};

export const computeRevenueGrowth = (values: Array<number | null | undefined>): number | null => {
  const clean = values.filter((v): v is number => safeNumber(v) !== null);
  if (clean.length < 2) return null;
  const start = clean[0];
  const end = clean[clean.length - 1];
  if (start === 0) return null;
  return ((end - start) / start) * 100;
};

export const computeGrossMargin = (grossProfit: number | null | undefined, revenue: number | null | undefined): number | null => {
  if (grossProfit === null || grossProfit === undefined || revenue === null || revenue === undefined || revenue === 0) {
    return null;
  }
  return (grossProfit / revenue) * 100;
};

export const computeOperatingMargin = (operatingIncome: number | null | undefined, revenue: number | null | undefined): number | null => {
  if (operatingIncome === null || operatingIncome === undefined || revenue === null || revenue === undefined || revenue === 0) {
    return null;
  }
  return (operatingIncome / revenue) * 100;
};

export const computeNetMargin = (netIncome: number | null | undefined, revenue: number | null | undefined): number | null => {
  if (netIncome === null || netIncome === undefined || revenue === null || revenue === undefined || revenue === 0) {
    return null;
  }
  return (netIncome / revenue) * 100;
};

export const calculateSMA = (prices: number[], period: number): number[] => {
  if (!prices.length) return [];
  const output: number[] = [];
  for (let i = 0; i < prices.length; i += 1) {
    const start = Math.max(0, i - period + 1);
    const slice = prices.slice(start, i + 1);
    const avg = slice.reduce((total, value) => total + value, 0) / slice.length;
    output.push(avg);
  }
  return output;
};

export const calculateRSI = (prices: number[], period = 14): number => {
  if (prices.length <= period) return 50;
  let gains = 0;
  let losses = 0;
  for (let i = 1; i <= period; i += 1) {
    const delta = prices[prices.length - i] - prices[prices.length - i - 1];
    if (delta >= 0) gains += delta;
    else losses += Math.abs(delta);
  }
  const avgGain = gains / period;
  const avgLoss = losses / period;
  if (avgLoss === 0) return 100;
  const relativeStrength = avgGain / avgLoss;
  return 100 - 100 / (1 + relativeStrength);
};

export const calculateMACD = (prices: number[], fast = 12, slow = 26, signal = 9): { macd: number; signal: number } => {
  if (prices.length < slow) {
    return { macd: 0, signal: 0 };
  }
  const emaFast = prices.slice(-fast).reduce((total, value) => total + value, 0) / fast;
  const emaSlow = prices.slice(-slow).reduce((total, value) => total + value, 0) / slow;
  const macd = emaFast - emaSlow;
  const signalLine = macd / signal;
  return { macd, signal: signalLine };
};

export const buildValuationScenarios = (
  price: number | null,
  revenue: number | null,
  margin: number | null,
  discountRate: number,
  terminalGrowth: number,
  forecastPeriod: number,
): { bear: number | null; base: number | null; bull: number | null } => {
  if (price === null || revenue === null || margin === null) {
    return { bear: null, base: null, bull: null };
  }

  const revenueBase = revenue * (1 + 0.08);
  const marginBase = margin;
  const base = price * (1 + (revenueBase / revenue) * 0.12 - discountRate / 100 + terminalGrowth / 100);
  const bear = base * 0.82;
  const bull = base * 1.18;

  return {
    bear: Number.isFinite(bear) ? bear : null,
    base: Number.isFinite(base) ? base : null,
    bull: Number.isFinite(bull) ? bull : null,
  };
};
