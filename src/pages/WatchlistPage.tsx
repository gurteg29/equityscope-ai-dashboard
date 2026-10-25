import { sampleCompanies } from '../data/demoData';
import { formatCurrency, formatPercentage } from '../lib/formatters';

const companies = sampleCompanies;

export const ScreenerPage = () => {
  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <p className="eyebrow">Stock screener</p>
          <h1>Filter companies</h1>
        </div>
        <button type="button" className="primary-button">Run Scan</button>
      </section>

      <div className="filter-panel">
        <div className="filter-grid">
          <label><span>Revenue growth above</span><input type="number" value={10} readOnly /></label>
          <label><span>Debt-to-equity below</span><input type="number" value={1.2} readOnly /></label>
          <label><span>Min market cap</span><input type="number" value={500000000} readOnly /></label>
          <label><span>RSI range</span><input type="text" value="40-70" readOnly /></label>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Company</th>
              <th>Market cap</th>
              <th>Revenue growth</th>
              <th>Profitability</th>
              <th>FCF</th>
              <th>Valuation</th>
              <th>RSI</th>
              <th>Data fresh</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.symbol}>
                <td>{company.symbol}</td>
                <td>{company.companyName}</td>
                <td>{company.marketOverview.marketCap ? formatCurrency(company.marketOverview.marketCap, 0) : 'N/A'}</td>
                <td>{company.financialSummary.revenueGrowth3Y !== null ? formatPercentage(company.financialSummary.revenueGrowth3Y) : 'N/A'}</td>
                <td>{company.financialSummary.netMargin !== null ? formatPercentage(company.financialSummary.netMargin) : 'N/A'}</td>
                <td>{company.financialSummary.freeCashFlow ? formatCurrency(company.financialSummary.freeCashFlow, 0) : 'N/A'}</td>
                <td>{company.valuation.pe ? `${company.valuation.pe}x P/E` : 'N/A'}</td>
                <td>{company.technicalSummary.rsi !== null ? formatPercentage(company.technicalSummary.rsi) : 'N/A'}</td>
                <td>{company.financialSummary.status === 'demo' ? 'Demo data' : company.financialSummary.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
