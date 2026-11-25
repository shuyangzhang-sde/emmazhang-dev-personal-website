<script setup>
import { education } from '../data/resume.js'
</script>

<template>
  <section id="education" class="hero-education" aria-labelledby="education-title">
    <p class="education-label">EDUCATION</p>
    <h2 id="education-title" class="education-school">{{ education.school }}</h2>
    <p class="education-degree">B.S. in General <strong>Mathematics</strong><br />Minor in <strong>Computer Science</strong></p>
    <p class="education-date">{{ education.graduation }}</p>
  </section>
</template>

<style scoped>
.hero-education { padding-bottom: 22px; margin-bottom: 22px; border: 0; }
.education-label { font-size: calc(10px * var(--type-scale)); letter-spacing: .14em; color: var(--text-secondary); margin-bottom: 7px; }
.education-school { font-size: calc(24px * var(--type-scale)); font-weight: 750; letter-spacing: -.04em; line-height: 1.25; margin: 0 0 7px; text-wrap: balance; }
.education-degree { margin-top: 12px; font-size: calc(13px * var(--type-scale)); line-height: 1.5; }
.education-date { margin-top: 7px; font-size: calc(12px * var(--type-scale)); color: var(--text-secondary); }
@media(max-width:734px) { .hero-education { padding-bottom: 16px; margin-bottom: 16px; } .education-school { font-size: calc(20px * var(--type-scale)); } .education-degree { font-size: calc(12px * var(--type-scale)); } .education-date { font-size: calc(10px * var(--type-scale)); } }
</style>
