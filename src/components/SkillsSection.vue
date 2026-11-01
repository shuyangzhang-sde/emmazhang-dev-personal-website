<script setup>
import { skills } from '../data/resume.js'
</script>

<template>
  <section id="skills" class="section toolbox" aria-labelledby="toolbox-title">
    <div class="section-inner">
      <div class="toolbox-heading" v-reveal>
        <div><p class="section-kicker">03 / SKILLS & TOOLS</p><h2 id="toolbox-title">The toolbox.</h2></div>
        <p class="toolbox-note">The tools behind the work.</p>
      </div>
      <div class="toolbox-panel" v-reveal>
        <div v-for="(group, i) in skills" :key="group.category" class="toolbox-group">
          <h3><span class="toolbox-index" aria-hidden="true">0{{ i + 1 }}</span>{{ group.category }}</h3>
          <ul class="toolbox-items" role="list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.toolbox { padding-top: 65px; padding-bottom: 65px; }
.toolbox-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 26px; }
.toolbox-heading h2 { font-size: calc(clamp(36px, 4.5vw, 56px) * var(--type-scale)); letter-spacing: -.055em; line-height: 1.05; font-weight: 750; margin-top: 12px; }
.toolbox-note { color: var(--text-secondary); font-size: calc(13px * var(--type-scale)); margin-bottom: 4px; }
.toolbox-panel { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border: 0; border-radius: 16px; background: var(--surface); overflow: hidden; }
.toolbox-group { padding: 25px 28px; }
.toolbox-group:nth-child(odd) { border: 0; }
.toolbox-group:nth-child(n + 3) { border: 0; }
.toolbox-group h3 { display: flex; align-items: baseline; gap: 12px; margin-bottom: 13px; font-size: calc(13px * var(--type-scale)); font-weight: 700; letter-spacing: .015em; }
.toolbox-index { color: var(--text-tertiary); font-size: calc(9px * var(--type-scale)); font-weight: 400; letter-spacing: .05em; }
.toolbox-items { display: flex; flex-wrap: wrap; list-style: none; padding: 0; gap: 5px 0; }
.toolbox-items li { display: inline; color: var(--text-secondary); font-size: calc(14px * var(--type-scale)); line-height: 1.65; letter-spacing: 0; }
.toolbox-items li:not(:last-child)::after { content: '·'; display: inline-block; color: var(--accent); margin: 0 9px; }
@media(max-width:734px) {
  .toolbox { padding-top: 45px; padding-bottom: 45px; }
  .toolbox-heading { align-items: start; }
  .toolbox-note { max-width: 110px; margin-top: 25px; font-size: calc(12px * var(--type-scale)); }
  .toolbox-panel { grid-template-columns: 1fr; }
  .toolbox-group { padding: 20px; }
  .toolbox-group:nth-child(odd) { border: 0; }
  .toolbox-group + .toolbox-group { border: 0; }
  .toolbox-items li { font-size: calc(14px * var(--type-scale)); }
}
</style>
