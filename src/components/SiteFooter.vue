<script setup>
import { profile } from '../data/resume.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>© {{ year }} {{ profile.name }}</p>
      <p>Designed in {{ profile.location }}. Built with Vue.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border: 0;
  padding: 24px var(--page-gutter);
}

.footer-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: calc(12px * var(--type-scale));
  color: var(--text-tertiary);
}
</style>
