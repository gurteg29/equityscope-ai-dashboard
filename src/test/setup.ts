import { sampleCompanies } from '../data/demoData';

const company = sampleCompanies[0];

export const ReportPage = () => (
  <div className="page-stack">
    <section className="section-header">
      <div>
        <p className="eyebrow">Research report</p>
        <h1>{company.report.title}</h1>
      </div>
      <div className="button-row">
        <button className="secondary-button" type="button">Export PDF</button>
        <button className="primary-button" type="button">Export CSV</button>
      </div>
    </section>

    <div className="report-body">
      <section className="report-section"><h2>1. Executive summary</h2><p>{company.report.executiveSummary}</p></section>
      <section className="report-section"><h2>2. Company overview</h2><p>{company.report.companyOverview}</p></section>
      <section className="report-section"><h2>3. Financial performance</h2><p>{company.report.financialPerformance}</p></section>
      <section className="report-section"><h2>4. Growth analysis</h2><p>{company.report.growthAnalysis}</p></section>
      <section className="report-section"><h2>5. Technical analysis</h2><p>{company.report.technicalAnalysis}</p></section>
      <section className="report-section"><h2>6. Valuation analysis</h2><p>{company.report.valuationAnalysis}</p></section>
      <section className="report-section"><h2>7. Bull / base / bear scenarios</h2><p>{company.report.bullScenario}</p><p>{company.report.baseScenario}</p><p>{company.report.bearScenario}</p></section>
      <section className="report-section"><h2>8. Key risks</h2><ul>{company.report.keyRisks.map((risk) => <li key={risk}>{risk}</li>)}</ul></section>
      <section className="report-section"><h2>9. Competitor comparison</h2><p>{company.report.competitorComparison}</p></section>
      <section className="report-section"><h2>10. Data limitations</h2><ul>{company.report.dataLimitations.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="report-section"><h2>11. Outstanding questions</h2><ul>{company.report.outstandingQuestions.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="report-section"><h2>12. Conclusion</h2><p>{company.report.conclusion}</p></section>
    </div>
  </div>
);
