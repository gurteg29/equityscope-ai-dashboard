export type DataStatus = 'live' | 'demo' | 'delayed' | 'unavailable';

export type CompanyRecord = {
  id: string;
  symbol: string;
  companyName: string;
  exchange: string;
  sector: string;
  industry: string;
  description: string;
  businessModel: string;
  products: string[];
  revenueSources: string[];
  competitors: string[];
  majorRisks: string[];
  marketOverview: MarketOverview;
  financialSummary: FinancialSummary;
  technicalSummary: TechnicalSummary;
  riskItems: RiskItem[];
  valuation: ValuationSummary;
  report: ReportPayload;
};

export type MarketOverview = {
  price: number | null;
  changePercent: number | null;
  marketCap: number | null;
  volume: number | null;
  week52Range: [number | null, number | null];
  timestamp: string | null;
  status: DataStatus;
  source: string;
  note: string;
};

export type FinancialSummary = {
  year: number;
  revenue: number | null;
  grossProfitMargin: number | null;
  operatingMargin: number | null;
  netMargin: number | null;
  eps: number | null;
  operatingCashFlow: number | null;
  freeCashFlow: number | null;
  totalDebt: number | null;
  cash: number | null;
  debtToEquity: number | null;
  roic: number | null;
  sharesOutstanding: number | null;
  revenueGrowth3Y: number | null;
  revenueGrowth5Y: number | null;
  source: string;
  reportingDate: string;
  status: DataStatus;
};

export type TechnicalSummary = {
  priceSeries: Array<{ date: string; close: number; volume: number }>;
  sma50: number | null;
  sma200: number | null;
  rsi: number | null;
  macd: number | null;
  signal: number | null;
  historicalVolatility: number | null;
  support: number | null;
  resistance: number | null;
  source: string;
  status: DataStatus;
};

export type RiskItem = {
  category: string;
  title: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  evidence: string;
  source: string;
  reportingDate: string;
  verified: boolean;
};

export type ValuationSummary = {
  pe: number | null;
  ps: number | null;
  evEbitda: number | null;
  fcfYield: number | null;
  intrinsicValueBase: number | null;
  intrinsicValueBear: number | null;
  intrinsicValueBull: number | null;
  assumptions: {
    revenueGrowth: number;
    operatingMargin: number;
    discountRate: number;
    terminalGrowth: number;
    forecastPeriod: number;
  };
  source: string;
  status: DataStatus;
};

export type ReportPayload = {
  title: string;
  executiveSummary: string;
  companyOverview: string;
  financialPerformance: string;
  growthAnalysis: string;
  technicalAnalysis: string;
  valuationAnalysis: string;
  bullScenario: string;
  baseScenario: string;
  bearScenario: string;
  keyRisks: string[];
  competitorComparison: string;
  dataLimitations: string[];
  outstandingQuestions: string[];
  conclusion: string;
  generationDate: string;
};

export type ApiEnvelope<T> = {
  data: T | null;
  status: 'success' | 'error' | 'demo';
  message: string;
  source?: string;
  retrievedAt?: string;
};

export type ScreenerFilterState = {
  revenueGrowthAbove: number | null;
  positiveFreeCashFlow: boolean;
  positiveEarnings: boolean;
  debtToEquityBelow: number | null;
  priceAbove50Day: boolean;
  priceAbove200Day: boolean;
  rsiRange: [number, number] | null;
  valuationMultipleBelow: number | null;
  marketCapMin: number | null;
  industries: string[];
  exchanges: string[];
};
