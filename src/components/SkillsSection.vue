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
          <span class="toolbox-index" aria-hidden="true">0{{ i + 1 }}</span>
          <h3>{{ group.category }}</h3>
          <div class="toolbox-subgroups">
            <div v-for="subgroup in group.subgroups" :key="subgroup.label" class="toolbox-subgroup">
              <h4>{{ subgroup.label }}</h4>
              <ul class="toolbox-items" role="list">
                <li v-for="item in subgroup.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.toolbox { padding-top: 65px; padding-bottom: 65px; }
.toolbox-heading { margin-bottom: 40px; }
.toolbox-heading h2 { font-size: var(--section-heading-size); letter-spacing: -.04em; line-height: 1.15; font-weight: 700; margin-top: 12px; }
.toolbox-note { color: var(--text-secondary); font-size: calc(13px * var(--type-scale)); margin-top: 16px; }
.toolbox-group { display: grid; grid-template-columns: 32px minmax(160px, 220px) minmax(0, 1fr); align-items: baseline; gap: 24px; padding: 30px 0; border-top: 1px solid var(--grey-line); }
.toolbox-group:last-child { border-bottom: 1px solid var(--grey-line); }
.toolbox-group h3 { font-size: calc(17px * var(--type-scale)); font-weight: 700; letter-spacing: -.025em; line-height: 1.4; }
.toolbox-index { color: var(--text-tertiary); font-size: calc(11px * var(--type-scale)); font-weight: 400; letter-spacing: .1em; }
.toolbox-subgroups { display: grid; gap: 16px; min-width: 0; }
.toolbox-subgroup { display: grid; grid-template-columns: 150px minmax(0, 1fr); align-items: baseline; gap: 18px; }
.toolbox-subgroup h4 { margin: 0; font-size: calc(12px * var(--type-scale)); font-weight: 500; color: var(--text-tertiary); line-height: 1.9; }
.toolbox-items { display: flex; flex-wrap: wrap; list-style: none; padding: 0; gap: 5px 0; }
.toolbox-items li { display: inline; color: var(--text-secondary); font-size: calc(14px * var(--type-scale)); line-height: 1.9; letter-spacing: 0; }
.toolbox-items li:not(:last-child)::after { content: '·'; display: inline-block; color: var(--accent); margin: 0 9px; }
@media(max-width:1100px) {
  .toolbox-subgroup { grid-template-columns: minmax(0, 1fr); gap: 3px; }
}
@media(max-width:734px) {
  .toolbox { padding-top: 45px; padding-bottom: 45px; }
  .toolbox-heading { margin-bottom: 30px; }
  .toolbox-group { grid-template-columns: 24px minmax(0, 1fr); gap: 12px; padding: 24px 0; }
  .toolbox-subgroups { grid-column: 2; }
}
</style>
