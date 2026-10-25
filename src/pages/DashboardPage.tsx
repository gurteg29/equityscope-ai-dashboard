import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { CompanyDetailPage } from './pages/CompanyDetailPage';
import { ScreenerPage } from './pages/ScreenerPage';
import { WatchlistPage } from './pages/WatchlistPage';
import { ReportPage } from './pages/ReportPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/company/:ticker" element={<CompanyDetailPage />} />
        <Route path="/screener" element={<ScreenerPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Route>
    </Routes>
  );
}

export default App;
