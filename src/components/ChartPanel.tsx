import type { ReactNode } from 'react';

type MetricCardProps = {
  label: string;
  value: string;
  change?: string;
  tone?: 'positive' | 'negative' | 'neutral';
  subtitle?: string;
  children?: ReactNode;
};

export const MetricCard = ({ label, value, change, tone = 'neutral', subtitle, children }: MetricCardProps) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <span>{label}</span>
        {change ? <span className={`trend ${tone}`}>{change}</span> : null}
      </div>
      <div className="metric-value">{value}</div>
      {subtitle ? <div className="metric-subtitle">{subtitle}</div> : null}
      {children}
    </div>
  );
};
