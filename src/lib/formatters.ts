import type { ApiEnvelope, CompanyRecord, ScreenerFilterState } from '../types';

const defaultBase = 'http://localhost:8000';
const apiBase = (import.meta.env.VITE_API_BASE_URL as string | undefined) || defaultBase;

const request = async <T>(endpoint: string, options?: RequestInit): Promise<ApiEnvelope<T>> => {
  try {
    const res = await fetch(`${apiBase}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    if (!res.ok) {
      return {
        data: null,
        status: 'error',
        message: `API request failed for ${endpoint}: ${res.statusText}`,
      };
    }

    const json = await res.json();
    return {
      data: json.data as T,
      status: json.status ?? 'success',
      message: json.message ?? 'Request completed.',
      source: json.source,
      retrievedAt: json.retrievedAt,
    };
  } catch (error) {
    return {
      data: null,
      status: 'error',
      message: error instanceof Error ? error.message : 'Unable to connect to the backend API.',
    };
  }
};

export const apiClient = {
  async getCompany(ticker: string): Promise<ApiEnvelope<CompanyRecord>> {
    return request<CompanyRecord>(`/api/company/${ticker}`);
  },
  async getFinancials(ticker: string): Promise<ApiEnvelope<CompanyRecord['financialSummary']>> {
    return request<CompanyRecord['financialSummary']>(`/api/company/${ticker}/financials`);
  },
  async getPrices(ticker: string): Promise<ApiEnvelope<CompanyRecord['technicalSummary']['priceSeries']>> {
    return request<CompanyRecord['technicalSummary']['priceSeries']>(`/api/company/${ticker}/prices`);
  },
  async getTechnicals(ticker: string): Promise<ApiEnvelope<CompanyRecord['technicalSummary']>> {
    return request<CompanyRecord['technicalSummary']>(`/api/company/${ticker}/technicals`);
  },
  async getValuation(ticker: string): Promise<ApiEnvelope<CompanyRecord['valuation']>> {
    return request<CompanyRecord['valuation']>(`/api/company/${ticker}/valuation`);
  },
  async getRisks(ticker: string): Promise<ApiEnvelope<CompanyRecord['riskItems']>> {
    return request<CompanyRecord['riskItems']>(`/api/company/${ticker}/risks`);
  },
  async runScreener(filters: ScreenerFilterState): Promise<ApiEnvelope<CompanyRecord[]>> {
    return request<CompanyRecord[]>(`/api/screener`, {
      method: 'POST',
      body: JSON.stringify(filters),
    });
  },
  async createReport(payload: Record<string, unknown>): Promise<ApiEnvelope<Record<string, unknown>>> {
    return request<Record<string, unknown>>('/api/reports', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};

export const backendStatus = {
  apiBase,
  isConfigured: Boolean(import.meta.env.VITE_API_BASE_URL),
};
