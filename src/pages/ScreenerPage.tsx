import { useParams } from 'react-router-dom';
import { sampleCompanies } from '../data/demoData';
import { ChartPanel } from '../components/ChartPanel';
import { formatCurrency, formatDate, formatPercentage } from '../lib/formatters';

export const CompanyDetailPage = () => {
  const { ticker } = useParams();
  const company = sampleCompanies.find((item) => item.symbol.toLowerCase() === (ticker ?? '').toLowerCase()) ?? sampleCompanies[0];

  return (
    <div className="page-stack">
      <section className="section-header company-header">
        <div>
          <p className="eyebrow">Company analysis</p>
          <h1>{company.companyName}</h1>
        </div>
        <div className="company-pills">
          <span>{company.symbol}</span>
          <span>{company.exchange}</span>
          <span>{company.sector}</span>
        </div>
      </section>

      <div className="tab-nav">
        <button className="tab active">Overview</button>
        <button className="tab">Financials</button>
        <button className="tab">Technical</button>
        <button className="tab">Valuation</button>
        <button className="tab">Risk</button>
        <button className="tab">Report</button>
      </div>

      <section className="two-column-layout">
        <div className="panel-card">
          <h3>Company overview</h3>
          <p>{company.description}</p>
          <div className="info-grid">
            <div><span>Business model</span><strong>{company.businessModel}</strong></div>
            <div><span>Industry</span><strong>{company.industry}</strong></div>
            <div><span>Products</span><strong>{company.products.join(', ')}</strong></div>
            <div><span>Revenue sources</span><strong>{company.revenueSources.join(', ')}</strong></div>
          </div>
        </div>

        <div className="panel-card">
          <h3>Market overview</h3>
          <div className="stat-list">
            <div><span>Price</span><strong>{company.marketOverview.price ? formatCurrency(company.marketOverview.price) : 'N/A'}</strong></div>
            <div><span>Change</span><strong className={company.marketOverview.changePercent !== null && company.marketOverview.changePercent >= 0 ? 'positive' : 'negative'}>{company.marketOverview.changePercent !== null ? formatPercentage(company.marketOverview.changePercent) : 'N/A'}</strong></div>
            <div><span>Market cap</span><strong>{company.marketOverview.marketCap ? formatCurrency(company.marketOverview.marketCap, 0) : 'N/A'}</strong></div>
            <div><span>Data source</span><strong>{company.marketOverview.source}</strong></div>
            <div><span>Timestamp</span><strong>{company.marketOverview.timestamp ? formatDate(company.marketOverview.timestamp) : 'N/A'}</strong></div>
          </div>
        </div>
      </section>

      <section className="two-column-layout">
        <ChartPanel data={company.technicalSummary.priceSeries} title="Price history" />
        <div className="panel-card">
          <h3>Financial snapshot</h3>
          <div className="stat-list">
            <div><span>Revenue</span><strong>{company.financialSummary.revenue ? formatCurrency(company.financialSummary.revenue, 0) : 'N/A'}</strong></div>
            <div><span>Gross margin</span><strong>{company.financialSummary.grossProfitMargin !== null ? formatPercentage(company.financialSummary.grossProfitMargin) : 'N/A'}</strong></div>
            <div><span>Operating margin</span><strong>{company.financialSummary.operatingMargin !== null ? formatPercentage(company.financialSummary.operatingMargin) : 'N/A'}</strong></div>
            <div><span>Net margin</span><strong>{company.financialSummary.netMargin !== null ? formatPercentage(company.financialSummary.netMargin) : 'N/A'}</strong></div>
            <div><span>Fcf</span><strong>{company.financialSummary.freeCashFlow ? formatCurrency(company.financialSummary.freeCashFlow, 0) : 'N/A'}</strong></div>
            <div><span>Debt / equity</span><strong>{company.financialSummary.debtToEquity !== null ? company.financialSummary.debtToEquity.toFixed(2) : 'N/A'}</strong></div>
          </div>
        </div>
      </section>
    </div>
  );
};
