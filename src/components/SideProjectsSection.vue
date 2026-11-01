<script setup>
import ProjectGallery from './ProjectGallery.vue'
import ResumeText from './ResumeText.vue'
import { sideProjects } from '../data/resume.js'
</script>

<template>
  <section id="projects" class="section">
    <div class="section-inner">
      <div class="projects-divider" v-reveal><p class="section-kicker">02 / SELECTED PROJECTS</p><h2><span>Selected projects,</span> ideas<br class="desktop-break" /> brought to life.</h2><p>From a useful idea to something you can actually use.</p><a class="btn-ink" href="#project-list">Explore projects <span aria-hidden="true">↘</span></a></div>

      <div id="project-list" class="project-grid">
        <article
          v-for="(project, i) in sideProjects"
          :key="project.name"
          class="project-card"
          v-reveal="{ delay: i * 80 }"
        >
          <ProjectGallery v-if="project.images?.length" :images="project.images" :name="project.name" />
          <div v-else class="project-visual" :class="`project-visual--${i}`" aria-hidden="true"><span class="project-visual-index">PROJECT / 0{{ i + 1 }}</span><span class="project-visual-title">{{ project.visualTitle }}</span><span class="project-visual-caption">{{ project.visualCaption }}</span></div><div class="project-header">
            <h3 class="project-name">
              {{ project.name }}
            </h3>
            <span v-if="project.status" class="chip chip--mint project-status">{{ project.status }}</span>
          </div>
          <p class="project-descriptor">
            {{ project.descriptor }}<template v-if="project.dates"> · {{ project.dates }}</template>
            <span v-if="project.stars != null" class="repo-stats">
              <span class="repo-stat" title="GitHub stars">
                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                  <path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                </svg>
                {{ project.stars }}
              </span>
              <span class="repo-stat" title="GitHub forks">
                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                  <path fill="currentColor" d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                </svg>
                {{ project.forks }}
              </span>
            </span>
          </p>

          <div v-if="project.links.length" class="project-actions">
            <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" :class="{ 'project-action--live': link.label === 'Live' }" :aria-label="`${project.name} — ${link.label}`">{{ link.label === 'Live' ? 'Live site' : link.label }} <span aria-hidden="true">↗</span></a>
          </div>
          <p class="project-description"><ResumeText :text="project.description" /></p>
          <ul v-if="project.bullets?.length" class="project-bullets">
            <li v-for="bullet in project.bullets" :key="bullet"><ResumeText :text="bullet" /></li>
          </ul>

          <div class="project-stack">
            <span v-for="tech in project.stack" :key="tech" class="chip chip--mint">{{ tech }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 18px; }
.project-actions a { display: inline-flex; gap: 20px; align-items: center; border: 0; border-radius: 24px; padding: 8px 16px; font-size: calc(12px * var(--type-scale)); font-weight: 600; color: var(--text); background: #fff; }
.project-actions a:hover { text-decoration: none; background: #e4e7fc; color: var(--accent-ink); }
.project-actions .project-action--live { background: var(--primary); border: 0; color: #fff; }
.project-actions .project-action--live:hover { background: var(--accent-ink); color: #fff; }

.project-bullets { padding-left: 18px; margin-top: 16px; color: var(--text-secondary); font-size: calc(15px * var(--type-scale)); line-height: 1.7; }
.project-bullets li + li { margin-top: 12px; }
.project-visual.project-visual--2 { background: var(--surface); }

.projects-divider { text-align: center; padding: 32px 0 64px; }
.projects-divider h2 { font-size: calc(clamp(34px, 5.5vw, 74px) * var(--type-scale)); line-height: 1.1; letter-spacing: -.045em; margin: 30px 0 24px; font-weight: 750; }
.projects-divider h2 span { color: #737985; }
.projects-divider > p:not(.section-kicker) { color: var(--text-secondary); font-size: calc(15px * var(--type-scale)); }
.projects-divider .btn-ink { margin-top: 28px; }
.projects-divider .btn-ink span { margin-left: 28px; }
.project-visual { aspect-ratio: 2 / 1; min-height: 0; border-radius: 12px; background: var(--surface); margin: 0 0 24px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; }
.project-visual--1 { background: #252526; color: #fff; }
.project-visual-index, .project-visual-caption { font-size: calc(9px * var(--type-scale)); letter-spacing: .12em; }
.project-visual-title { max-width: 270px; font-size: calc(clamp(24px, 2.1vw, 36px) * var(--type-scale)); font-weight: 750; line-height: 1; letter-spacing: -.055em; padding: 12px 0; }
.project-visual-arrow { position: absolute; bottom: 20px; right: 24px; font-size: calc(30px * var(--type-scale)); }

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 1.6vw, 32px);
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border: 0;
  border-radius: var(--r-card);
  box-shadow: var(--shadow-card);
  padding: 28px 32px 30px;
  color: inherit;
  text-decoration: none;
  transition:
    transform 0.25s var(--ease-out),
    box-shadow 0.25s var(--ease-out);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lift);
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.project-name {
  font-size: calc(24px * var(--type-scale));
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: color 0.25s var(--ease-out);
}

.project-status {
  flex-shrink: 0;
}

.project-descriptor {
  margin-top: 4px;
  font-size: calc(14px * var(--type-scale));
  color: var(--text-tertiary);
}

.repo-stats {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-left: 10px;
}

.repo-stat {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
}

.repo-stat svg {
  flex-shrink: 0;
}

.project-description {
  margin-top: 18px;
  font-size: calc(15px * var(--type-scale));
  line-height: 1.7;
  color: var(--text-secondary);

}

.project-stack {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 1100px) {
  .project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 734px) {
  .project-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-card {
    padding: 22px 20px 24px;
  }
}
</style>
