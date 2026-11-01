<script setup>
import ResumeText from './ResumeText.vue'
import { experience } from '../data/resume.js'

const rolesOf = (job) => job.roles ?? [{ role: job.role, bullets: job.bullets, stack: job.stack }]
</script>

<template>
  <section id="experience" class="section section--alt">
    <div class="section-inner">
      <div class="experience-divider" v-reveal>
        <p class="section-kicker">01 / INDUSTRY EXPERIENCE</p>
        <h2>Work</h2>
        <p class="divider-description"><strong>Engineering in the real world.</strong> From AI-powered products to scalable services: the teams, challenges, and work behind my experience.</p>
      </div>

      <div class="experience-list">
        <article v-for="(job, i) in experience" :key="job.company + job.dates" class="experience-entry" v-reveal>
          <div class="experience-meta"><span class="entry-number">0{{ i + 1 }}</span><h3><a v-if="job.companyUrl" class="company-link" :href="job.companyUrl" target="_blank" rel="noopener noreferrer">{{ job.company }}</a><template v-else>{{ job.company }}</template></h3><p><strong>{{ job.descriptor }}</strong></p><p>{{ job.dates }}</p><p><strong>{{ job.location }}</strong></p></div>
          <div class="experience-roles"><section v-for="post in rolesOf(job)" :key="post.role" class="experience-role"><h4>{{ post.role }}</h4><p v-if="post.dates" class="role-dates">{{ post.dates }}</p><ul><li v-for="bullet in post.bullets" :key="bullet"><ResumeText :text="bullet" /></li></ul><div class="job-stack"><span v-for="tech in post.stack" :key="tech" class="chip chip--mint">{{ tech }}</span></div></section></div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-divider { text-align: center; padding: 32px 0 72px; }
.experience-divider h2 { font-family: var(--font-sans); font-weight: 750; font-size: calc(clamp(88px, 17vw, 210px) * var(--type-scale)); letter-spacing: -.055em; line-height: 1.05; margin: 22px 0; }
.divider-description { max-width: 640px; margin: auto; color: var(--text-secondary); font-size: calc(clamp(16px, 2vw, 20px) * var(--type-scale)); }
.divider-description strong { color: var(--text); font-weight: 500; }
.experience-entry { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 48px; padding: 48px 0 58px; border: 0; }
.entry-number { display: block; color: var(--text-secondary); font-size: calc(11px * var(--type-scale)); margin-bottom: 24px; }
.experience-meta h3 { font-size: calc(25px * var(--type-scale)); line-height: 1.15; margin-bottom: 14px; }
.company-link { color: inherit; text-decoration: none; transition: color .2s ease; }
.company-link:hover, .company-link:focus-visible { color: var(--accent-ink); }
.experience-meta p { color: var(--text-secondary); font-size: calc(13px * var(--type-scale)); margin-top: 7px; }
.experience-role + .experience-role { border: 0; margin-top: 30px; padding-top: 30px; }
.experience-role h4 { font-size: calc(25px * var(--type-scale)); font-weight: 600; margin: 0; line-height: 1.2; letter-spacing: -.035em; }
.role-dates { font-size: calc(13px * var(--type-scale)); color: var(--text-secondary); margin-top: 8px; }
.experience-role ul { padding-left: 18px; margin-top: 24px; color: var(--text-secondary); font-size: calc(15px * var(--type-scale)); line-height: 1.7; }
.experience-role li + li { margin-top: 12px; }
.job-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 24px; }
@media(max-width:734px) { .experience-divider { padding: 20px 0 65px; } .experience-entry { grid-template-columns: 1fr; gap: 28px; } .entry-number { margin-bottom: 12px; } }
</style>
