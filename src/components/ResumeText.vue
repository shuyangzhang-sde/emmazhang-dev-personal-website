<script setup>
import { computed } from 'vue'
import { resumeEmphasis } from '../data/resumeEmphasis.js'

const props = defineProps({ text: { type: String, required: true } })
const segments = computed(() => {
  const result = []
  let cursor = 0
  for (const [start, end] of resumeEmphasis[props.text] ?? []) {
    if (start > cursor) result.push({ text: props.text.slice(cursor, start), bold: false })
    result.push({ text: props.text.slice(start, end), bold: true })
    cursor = end
  }
  if (cursor < props.text.length) result.push({ text: props.text.slice(cursor), bold: false })
  return result
})
</script>

<template>
  <template v-for="(segment, i) in segments" :key="i"><strong v-if="segment.bold">{{ segment.text }}</strong><template v-else>{{ segment.text }}</template></template>
</template>
