<!-- Archived: optional hero color controls. Reconnect with titleColor and markerColor v-models to restore. -->
<script setup>
import { ref } from 'vue'
import portrait from '../assets/portraits/emma-portrait-original.png'

const props = defineProps({ titleColor: String, markerColor: String })
const emit = defineEmits(['update:titleColor', 'update:markerColor'])
const open = ref(false)
const target = ref('titleColor')
const sampleImage = ref(null)
const sampledColor = ref('')
const presets = [
  { name: '深海军蓝', title: '#263449', marker: '#586b85' },
  { name: '蓝灰色', title: '#384454', marker: '#718096' },
  { name: '炭黑蓝', title: '#202730', marker: '#566577' },
  { name: '衣服蓝', title: '#304e9b', marker: '#4263a7' },
  { name: '珊瑚橙', title: '#d47763', marker: '#ed927e' },
]
function togglePanel() {
  open.value = !open.value
  if (open.value) document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
}
function applyPreset(preset) {
  emit('update:titleColor', preset.title)
  emit('update:markerColor', preset.marker)
}
function sample(event) {
  const img = sampleImage.value
  if (!img?.naturalWidth) return
  const bounds = img.getBoundingClientRect()
  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return
  ctx.drawImage(img, 0, 0)
  const x = Math.min(canvas.width - 1, Math.max(0, Math.floor((event.clientX - bounds.left) / bounds.width * canvas.width)))
  const y = Math.min(canvas.height - 1, Math.max(0, Math.floor((event.clientY - bounds.top) / bounds.height * canvas.height)))
  const rgb = ctx.getImageData(x, y, 1, 1).data
  sampledColor.value = '#' + Array.from(rgb.slice(0, 3), n => n.toString(16).padStart(2, '0')).join('')
  emit(`update:${target.value}`, sampledColor.value)
}
</script>

<template>
  <aside class="color-playground" aria-label="封面配色工具" @keydown.esc="open = false">
    <button class="color-toggle" :aria-expanded="open" aria-controls="color-panel" @click="togglePanel">
      <span class="toggle-swatch" :style="{ background: titleColor }" aria-hidden="true"></span>调整配色 <span aria-hidden="true">{{ open ? '−' : '+' }}</span>
    </button>
    <div v-if="open" id="color-panel" class="color-panel">
      <div class="panel-heading"><h2>试试不同的颜色</h2><button class="close-button" aria-label="关闭配色面板" @click="open = false">×</button></div>
      <p class="panel-note">选择预设，或自由取色，实时查看效果。</p>
      <div class="presets">
        <button v-for="preset in presets" :key="preset.name" :aria-pressed="titleColor === preset.title && markerColor === preset.marker" @click="applyPreset(preset)">
          <span :style="{ background: preset.title }" aria-hidden="true"></span>{{ preset.name }}
        </button>
      </div>
      <label class="color-row"><span>大标题</span><span class="color-value">{{ titleColor.toUpperCase() }}</span><input type="color" aria-label="大标题颜色" :value="titleColor" @input="emit('update:titleColor', $event.target.value)" /></label>
      <label class="color-row"><span>职位圆点</span><span class="color-value">{{ markerColor.toUpperCase() }}</span><input type="color" aria-label="职位圆点颜色" :value="markerColor" @input="emit('update:markerColor', $event.target.value)" /></label>
      <fieldset class="sample-target"><legend>从头像中取色</legend><label><input v-model="target" type="radio" value="titleColor" name="sample-target" /> 用于标题</label><label><input v-model="target" type="radio" value="markerColor" name="sample-target" /> 用于圆点</label></fieldset>
      <img ref="sampleImage" class="sample-image" :src="portrait" alt="点击头像上的任意位置，提取该处颜色；也可以使用上方颜色选择器。" width="1024" height="1024" @click="sample" />
      <p class="sample-note" aria-live="polite">{{ sampledColor ? `已提取 ${sampledColor.toUpperCase()}` : '点击图片中的衣服、头发或其他位置取色' }}</p>
      <button class="reset-button" @click="applyPreset(presets[4])">恢复默认配色</button>
    </div>
  </aside>
</template>

<style scoped>
.color-playground { position: fixed; right: 22px; bottom: 22px; z-index: 60; font-family: var(--font-sans); letter-spacing: 0; color: #202730; }
button, input { font: inherit; }
button { cursor: pointer; }
.color-toggle { display: flex; gap: 10px; align-items: center; margin-left: auto; padding: 11px 17px; border: 0; border-radius: 30px; background: #fff; color: #202730; font-size: calc(12px * var(--type-scale)); box-shadow: 0 4px 20px #0000000d; }
.toggle-swatch, .presets span { width: 15px; height: 15px; border-radius: 50%; border: 0; flex-shrink: 0; }
.color-panel { position: absolute; bottom: 52px; right: 0; width: 300px; max-height: calc(100svh - 155px); overflow-y: auto; background: #fff; border: 0; border-radius: 16px; padding: 18px; box-shadow: 0 12px 45px #2027301a; }
.panel-heading { display: flex; align-items: center; justify-content: space-between; }
.panel-heading h2 { font-size: calc(15px * var(--type-scale)); font-weight: 650; margin: 0; }
.close-button { border: 0; background: transparent; padding: 0 4px; font-size: calc(24px * var(--type-scale)); line-height: 1; color: #657080; }
.panel-note, .sample-note { font-size: calc(11px * var(--type-scale)); line-height: 1.6; color: #68707c; margin-top: 8px; }
.presets { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin: 15px 0; }
.presets button { display: flex; gap: 7px; align-items: center; background: #f6f8fb; border: 0; border-radius: 7px; padding: 8px; font-size: calc(11px * var(--type-scale)); color: inherit; }
.presets button[aria-pressed=true] { border: 0; background: #f1f4f8; }
.color-row { display: flex; align-items: center; gap: 10px; padding: 9px 0; border: 0; font-size: calc(12px * var(--type-scale)); }
.color-value { margin-left: auto; font-size: calc(10px * var(--type-scale)); color: #68707c; font-family: monospace; }
input[type=color] { width: 31px; height: 28px; padding: 1px; border: 0; background: #fff; border-radius: 5px; cursor: pointer; }
.sample-target { margin: 14px 0 10px; padding: 0; border: 0; font-size: calc(11px * var(--type-scale)); }
.sample-target legend { font-weight: 650; margin-bottom: 7px; }
.sample-target label { display: inline-flex; align-items: center; gap: 3px; margin-right: 10px; }
.sample-target input { accent-color: #263449; }
.sample-image { display: block; width: 180px; max-width: 100%; height: auto; margin: auto; cursor: crosshair; border-radius: 8px; }
.sample-note { text-align: center; }
.reset-button { display: block; border: 0; background: transparent; text-decoration: underline; text-underline-offset: 3px; color: #566577; font-size: calc(11px * var(--type-scale)); margin: 12px auto 0; }
@media(max-width:734px) { .color-playground { right: 12px; bottom: 12px; } .color-panel { width: min(300px, calc(100vw - 24px)); } }
</style>
