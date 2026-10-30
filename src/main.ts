import './style.css'

type Project = {
  id: string
  title: string
  accent: string
  tag: string
  label: string
  subtitle: string
  initials: string
  link?: string
  useGithubIcon?: boolean
}

const projects: Project[] = [
  {
    id: 'github',
    title: 'GitHub',
    accent: '#f0f6fc',
    tag: 'Profile',
    label: 'GitHub',
    subtitle: 'Visit my GitHub profile to see projects, code samples, and ongoing work.',
    initials: 'GH',
    link: 'https://github.com/tinge5',
    useGithubIcon: true,
  },
  {
    id: 'halo',
    title: 'HALO INFINITE',
    accent: '#7ec9ff',
    tag: 'Featured',
    label: 'My project',
    subtitle: 'A bold experience built around immersive storytelling and polished interaction design.',
    initials: 'HI',
  },
  {
    id: 'forza',
    title: 'FORZA',
    accent: '#f4c042',
    tag: 'Racing',
    label: 'Project',
    subtitle: 'Performance-first design concept powered by motion, clarity, and rhythm.',
    initials: 'F4',
  },
  {
    id: 'ori',
    title: 'ORI',
    accent: '#5ff0d8',
    tag: 'Adventure',
    label: 'Project',
    subtitle: 'A playful world-building concept focused on atmosphere, flow, and feeling.',
    initials: 'OR',
  },
  {
    id: 'cyberpunk',
    title: 'CYBERPUNK',
    accent: '#ffde59',
    tag: 'Sci-fi',
    label: 'Project',
    subtitle: 'An elevated interface concept blending futuristic style with readable product UX.',
    initials: 'CP',
  },
  {
    id: 'assassins',
    title: 'ASSASSIN\'S',
    accent: '#d7d9ef',
    tag: 'Action',
    label: 'Project',
    subtitle: 'Narrative-driven interface work built to feel premium, cinematic, and immersive.',
    initials: 'AC',
  },
  {
    id: 'destiny',
    title: 'DESTINY',
    accent: '#7cc7ff',
    tag: 'Space',
    label: 'Project',
    subtitle: 'Interface exploration centered on exploration, progression, and strong visual hierarchy.',
    initials: 'D2',
  },
]

const app = document.querySelector<HTMLDivElement>('#app')!

function renderProjectGrid(activeId: string) {
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0]

  const projectCards = projects
    .map((project) => {
      const coverContent = project.useGithubIcon
        ? `
          <svg class="github-mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M8 0C3.58 0 0 3.58 0 8a8.013 8.013 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.533 7.533 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
          </svg>
        `
        : `<span class="game-cover-inner">${project.initials}</span>`

      return `
        <button
          type="button"
          class="game-card ${project.id === activeProject.id ? 'is-active' : ''}"
          data-project-id="${project.id}"
          data-project-link="${project.link ?? ''}"
          aria-pressed="${project.id === activeProject.id}"
          style="--tile-accent: ${project.accent};"
        >
          <span class="game-cover" aria-hidden="true">
            ${coverContent}
          </span>
          <span class="game-title">${project.title}</span>
        </button>
      `
    })
    .join('')

  app.innerHTML = `
    <div class="xbox-home">
      <header class="topbar">
        <div class="gamer-card">
          <div class="avatar-wrap">
            <div class="avatar">T</div>
          </div>
          <div class="gamer-info">
            <div class="gamer-name-row">
              <span class="gamer-label">Turner Inge</span>
              <span class="ultimate-badge">ULTIMATE</span>
            </div>
            <div class="gamer-id-row">
              <span class="status-dot"></span>
              <span class="gamer-tag">tinge5</span>
            </div>
          </div>
        </div>

        <div class="system-status">
          <span class="icon">◔</span>
          <span class="time">4:56 PM</span>
        </div>
      </header>

      <main class="content">
        <section class="featured-row">
          <article class="feature-cover" style="--cover-accent: ${activeProject.accent};">
            <div class="cover-title-block">
              <div class="cover-title">${activeProject.title}</div>
            </div>
          </article>

          <div class="carousel-strip">
            ${projectCards}
          </div>
        </section>

        <section class="bottom-row">
          <article class="mini-card library-card">
            <div class="mini-icon">▣</div>
            <div class="mini-title">My games &amp; apps</div>
          </article>

          <article class="mini-card highlight-card">
            <div class="highlight-header">
              <span class="small-badge">2 friends playing</span>
            </div>
            <div class="highlight-title">${activeProject.title}</div>
          </article>

          <article class="mini-card pass-card">
            <div class="pass-header">
              <span class="pass-logo">◉</span>
              <span>GAME PASS</span>
            </div>
            <div class="mini-title">Play Gears 5 now</div>
          </article>

          <article class="mini-card controller-card">
            <div class="controller-copy">
              <div class="controller-title">ELITE SERIES 2</div>
              <p>The world’s most advanced controller</p>
            </div>
            <div class="controller-figure"></div>
          </article>
        </section>
      </main>
    </div>
  `

  const projectButtons = app.querySelectorAll<HTMLButtonElement>('.game-card')
  projectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedId = button.dataset.projectId ?? projects[0].id
      renderProjectGrid(selectedId)

      const link = button.dataset.projectLink
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer')
      }
    })
  })
}

renderProjectGrid('github')
