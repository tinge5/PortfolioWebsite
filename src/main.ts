import './style.css'
import workoutsLogo from './assets/workoutslogo.png'
import slicesLogo from './assets/sliceslogo.png'
import turnerProfile from './assets/turner-profile-alt.png'
import turnerProfileAlt from './assets/turner-profile.png'

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
  useLinkedInIcon?: boolean
  iconSrc?: string
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
    id: 'linkedin',
    title: 'LinkedIn',
    accent: '#0a66c2',
    tag: 'Professional',
    label: 'LinkedIn',
    subtitle: 'Connect with me on LinkedIn to learn more about my background, work, and professional interests.',
    initials: 'LI',
    link: 'https://www.linkedin.com/in/turner-inge-8b45a4369/',
    useLinkedInIcon: true,
  },
  {
    id: 'slices',
    title: 'SLICES',
    accent: '#ff9a3d',
    tag: 'Daily Game',
    label: 'Daily challenge',
    subtitle: 'A fast-paced daily challenge game built around quick mini-games like trivia, memory, math, and reaction tests for a fresh streak every day.',
    initials: 'SL',
    link: 'https://slicesgame.netlify.app/',
    iconSrc: slicesLogo,
  },
  {
    id: 'workouts2',
    title: 'Workouts 2.0',
    accent: '#ff7b39',
    tag: 'Fitness App',
    label: 'Workout tracking',
    subtitle: 'A fitness and training app for planning workouts, tracking progress, and staying consistent with personal goals.',
    initials: 'W2',
    link: 'https://workouts2-0.onrender.com/',
    iconSrc: workoutsLogo,
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
        : project.useLinkedInIcon
          ? `
            <svg class="linkedin-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
              <rect x="0" y="0" width="64" height="64" rx="14" fill="#0A66C2"/>
              <path d="M16 24.8h8.2v22.4H16zm4.1-8.8c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7zm9.5 8.8h7.9v3.1h.1c1.1-2.1 3.8-4.3 7.8-4.3 8.4 0 9.9 5.5 9.9 12.7v12.9h-8.2V35.6c0-3.1-.1-7.1-4.3-7.1-4.3 0-5 3.4-5 6.8v10.9h-8.2V24.8z" fill="#ffffff"/>
            </svg>
          `
          : project.iconSrc
            ? `<img class="game-cover-image" src="${project.iconSrc}" alt="${project.title} icon" />`
            : `<span class="game-cover-inner">${project.initials}</span>`

      const cardClasses = [
        'game-card',
        project.id === activeProject.id ? 'is-active' : '',
        project.iconSrc ? 'has-image-cover' : '',
        project.useGithubIcon || project.useLinkedInIcon ? 'has-icon-mark' : '',
      ].filter(Boolean).join(' ')

      return `
        <button
          type="button"
          class="${cardClasses}"
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
            <img class="avatar-image" src="${turnerProfile}" alt="Turner Inge" />
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

            <div class="feature-detail">
              <div class="feature-icon ${activeProject.iconSrc ? 'has-image' : activeProject.useGithubIcon || activeProject.useLinkedInIcon ? 'has-icon-mark' : ''}">
                ${activeProject.useGithubIcon
                  ? `
                    <svg class="feature-github-mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="M8 0C3.58 0 0 3.58 0 8a8.013 8.013 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.533 7.533 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
                    </svg>
                  `
                  : activeProject.useLinkedInIcon
                    ? `
                      <svg class="feature-linkedin-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
                        <rect x="0" y="0" width="64" height="64" rx="14" fill="#0A66C2"/>
                        <path d="M16 24.8h8.2v22.4H16zm4.1-8.8c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7zm9.5 8.8h7.9v3.1h.1c1.1-2.1 3.8-4.3 7.8-4.3 8.4 0 9.9 5.5 9.9 12.7v12.9h-8.2V35.6c0-3.1-.1-7.1-4.3-7.1-4.3 0-5 3.4-5 6.8v10.9h-8.2V24.8z" fill="#ffffff"/>
                      </svg>
                    `
                    : activeProject.iconSrc
                      ? `<img class="feature-icon-image" src="${activeProject.iconSrc}" alt="${activeProject.title} icon" />`
                      : `<span class="feature-initials">${activeProject.initials}</span>`}
              </div>

              <div class="feature-text">
                <p class="feature-tag">${activeProject.tag}</p>
                <h2>${activeProject.title}</h2>
                <p>${activeProject.subtitle}</p>
              </div>
            </div>

            ${activeProject.link ? `<button type="button" class="launch-button" data-launch-link="${activeProject.link}">Launch project</button>` : ''}
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

          <article class="mini-card athlete-card" style="background-image: linear-gradient(135deg, rgba(8, 12, 18, 0.68), rgba(8, 12, 18, 0.2)), url('${turnerProfileAlt}');">
            <div class="athlete-overlay">
              <span class="athlete-badge">ATHLETE</span>
              <div class="athlete-copy">
                <div class="athlete-title">FOOTBALL</div>
                <p>Competitive edge. Big-play energy. Relentless focus.</p>
              </div>
              <div class="athlete-metrics">
                <span>POWER</span>
                <div class="athlete-meter"><span></span></div>
              </div>
            </div>
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
    })
  })

  const launchButtons = app.querySelectorAll<HTMLButtonElement>('.launch-button')
  launchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const link = button.dataset.launchLink
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer')
      }
    })
  })
}

renderProjectGrid('github')
