// Screens.jsx — all page screens matching real vietz.dev design

// ── DATA ────────────────────────────────────────────────────
const POSTS = [
  {
    id: 1,
    title: 'Golang Reverse Proxy',
    date: 'Jan 2026',
    description: 'Ever wondered how a reverse proxy like traefik handles incoming requests? Build a minimal one from scratch.',
    tags: ['golang', 'reverse_proxy', 'traefik'],
    readTime: '8 min read',
    content: [
      { type: 'h2', text: 'Mini Traefik' },
      { type: 'p', text: 'A reverse proxy sits between the client and the server it wants to reach. Instead of the client talking directly to the backend service, all requests go through the proxy first.' },
      { type: 'code', text: 'client -> proxy -> service' },
      { type: 'h3', text: 'What even is a reverse proxy?' },
      { type: 'p', text: 'Okay I try to keep it simple. For a more detailed explanation take a look at Cloudflare\'s definition or Traefik\'s documentation.' },
      { type: 'code', text: `type Route struct {\n    Upstream string\n    Prefix   string\n    Timeout  time.Duration\n}` },
      { type: 'h3', text: 'Implementation' },
      { type: 'p', text: 'We implement ServeHTTP because we want the RProxy to act as a HandlerFunc to be able to handle incoming http requests.' },
      { type: 'code', text: `func (rp *RProxy) ServeHTTP(w http.ResponseWriter, r *http.Request) {\n    route, err := rp.findRoute(r.URL)\n    if err != nil {\n        http.Error(w, "Route not registered", http.StatusNotFound)\n        return\n    }\n    if err := rp.proxyRequest(r.Context(), route, w, r); err != nil {\n        http.Error(w, err.Error(), http.StatusBadGateway)\n    }\n}` },
      { type: 'h3', text: 'Limitations' },
      { type: 'p', text: 'So can I use this in production now? Hell no! This implementation only scratches the surface of what sophisticated reverse proxies like traefik are doing.' },
    ],
  },
  {
    id: 2,
    title: 'Building with ARK-UI',
    date: 'Mar 2026',
    description: 'ARK-UI gives you framework-agnostic headless components. Here\'s how I use it to build consistent interfaces.',
    tags: ['typescript', 'react', 'ark-ui'],
    readTime: '5 min read',
    content: [
      { type: 'h2', text: 'Why ARK-UI' },
      { type: 'p', text: 'ARK-UI provides headless, accessible components that work across React, Solid, and Vue. You bring the styles — it brings the behavior.' },
      { type: 'code', text: `import { Dialog } from '@ark-ui/react'\n\nexport const MyDialog = () => (\n  <Dialog.Root>\n    <Dialog.Trigger>Open</Dialog.Trigger>\n    <Dialog.Content>Hello!</Dialog.Content>\n  </Dialog.Root>\n)` },
    ],
  },
];

const PROJECTS = [
  {
    id: 1, title: 'WorkTime',
    tags: ['Go', 'React', 'TypeScript'],
    year: '2025',
    desc: 'A tool collection centered around time management for work.',
    url: '#',
  },
  {
    id: 2, title: 'health-checker',
    tags: ['Go'],
    year: '2024',
    desc: 'Concurrent health checker using worker pools. Checks many endpoints in parallel.',
    url: 'https://github.com/vietz-dev/health-checker',
  },
  {
    id: 3, title: 'stitch',
    tags: ['Go', 'REST'],
    year: '2024',
    desc: 'A tile-stitch implementation in Go including a REST API.',
    url: 'https://github.com/vietz-dev/stitch',
  },
];

const CV_EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Atruvia AG',
    period: 'Mar 2025 — Present',
    bullets: [
      'Developing backend microservices for financial software infrastructure.',
      'Building frontend interfaces for internal tooling and form management workflows.',
    ],
  },
  {
    role: 'Fullstack Software Developer',
    company: 'CTS Eventim Solutions GmbH',
    period: '2018 — 2025',
    bullets: [
      'Contributed to architectural design and implementation decisions alongside senior architects.',
      'Built microservices for digital ticketing and third-party integrations.',
      'Developed an internal toolchain for managing and configuring OpenAPI specifications.',
      'Designed an abstraction layer for multi-provider SMS delivery.',
      'Contributed Angular components to an in-house design system.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'WebAix',
    period: '2016 — 2018',
    bullets: [
      'Delivered custom web solutions tailored to client requirements.',
      'Analyzed and interpreted tracking reports.',
    ],
  },
];

const CV_SKILLS = [
  { label: 'Languages', tags: ['TypeScript', 'JavaScript', 'Go', 'Java', 'Kotlin', 'Dart', 'Groovy', 'HTML', '(S)CSS'] },
  { label: 'Frameworks', tags: ['React', 'Next.js', 'Angular', 'SvelteKit', 'Spring Boot', 'Flutter', 'Tailwind CSS'] },
  { label: 'Tools', tags: ['Docker', 'Kubernetes', 'Git', 'PostgreSQL', 'MongoDB', 'Keycloak', 'Figma', 'CI/CD'] },
];

// ── SHARED ───────────────────────────────────────────────────
const CONTAINER = { maxWidth: 700, margin: '0 auto', padding: '64px 48px 96px' };

const CodeBlock = ({ text }) => (
  <pre style={{
    background: 'var(--code-bg)', color: 'var(--code-fg)',
    fontFamily: 'IBM Plex Mono, monospace', fontSize: 13,
    lineHeight: 1.65, padding: '18px 22px', borderRadius: 8,
    overflowX: 'auto', margin: '0 0 24px', whiteSpace: 'pre',
  }}><code>{text}</code></pre>
);

const renderContent = (blocks) => blocks.map((b, i) => {
  if (b.type === 'h2') return (
    <h2 key={i} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--fg)', margin: '32px 0 12px' }}>{b.text}</h2>
  );
  if (b.type === 'h3') return (
    <h3 key={i} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 17, fontWeight: 600, color: 'var(--fg)', margin: '28px 0 10px' }}>{b.text}</h3>
  );
  if (b.type === 'code') return <CodeBlock key={i} text={b.text} />;
  return (
    <p key={i} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'var(--fg-muted)', margin: '0 0 20px' }}>{b.text}</p>
  );
});

// ── HOME ─────────────────────────────────────────────────────
const HomeScreen = ({ onNavigate }) => (
  <div style={CONTAINER}>
    {/* Dictionary hero */}
    <div style={{ borderLeft: '4px solid var(--fg)', paddingLeft: 28, marginBottom: 64 }}>
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 88, lineHeight: 1, color: 'var(--fg)', marginBottom: 16 }}>
        Moin
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 14, color: 'var(--fg-muted)', fontStyle: 'italic' }}>/mɔyn/</span>
        <Tag>{`INTERJECTION`}</Tag>
        <Tag accent>Low German</Tag>
      </div>
      <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { def: 'Greeting used throughout the day in northern Germany — morning, noon, and night.', ex: '"Moin! How\'s your day going?"' },
          { def: 'A word that stuck — moved from Bremen, kept the greeting.', ex: '"Moin everyone, let\'s get started."' },
        ].map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 16 }}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 14, color: 'var(--fg-faint)', minWidth: 20, paddingTop: 1 }}>{i+1}.</span>
            <div>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, color: 'var(--fg)', lineHeight: 1.6, marginBottom: 4 }}>{item.def}</div>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'var(--fg-muted)', fontStyle: 'italic' }}>{item.ex}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>

    <hr style={{ border: 0, borderTop: '1px solid var(--border)', marginBottom: 48 }} />

    {/* Bio */}
    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 18, color: 'var(--fg)', marginBottom: 24, lineHeight: 1.5 }}>
      Moin! I am <strong>Justin Vietz</strong>, a full-stack developer by ❤️
    </div>
    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'var(--fg-muted)', maxWidth: 620 }}>
      <p style={{ margin: '0 0 16px' }}>
        I build things for the web — from frontend interfaces that feel right, to backend systems that stay out of the way. Currently based in <strong style={{ color: 'var(--fg)' }}>Münster, Germany</strong>.
      </p>
      <p style={{ margin: '0 0 16px' }}>
        Full stack, end to end — TypeScript, Go, React, Angular, Svelte, and whatever infrastructure it takes to ship and keep it running. The framework is a means to an end. What I actually care about is maintainable code, reproducible infrastructure, and staying curious.
      </p>
      <p style={{ margin: 0 }}>
        On this site you'll find my{' '}
        <button onClick={() => onNavigate('projects')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', color: 'var(--fg)', textDecoration: 'underline', textUnderlineOffset: 3 }}>projects</button>
        {' '}and a{' '}
        <button onClick={() => onNavigate('blog')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', color: 'var(--fg)', textDecoration: 'underline', textUnderlineOffset: 3 }}>blog</button>
        {' '}where I write about what I'm building and thinking about.
      </p>
    </div>
  </div>
);

// ── PROJECTS ─────────────────────────────────────────────────
const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1.5px solid var(--border-strong)', borderRadius: 12,
        padding: '20px 28px', background: 'var(--bg-card)',
        transition: 'transform 0.18s, box-shadow 0.18s',
        transform: hovered ? 'translate(-3px,-3px)' : 'none',
        boxShadow: hovered ? 'var(--shadow-hover-strong)' : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 16, color: 'var(--fg)' }}>
            {project.title}
          </span>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {project.tags.map(t => <Tag key={t} outlined>{t}</Tag>)}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0, marginLeft: 16 }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, color: 'var(--fg-muted)' }}>{project.year}</span>
          <a href={project.url} target="_blank" rel="noopener" onClick={e => e.stopPropagation()} style={{
            fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 13,
            color: 'var(--fg)', textDecoration: 'none', whiteSpace: 'nowrap',
          }}>Open →</a>
        </div>
      </div>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
        {project.desc}
      </div>
    </div>
  );
};

const ProjectsScreen = () => (
  <div style={CONTAINER}>
    <h1 style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 56, letterSpacing: '-0.02em', color: 'var(--fg)', margin: '0 0 48px' }}>projects</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  </div>
);

// ── BLOG ─────────────────────────────────────────────────────
const BlogScreen = ({ onNavigate }) => (
  <div style={CONTAINER}>
    <h1 style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 56, letterSpacing: '-0.02em', color: 'var(--fg)', margin: '0 0 48px' }}>blog</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {POSTS.map(p => <BlogCard key={p.id} post={p} onClick={() => onNavigate('post', p)} />)}
    </div>
  </div>
);

// ── POST ─────────────────────────────────────────────────────
const PostScreen = ({ post, onBack }) => (
  <div style={CONTAINER}>
    <button onClick={onBack} style={{
      display: 'flex', alignItems: 'center', gap: 8,
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 13,
      color: 'var(--fg-muted)', background: 'none', border: 'none',
      cursor: 'pointer', padding: 0, marginBottom: 40,
    }}>
      ← back to blog
    </button>
    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, color: 'var(--fg-faint)', marginBottom: 12 }}>
      {post.date}
    </div>
    <h1 style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 48, letterSpacing: '-0.02em', color: 'var(--fg)', margin: '0 0 40px', lineHeight: 1.1 }}>
      {post.title}
    </h1>
    <div>{renderContent(post.content)}</div>
  </div>
);

// ── CV ───────────────────────────────────────────────────────
const CVScreen = () => (
  <div style={CONTAINER}>
    <h1 style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 56, letterSpacing: '-0.02em', color: 'var(--fg)', margin: '0 0 56px' }}>cv</h1>

    {/* Experience */}
    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.1em', color: 'var(--fg-faint)', marginBottom: 28 }}>EXPERIENCE</div>
    <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 28, marginBottom: 64 }}>
      {CV_EXPERIENCE.map((exp, i) => (
        <div key={i} style={{ position: 'relative', marginBottom: i < CV_EXPERIENCE.length - 1 ? 48 : 0 }}>
          {/* Timeline dot */}
          <div style={{
            position: 'absolute', left: -36, top: 4,
            width: 14, height: 14, borderRadius: '50%',
            border: '2px solid var(--accent)', background: 'var(--bg)',
          }} />
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: 16, color: 'var(--fg)', marginBottom: 8 }}>
            {exp.role}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <Tag outlined>{exp.company}</Tag>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, color: 'var(--fg-faint)' }}>{exp.period}</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {exp.bullets.map((b, j) => (
              <li key={j} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, display: 'flex', gap: 10 }}>
                <span style={{ color: 'var(--fg-faint)', flexShrink: 0 }}>–</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Skills */}
    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: '0.1em', color: 'var(--fg-faint)', marginBottom: 28 }}>SKILLS</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {CV_SKILLS.map(({ label, tags }) => (
        <div key={label} style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, color: 'var(--fg-muted)', minWidth: 100, paddingTop: 4 }}>{label}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {tags.map(t => <Tag key={t} outlined>{t}</Tag>)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── FOOTER ───────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--border)', padding: '20px 48px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--fg-faint)' }}>© 2026 Justin Vietz</span>
      <div style={{ display: 'flex', gap: 20 }}>
        {[{ label: 'GitHub', href: 'https://github.com/vietz-dev' }, { label: 'LinkedIn', href: '#' }].map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--fg-muted)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{label}</a>
        ))}
      </div>
    </div>
  </footer>
);

Object.assign(window, { HomeScreen, BlogScreen, PostScreen, ProjectsScreen, CVScreen, Footer, POSTS, PROJECTS });
