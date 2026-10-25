import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

type ChartPanelProps = {
  data: Array<{ date: string; close: number; volume: number }>;
  title: string;
  type?: 'line' | 'area' | 'bar';
};

export const ChartPanel = ({ data, title, type = 'line' }: ChartPanelProps) => {
  const content =
    type === 'area' ? (
      <AreaChart data={data}>
        <defs>
          <linearGradient id="fillColor" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.7} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="close" stroke="#60a5fa" fill="url(#fillColor)" />
      </AreaChart>
    ) : type === 'bar' ? (
      <BarChart data={data}>
        <XAxis dataKey="date" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Bar dataKey="volume" fill="#2dd4bf" radius={[4, 4, 0, 0]} />
      </BarChart>
    ) : (
      <LineChart data={data}>
        <XAxis dataKey="date" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="close" stroke="#38bdf8" strokeWidth={2} dot={false} />
      </LineChart>
    );

  return (
    <div className="chart-panel">
      <div className="panel-header">
        <h3>{title}</h3>
      </div>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={260}>
          {content}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
