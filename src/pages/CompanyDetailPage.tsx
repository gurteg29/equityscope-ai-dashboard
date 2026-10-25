import { sampleCompanies } from '../data/demoData';
import { MetricCard } from '../components/MetricCard';
import { formatCurrency, formatPercentage } from '../lib/formatters';
import { ChartPanel } from '../components/ChartPanel';

const primary = sampleCompanies[0];

export const DashboardPage = () => {
  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <p className="eyebrow">Research dashboard</p>
          <h1>EquityScope AI</h1>
        </div>
        <div className="badge-row">
          <span className="info-badge">Demo research data</span>
        </div>
      </section>

      <section className="top-grid">
        <MetricCard
          label="Last price"
          value={primary.marketOverview.price ? formatCurrency(primary.marketOverview.price) : 'N/A'}
          change={primary.marketOverview.changePercent ? formatPercentage(primary.marketOverview.changePercent) : 'N/A'}
          tone={primary.marketOverview.changePercent && primary.marketOverview.changePercent >= 0 ? 'positive' : 'negative'}
          subtitle={primary.marketOverview.timestamp ? `Updated ${new Date(primary.marketOverview.timestamp).toLocaleString()}` : 'Market timestamp unavailable'}
        />
        <MetricCard label="Market cap" value={primary.marketOverview.marketCap ? formatCurrency(primary.marketOverview.marketCap, 0) : 'N/A'} subtitle="As reported in the market overview" />
        <MetricCard label="Volume" value={primary.marketOverview.volume ? primary.marketOverview.volume.toLocaleString() : 'N/A'} subtitle="Shares traded in last session" />
        <MetricCard label="52W range" value={primary.marketOverview.week52Range[0] && primary.marketOverview.week52Range[1] ? `${formatCurrency(primary.marketOverview.week52Range[0])} - ${formatCurrency(primary.marketOverview.week52Range[1])}` : 'N/A'} subtitle="High / low range" />
      </section>

      <section className="two-column-layout">
        <ChartPanel data={primary.technicalSummary.priceSeries} title="Price trend" />
        <div className="panel-stack">
          <div className="panel-card">
            <h3>Research summary</h3>
            <div className="summary-grid">
              <div className="summary-item"><span>Financial health</span><strong>Strong</strong></div>
              <div className="summary-item"><span>Business growth</span><strong>Above average</strong></div>
              <div className="summary-item"><span>Technical momentum</span><strong>Positive</strong></div>
              <div className="summary-item"><span>Valuation</span><strong>Moderate</strong></div>
              <div className="summary-item"><span>Risk exposure</span><strong>Medium</strong></div>
              <div className="summary-item"><span>Data quality</span><strong>Demo-only</strong></div>
            </div>
          </div>
          <div className="panel-card">
            <h3>Company search</h3>
            <ul className="simple-list">
              {sampleCompanies.map((company) => (
                <li key={company.symbol}>
                  <strong>{company.symbol}</strong> — {company.companyName}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
