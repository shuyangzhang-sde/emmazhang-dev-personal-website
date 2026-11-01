<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '../data/resume.js'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// Scroll spy: whichever section crosses the upper third of the viewport is the
// one you're "in". Cheaper and steadier than an observer per section, since a
// tall section can span the whole viewport with no intersection change.
const activeId = ref('')
let sections = []
let ticking = false

function update() {
  ticking = false
  const line = window.innerHeight * 0.3
  let current = ''
  for (const el of sections) {
    const { top, bottom } = el.getBoundingClientRect()
    if (top <= line && bottom > line) {
      current = el.id
      break
    }
  }
  activeId.value = current
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(update)
}

onMounted(() => {
  sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  update()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <nav class="nav">
    <a class="nav-brand" href="#top">{{ profile.name }}</a>
    <div class="nav-links">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        :class="{ 'is-active': activeId === link.href.slice(1) }"
        :aria-current="activeId === link.href.slice(1) ? 'true' : undefined"
      >{{ link.label }}</a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  width: 100%;
  height: 85px;
  padding: 0 var(--page-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: var(--nav-bg);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
}
.nav-brand { font-size: calc(18px * var(--type-scale)); font-weight: 700; letter-spacing: -.035em; color: var(--text); white-space: nowrap; }
.nav-links { display: flex; gap: 8px; }
.nav-links a { color: var(--text-secondary); font-weight: 500; text-transform: uppercase; font-size: calc(11px * var(--type-scale)); letter-spacing: .03em; padding: 8px; white-space: nowrap; transition: color .2s var(--ease-out); }
.nav-links a::before { content: '[ '; }
.nav-links a::after { content: ' ]'; }
.nav-links a.is-active { color: var(--accent-ink); font-weight: 600; background: var(--surface); border-radius: 8px; }
.nav-brand:hover, .nav-links a:hover { color: var(--accent-ink); text-decoration: none; }
@media(max-width:734px) {
  .nav { height: 72px; padding: 0 20px; gap: 10px; }
  .nav-brand { font-size: calc(16px * var(--type-scale)); }
  .nav-links { gap: 4px; }
  .nav-links a { padding: 0 8px; font-size: calc(10px * var(--type-scale)); }
  .nav-links a:nth-child(n + 3) { display: none; }
}
@media(max-width:400px) {
  .nav { height: 86px; flex-wrap: wrap; align-content: center; gap: 6px; }
  .nav-links { width: 100%; justify-content: center; }
  .nav-links a { padding: 2px 8px; }
}
</style>
