// Nav.jsx — vietz.dev navigation (accurate to real site)
// Active link: { page } with curly braces in IBM Plex Mono
// Inactive: regular sans, spaced

const Nav = ({ dark, onToggleDark, onNavigate, currentPage }) => {
  const links = [
    { label: 'home', page: 'home' },
    { label: 'projects', page: 'projects' },
    { label: 'blog', page: 'blog' },
    { label: 'cv', page: 'cv' },
  ];
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '0 48px',
      background: 'var(--bg)',
      transition: 'background 0.3s',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 56,
      }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(({ label, page }) => {
            const isActive = currentPage === page;
            return (
              <button key={page} onClick={() => onNavigate(page)} style={{
                fontFamily: isActive ? 'IBM Plex Mono, monospace' : 'IBM Plex Sans, sans-serif',
                fontWeight: isActive ? 700 : 400,
                fontSize: 15,
                letterSpacing: isActive ? 0 : '0.01em',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                color: 'var(--fg)', whiteSpace: 'nowrap',
              }}>
                {isActive ? `{ ${label} }` : label}
              </button>
            );
          })}
        </nav>
        <button
          onClick={onToggleDark}
          title={dark ? 'Light mode' : 'Dark mode'}
          style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '1px solid var(--border-strong)',
            background: 'var(--bg-card)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--fg)',
          }}
        >
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </div>
    </header>
  );
};

Object.assign(window, { Nav });
