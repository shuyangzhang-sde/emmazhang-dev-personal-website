<script setup>
import EducationSection from './EducationSection.vue'
import { profile } from '../data/resume.js'
import portrait from '../assets/portraits/emma-portrait-cutout.png'
</script>

<template>
  <header id="top" class="hero">
    <div class="hero-inner">
      <p class="hero-eyebrow">PERSONAL PORTFOLIO / SOFTWARE & AI</p>
      <h1 class="hero-title">Software Engineer</h1>
      <div class="hero-composition">
        <div class="hero-disciplines">
          <ul class="hero-specialties"><li>AI Engineer</li><li>Full Stack Development</li><li>Backend Development</li><li>Cloud Infrastructure</li></ul>
          <a href="#projects" class="hero-work">Explore my work <span aria-hidden="true">↘</span></a>
        </div>
        <img class="hero-portrait" :src="portrait" alt="Illustrated portrait of Shuyang Zhang in a blue shirt" width="832" height="976" fetchpriority="high" />
        <div class="hero-intro"><p class="hero-location">OPEN TO RELOCATE ACROSS THE U.S.</p><EducationSection /><p class="hero-greeting">HEY, I'M</p><h2>{{ profile.name }}</h2><p class="hero-tagline">{{ profile.tagline }}</p></div>
      </div>
      <p class="hero-summary">{{ profile.subtitle }}</p>
      <div class="hero-bottom"><span>FROM IDEA TO PRODUCTION</span><a href="#experience">SCROLL TO EXPLORE ↓</a></div>
    </div>
  </header>
</template>

<style scoped>
.hero { --title-color: #d47763; --marker-color: #ed927e; background: var(--hero-ground); padding: 155px clamp(20px, 2.5vw, 80px) 32px; }
.hero-inner { width: 100%; max-width: none; margin: auto; container-type: inline-size; }
.hero-eyebrow::before { content: ''; display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--coral); margin-right: 10px; }
.hero-eyebrow { font-size: calc(11px * var(--type-scale)); letter-spacing: .12em; margin-bottom: 12px; }
.hero-title { color: var(--title-color); font-family: var(--font-sans); font-size: calc(9.75cqw * var(--type-scale)); font-weight: 750; line-height: 1.08; letter-spacing: -.045em; word-spacing: .06em; text-align: center; position: relative; z-index: 1; }
.hero-location { text-align: left; font-size: calc(10px * var(--type-scale)); letter-spacing: .18em; margin: 0 0 16px; }
.hero-composition { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, 26cqw) minmax(0, 1fr); gap: clamp(20px, 2cqw, 48px); align-items: end; margin: -1.8cqw auto 0; max-width: none; }
.hero-portrait { align-self: end; width: 100%; height: auto; object-fit: contain; }
.hero-specialties { display: grid; gap: 14px; list-style: none; padding: 0; color: var(--primary); font-size: calc(16px * var(--type-scale)); font-weight: 650; line-height: 1.5; letter-spacing: -.015em; }
.hero-specialties li { display: grid; grid-template-columns: 8px minmax(0, 1fr); align-items: baseline; column-gap: 12px; }
.hero-specialties li::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--marker-color); align-self: start; margin-top: .56em; }
.hero-disciplines { font-size: calc(12px * var(--type-scale)); font-weight: 600; line-height: 1.9; padding-bottom: 16px; }
.hero-work { color: var(--accent-ink); display: inline-flex; gap: 28px; border: 0; margin-top: 28px; padding-bottom: 5px; }
.hero-intro { align-self: end; padding-top: 24px; padding-bottom: 16px; }
.hero-intro :deep(.hero-education) { padding-bottom: 0; margin-bottom: 22px; }
.hero-intro :deep(.education-university) { max-width: none; }
.hero-greeting { font-size: calc(11px * var(--type-scale)); color: var(--text-secondary); }
.hero-intro > h2 { font-size: calc(28px * var(--type-scale)); font-weight: 750; letter-spacing: -.035em; line-height: 1.2; margin: 5px 0 10px; }
.hero-tagline { max-width: 30ch; font-size: calc(14px * var(--type-scale)); color: var(--text-secondary); }
.hero-summary { text-align: center; max-width: 600px; font-size: calc(14px * var(--type-scale)); line-height: 1.65; color: var(--text-secondary); margin: 28px auto 60px; }
.hero-bottom { border: 0; padding-top: 20px; display: flex; justify-content: space-between; font-size: calc(9px * var(--type-scale)); letter-spacing: .13em; }
@media(min-width: 1001px) {
  /* Share the title's left edge; keep the list markers outside that text axis. */
  .hero-title { text-align: left; padding-left: 3.5cqw; }
  .hero-disciplines { padding-left: 3.5cqw; }
  .hero-specialties li { display: block; position: relative; }
  .hero-specialties li::before { position: absolute; left: -20px; top: 0; }

  .hero-eyebrow { font-size: clamp(12px, .9cqw, 20px); }
  .hero-location { font-size: clamp(11px, .8cqw, 18px); }
  .hero-specialties { font-size: clamp(18px, 1.4cqw, 32px); gap: 1cqw; }
  .hero-work { font-size: clamp(14px, 1cqw, 23px); }
  .hero-intro { padding-top: 1.7cqw; padding-bottom: 1.1cqw; }
  .hero-intro > h2 { font-size: clamp(30px, 2.4cqw, 56px); }
  .hero-greeting { font-size: clamp(12px, .85cqw, 20px); }
  .hero-tagline { font-size: clamp(16px, 1.15cqw, 27px); max-width: none; }
  .hero-intro :deep(.education-label) { font-size: clamp(11px, .8cqw, 18px); }
  .hero-intro :deep(.education-school) { font-size: clamp(34px, 2.6cqw, 62px); }
  .hero-intro :deep(.education-university), .hero-intro :deep(.education-degree) { font-size: clamp(14px, 1.05cqw, 25px); }
  .hero-intro :deep(.education-date) { font-size: clamp(13px, 1cqw, 23px); }
  .hero-summary { max-width: 64cqw; font-size: clamp(16px, 1.1cqw, 26px); }
  .hero-bottom { font-size: clamp(11px, .8cqw, 18px); }
}
@media(max-width: 1000px) { .hero { padding: 130px 20px 24px; } .hero-title { font-size: calc(8.1vw * var(--type-scale)); } .hero-location { font-size: calc(10px * var(--type-scale)); letter-spacing: .12em; margin: 0 0 16px; } .hero-composition { grid-template-columns: 1fr 1fr; gap: 20px; margin-top: -8px; } .hero-portrait { grid-column: 1 / -1; grid-row: 1; width: 240px; height: auto; margin: auto; } .hero-disciplines { align-self: start; font-size: calc(11px * var(--type-scale)); padding: 0; } .hero-specialties { font-size: calc(13px * var(--type-scale)); gap: 12px; } .hero-specialties li { grid-template-columns: 6px minmax(0, 1fr); column-gap: 8px; } .hero-specialties li::before { width: 6px; height: 6px; } .hero-intro { padding: 0; } .hero-intro > h2 { font-size: calc(23px * var(--type-scale)); } .hero-tagline { font-size: calc(12px * var(--type-scale)); } .hero-work { margin-top: 12px; gap: 12px; } .hero-summary { margin-bottom: 40px; } .hero-bottom { font-size: calc(9px * var(--type-scale)); letter-spacing: .03em; } }
</style>
