<script setup>
import ProjectGallery from './ProjectGallery.vue'
import ResumeText from './ResumeText.vue'
import { projectCategories, sideProjects } from '../data/resume.js'

const projectGroups = projectCategories.map(category => ({
  ...category,
  projects: sideProjects
    .map((project, index) => ({ ...project, index }))
    .filter(project => project.category === category.id),
}))
</script>

<template>
  <section id="projects" class="section">
    <div class="section-inner">
      <div class="section-divider section-divider--projects" v-reveal>
        <p class="section-kicker">02 / SELECTED PROJECTS</p>
        <h2>Projects</h2>
        <p class="divider-description"><strong>Ideas brought to life.</strong> From a useful idea to something you can actually use.</p>
      </div>

      <div id="project-list" class="project-groups">
        <section
          v-for="(group, groupIndex) in projectGroups"
          :key="group.id"
          class="project-group"
          :aria-labelledby="`projects-${group.id}`"
        >
          <div class="project-group-heading" v-reveal>
            <span class="project-group-number" aria-hidden="true">0{{ groupIndex + 1 }}</span>
            <h3 :id="`projects-${group.id}`">{{ group.title }}</h3>
          </div>
          <div class="project-grid">
            <article
              v-for="(project, i) in group.projects"
              :key="project.name"
              class="project-entry"
              v-reveal="{ delay: i * 80 }"
            >
              <figure v-if="group.id === 'full-stack-backend' && project.images?.length" class="project-media">
                <ProjectGallery :images="project.images" :name="project.name" />
                <figcaption v-if="project.descriptor">{{ project.descriptor }}</figcaption>
              </figure>
              <div v-else class="project-media project-media--empty" aria-hidden="true"></div>
              <div class="project-content">
                <div class="project-header">
                  <h4 class="project-name">
                    {{ project.name }}
                  </h4>
                  <span v-if="project.status" class="chip chip--mint project-status">{{ project.status }}</span>
                  <div v-if="project.links.length" class="project-actions">
                    <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" :class="{ 'project-action--live': link.label === 'Live' }" :aria-label="`${project.name} — ${link.label}`">{{ link.label === 'Live' ? 'Live site' : link.label }} <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
                <p v-if="(group.id !== 'full-stack-backend' && project.descriptor) || project.dates || project.stars != null" class="project-descriptor">
                  <template v-if="group.id !== 'full-stack-backend'">{{ project.descriptor }}</template><template v-if="project.dates"> · {{ project.dates }}</template>
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


                <p class="project-description"><ResumeText :text="project.description" /></p>
                <ul v-if="project.bullets?.length" class="project-bullets">
                  <li v-for="bullet in project.bullets" :key="bullet"><ResumeText :text="bullet" /></li>
                </ul>

                <div class="project-stack" aria-label="Technologies">
                  <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
#projects > .section-inner { max-width: 1440px; }
#projects .section-divider h2 { font-size: calc(var(--section-heading-size) - 2px); }
#projects .section-kicker { font-size: calc(10px * var(--type-scale)); }
#projects .divider-description { font-size: calc(13px * var(--type-scale)); }
.project-status { font-size: calc(12px * var(--type-scale)); }
.project-groups { display: grid; grid-template-columns: minmax(0, 1fr); gap: 56px; }
.project-group { min-width: 0; }
.project-group-heading { display: flex; align-items: baseline; gap: 16px; padding-bottom: 22px; border-bottom: 1px solid var(--grey-line); }
.project-group-number { font-size: calc(10px * var(--type-scale)); letter-spacing: .16em; color: var(--text-tertiary); }
.project-group-heading h3 { font-size: calc(clamp(20px, 2.2vw, 26px) * var(--type-scale)); font-weight: 700; line-height: 1.25; letter-spacing: -.035em; }
.project-entry { display: grid; grid-template-columns: minmax(0, clamp(160px, 20vw, 300px)) minmax(0, 1fr); gap: 20px; align-items: start; padding: 32px 0; border-bottom: 1px solid var(--grey-line); }
.project-media { margin: 0; min-width: 0; width: 100%; max-width: 300px; }
.project-media--empty { aspect-ratio: 2 / 1; }
.project-media :deep(.project-gallery) { margin: 0; }
.project-media figcaption { color: var(--text-tertiary); font-size: calc(11px * var(--type-scale)); line-height: 1.7; margin-top: 14px; }
.project-content { min-width: 0; }
.project-header { display: flex; align-items: baseline; flex-wrap: wrap; gap: 10px 16px; }
.project-name { flex: 1 1 220px; margin: 0; min-width: 0; font-size: calc(21px * var(--type-scale)); font-weight: 700; line-height: 1.3; letter-spacing: -.025em; }
.project-status { flex-shrink: 0; }
.project-actions { display: flex; flex-wrap: wrap; flex-shrink: 0; gap: 16px; max-width: 100%; margin-left: auto; }
.project-actions a { display: inline-flex; align-items: center; gap: 6px; min-height: 36px; padding: 4px 0; color: var(--accent-ink); font-size: calc(11px * var(--type-scale)); font-weight: 600; line-height: 1.4; }
.project-actions a:hover { color: var(--primary); }
.project-descriptor { margin-top: 6px; font-size: calc(13px * var(--type-scale)); color: var(--text-tertiary); line-height: 1.6; }
.repo-stats { display: inline-flex; align-items: center; gap: 12px; }
.repo-stat { display: inline-flex; align-items: center; gap: 4px; font-weight: 600; }
.repo-stat svg { flex-shrink: 0; }
.project-description { margin-top: 14px; font-size: calc(14px * var(--type-scale)); line-height: 1.75; color: var(--text-secondary); }
.project-bullets { padding-left: 18px; margin-top: 16px; color: var(--text-secondary); font-size: calc(14px * var(--type-scale)); line-height: 1.75; }
.project-bullets li { white-space: normal; overflow-wrap: anywhere; }
.project-bullets li + li { margin-top: 10px; }
.project-content :deep(strong) { color: var(--text); }
.project-stack { margin-top: 18px; display: flex; flex-wrap: wrap; gap: 5px 0; color: var(--text-tertiary); font-size: calc(11px * var(--type-scale)); line-height: 1.8; }
.project-stack span:not(:last-child)::after { content: '·'; margin: 0 8px; }
@media (max-width: 734px) {
  .project-groups { grid-template-columns: minmax(0, 1fr); gap: 44px; }
  .project-entry { grid-template-columns: minmax(0, 18fr) minmax(0, 82fr); gap: 16px; padding: 26px 0; }
}
@media (pointer: coarse) {
  .project-actions a { min-height: 44px; }
}
</style>
