import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/company/MSFT', label: 'Company Analysis' },
  { path: '/screener', label: 'Stock Screener' },
  { path: '/watchlist', label: 'Watchlist' },
  { path: '/report', label: 'Report' },
];

export const Layout = () => {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">E</div>
          <div>
            <div className="brand-name">EquityScope AI</div>
            <div className="brand-subtitle">Company Intelligence</div>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="status-panel">
          <div className="status-label">Data status</div>
          <div className="status-pill demo">Demo mode</div>
          <p>Live backend attribution is required before production use.</p>
        </div>
      </aside>

      <main className="content-shell">
        <header className="topbar">
          <div className="search-wrap">
            <input type="text" placeholder="Search by company or ticker..." aria-label="Search company" />
            <button type="button">Analyze Company</button>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
};
