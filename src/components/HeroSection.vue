<script setup>
import EducationSection from './EducationSection.vue'
import ResumeText from './ResumeText.vue'
import { profile } from '../data/resume.js'
import portrait from '../assets/portraits/emma-portrait-cutout.png'
</script>

<template>
  <header id="top" class="hero">
    <div class="hero-inner">
      <div class="hero-composition">
        <div class="hero-copy">
          <h1 class="hero-title">Software Engineer</h1>
          <p class="hero-summary"><ResumeText :text="profile.subtitle" /></p>
          <div class="hero-socials" aria-label="Social profiles">
            <a v-for="link in profile.links" :key="link.label" :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <img class="hero-portrait" :src="portrait" alt="Illustrated portrait of Shuyang Zhang in a blue shirt" width="832" height="976" fetchpriority="high" />
      </div>
      <div class="hero-details">
        <div class="hero-intro">
          <p class="hero-greeting">HEY, I'M</p>
          <h2>{{ profile.name }}</h2>
          <p class="hero-caption">FROM IDEA TO PRODUCTION</p>
        </div>
        <EducationSection />
      </div>
      <div class="hero-bottom"><span>BACKEND / AI / FRONTEND</span><a href="#experience">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  --title-color: #d47763;
  background: var(--hero-ground);
  padding: 145px var(--page-gutter) 32px;
}
.hero-inner { width: 100%; max-width: 1200px; margin: auto; }
.hero-composition { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 72px); align-items: center; }
.hero-copy { min-width: 0; }
.hero-title { color: var(--title-color); font-size: clamp(38px, 4.3vw, 56px); font-weight: 700; line-height: 1.12; letter-spacing: -.045em; }
.hero-summary { max-width: 52ch; font-size: clamp(19px, 1.8vw, 23px); line-height: 1.75; color: var(--text-secondary); margin-top: 24px; }
.hero-summary :deep(strong) { color: var(--text); }
.hero-socials { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 22px; }
.hero-socials a { display: inline-flex; align-items: center; gap: 10px; padding-block: 8px; color: var(--accent-ink); font-size: calc(13px * var(--type-scale)); font-weight: 600; }
.hero-portrait { justify-self: center; width: 100%; max-width: 340px; height: auto; object-fit: contain; }
.hero-details { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 72px); border-top: 1px solid var(--grey-line); margin-top: 44px; padding-top: 30px; }
.hero-greeting, .hero-caption { font-size: calc(11px * var(--type-scale)); color: var(--text-secondary); letter-spacing: .12em; }
.hero-intro h2 { font-size: calc(clamp(25px, 2.5vw, 28px) * var(--type-scale)); font-weight: 700; letter-spacing: -.035em; line-height: 1.2; margin: 10px 0 16px; }
.hero-details :deep(.hero-education) { padding: 0; margin: 0; }
.hero-details :deep(.education-school) { max-width: 440px; font-size: calc(18px * var(--type-scale)); line-height: 1.4; text-wrap: initial; }
.hero-bottom { border-top: 1px solid var(--grey-line); margin-top: 36px; padding-top: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; font-size: calc(11px * var(--type-scale)); letter-spacing: .1em; }
@media(max-width:734px) {
  .hero { padding: 120px 20px 24px; }
  .hero-composition { grid-template-columns: minmax(0, 1fr); gap: 28px; }
  .hero-title { font-size: clamp(34px, 7vw, 46px); }
  .hero-summary { font-size: 18px; margin-top: 20px; }
  .hero-portrait { max-width: 240px; }
  .hero-details { grid-template-columns: minmax(0, 1fr); gap: 30px; margin-top: 30px; padding-top: 26px; }
  .hero-details :deep(.education-school) { font-size: calc(18px * var(--type-scale)); }
}
</style>
