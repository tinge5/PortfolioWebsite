import './style.css'

type Project = {
  id: string
  title: string
  accent: string
  tag: string
  label: string
  subtitle: string
  initials: string
}

const projects: Project[] = [
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
    .map(
      (project) => `
        <button
          type="button"
          class="game-card ${project.id === activeProject.id ? 'is-active' : ''}"
          data-project-id="${project.id}"
          aria-pressed="${project.id === activeProject.id}"
          style="--tile-accent: ${project.accent};"
        >
          <span class="game-cover" aria-hidden="true">
            <span class="game-cover-inner">${project.initials}</span>
          </span>
          <span class="game-title">${project.title}</span>
        </button>
      `,
    )
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
    button.addEventListener('click', () => renderProjectGrid(button.dataset.projectId ?? projects[0].id))
  })
}

renderProjectGrid('halo')
