<script setup>
import { computed, ref } from 'vue'
const props = defineProps({ images: { type: Array, required: true }, name: { type: String, required: true } })
const index = ref(0)
const current = computed(() => props.images[index.value])
function move(direction) {
  if (props.images.length > 1) index.value = (index.value + direction + props.images.length) % props.images.length
}
</script>

<template>
  <div class="project-gallery" @keydown.left.prevent="move(-1)" @keydown.right.prevent="move(1)">
    <img class="gallery-image" :src="current.src" :alt="current.alt" loading="lazy" decoding="async" />
    <template v-if="images.length > 1">
      <button class="gallery-arrow gallery-arrow--prev" :aria-label="`${name}: previous screenshot`" @click="move(-1)">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
      </button>
      <button class="gallery-arrow gallery-arrow--next" :aria-label="`${name}: next screenshot`" @click="move(1)">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
      </button>
      <span class="gallery-status" aria-live="polite">{{ current.label }}</span>
    </template>
  </div>
</template>

<style scoped>
.project-gallery { aspect-ratio: 2 / 1; position: relative; overflow: hidden; margin: 0 0 24px; }
.gallery-image { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.gallery-arrow { position: absolute; top: 50%; transform: translateY(-50%); display: grid; place-items: center; width: 38px; height: 42px; padding: 0; border: 0; border-radius: 50%; background: #fffffff2; color: var(--primary); box-shadow: 0 2px 12px #26344914; cursor: pointer; transition: background .2s ease, color .2s ease; }
.gallery-arrow:hover { background: var(--accent-ink); color: #fff; }
.gallery-arrow--prev { left: 8px; }
.gallery-arrow--next { right: 8px; }
.gallery-status { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
@media(max-width:734px) { .gallery-arrow { width: 34px; height: 38px; } .gallery-arrow--prev { left: 4px; } .gallery-arrow--next { right: 4px; } }
</style>
