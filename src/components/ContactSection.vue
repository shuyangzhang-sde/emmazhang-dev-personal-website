<script setup>
import { profile } from '../data/resume.js'
</script>

<template>
  <section id="contact" class="section">
    <div class="section-inner">
      <div class="contact-block" v-reveal>
        <h2 class="contact-title">Let's build something.</h2>
        <p class="contact-subtitle">
          Open to software engineering internships and new grad roles.
        </p>
        <div class="contact-actions">
          <a class="btn-ink" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </div>
        <div class="contact-links">
          <a
            v-for="link in profile.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            {{ link.label }} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-block {
  background: var(--brand);
  border: 0;
  border-radius: var(--r-block);
  padding: 96px 48px;
  text-align: center;
  color: #000;
}

.contact-title {
  font-size: calc(clamp(36px, 6vw, 60px) * var(--type-scale));
  font-weight: 700;
  letter-spacing: -0.02em;
}

.contact-subtitle {
  font-size: calc(19px * var(--type-scale));
  margin-top: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.contact-actions {
  margin-top: 36px;
}

.contact-block .btn-ink {
  background: var(--primary);
  color: #fff;
}

.contact-links {
  margin-top: 26px;
  display: flex;
  justify-content: center;
  gap: 28px;
}

.contact-links a span { color: var(--coral); }
.contact-links a:hover { color: var(--accent-ink); }
.contact-block .btn-ink:hover { background: var(--accent-ink); }
.contact-links a {
  font-size: calc(16px * var(--type-scale));
  font-weight: 600;
  color: #000;
}

@media (max-width: 734px) {
  .contact-block {
    padding: 64px 24px;
  }
}
</style>
