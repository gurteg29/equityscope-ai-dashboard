import { sampleCompanies } from '../data/demoData';

export const WatchlistPage = () => {
  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <p className="eyebrow">Watchlist</p>
          <h1>Saved companies</h1>
        </div>
      </section>

      <div className="comparison-grid">
        {sampleCompanies.map((company) => (
          <div className="panel-card" key={company.symbol}>
            <h3>{company.symbol}</h3>
            <p>{company.companyName}</p>
            <ul className="small-list">
              <li>Revenue growth: {company.financialSummary.revenueGrowth3Y !== null ? `${company.financialSummary.revenueGrowth3Y}%` : 'N/A'}</li>
              <li>Profitability: {company.financialSummary.netMargin !== null ? `${company.financialSummary.netMargin}%` : 'N/A'}</li>
              <li>Debt to equity: {company.financialSummary.debtToEquity !== null ? company.financialSummary.debtToEquity.toFixed(2) : 'N/A'}</li>
              <li>Momentum: {company.technicalSummary.rsi !== null ? `${company.technicalSummary.rsi.toFixed(1)}` : 'N/A'}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
