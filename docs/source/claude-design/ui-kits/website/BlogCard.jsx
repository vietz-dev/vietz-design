// BlogCard.jsx — blog card + shared Tag component

const Tag = ({ children, accent, outlined }) => {
  // outlined = accent border, no fill (used on projects/cv)
  // accent = filled accent-bg
  // default = dark filled
  if (outlined) return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: 11, letterSpacing: '0.04em',
      borderRadius: 3, padding: '3px 8px',
      background: 'transparent',
      color: 'var(--accent)',
      border: '1px solid var(--accent)',
      lineHeight: 1,
    }}>{children}</span>
  );
  if (accent) return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: 11, letterSpacing: '0.04em',
      borderRadius: 3, padding: '3px 8px',
      background: 'var(--accent-bg)',
      color: 'var(--accent)',
      border: '1px solid var(--accent)',
      lineHeight: 1,
    }}>{children}</span>
  );
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: 11, letterSpacing: '0.04em',
      borderRadius: 3, padding: '3px 8px',
      background: 'var(--tag-bg)', color: 'var(--tag-fg)',
      lineHeight: 1,
    }}>{children}</span>
  );
};

const BlogCard = ({ post, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={() => onClick && onClick(post)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1.5px solid var(--border-strong)',
        borderRadius: 10, padding: '20px 24px',
        background: 'var(--bg-card)', cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.18s, box-shadow 0.18s',
        transform: hovered && onClick ? 'translate(-3px,-3px)' : 'none',
        boxShadow: hovered && onClick ? 'var(--shadow-hover-strong)' : 'none',
      }}
    >
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, color: 'var(--fg-faint)', marginBottom: 8 }}>
        {post.date}
      </div>
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em', color: 'var(--fg)', marginBottom: 10 }}>
        {post.title}
      </div>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, lineHeight: 1.65, color: 'var(--fg-muted)', marginBottom: 14 }}>
        {post.description}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {post.tags.map(t => <Tag key={t} outlined>{t}</Tag>)}
      </div>
    </div>
  );
};

Object.assign(window, { BlogCard, Tag });
