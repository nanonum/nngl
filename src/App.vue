<script setup>
import { nextTick, computed, watch, onMounted, reactive, ref, onBeforeUnmount, onUnmounted } from 'vue';
import { Application, Sprite, Point, DisplacementFilter, Filter, GlProgram, Graphics } from 'pixi.js';
import FilterHelper from './includes/FilterHelper.js'
import Shader from './components/Shader.vue';
import Thumbnail from './components/Thumbnail.vue';
import vertex from './default.vert';
import anime from 'animejs/lib/anime.es.js'
import { useMediaQuery } from '@vueuse/core'
const isSP = useMediaQuery('(max-width: 860px)')

// Vue
const isPixiActive = ref(false)
const stage = ref('shader')
const isFullscreen = ref(false)

const thumbnail_size = isSP ? 85 / 375* window.innerWidth : 110

const transition = reactive({
  saturation: 1
})
const shaderTitle = ref('')
const input_permalink = ref()
const state = reactive({
  selected: false,
  stage: 'shader',
  shader: null,
  title: null,
  path: null,
})

// PIXI
let shaders = ref();
shaders.value = import.meta.glob('/src/shaders/**/*.frag', { eager: true })

let filter
const getFilename = (path) => {
  const url = new URL(path, location)
  return (path.split('/').pop())
  // return (path.split('/').pop().split('.').shift())
}

async function init() {
  window.ui = new Application();
  await window.ui.init({
    // background: '#',
    backgroundAlpha: 0,
    resizeTo: window,
    resolution: 1
  });
  window.ui.ticker.maxFPS = 15
  window.ui.canvas.setAttribute('id', 'canvas_ui')
  document.body.appendChild(window.ui.canvas);


  await nextTick()

  if(location.hash) {
    const path = location.hash.split('#')[1] || null
    const filename = location.hash.split('#/shader/')[1] || null
    state.path = path
    state.filename = filename
    const found = Object.keys(shaders.value).find(key => {
      return key.slice(key.lastIndexOf('/')+1) === filename
    })
    state.shader = shaders.value[found].default
  }

  isPixiActive.value = true

}

const permalink = computed(() => {
  return location.href

})
onMounted(() => {
  init()
})
onBeforeUnmount(() => {
  if (window.ui) {
    window.ui.destroy({
      removeView: true
    })
  }
})

function selectPermalink() {
  input_permalink.value.select()
}

const onclick = (currentStage, currentShader, currentShaderTitle) => {
  if(state.selected && state.title === currentShaderTitle) {
    state.selected = null
  } else {
    Object.assign(state, {
      selected: !!currentShaderTitle,
      shader: currentShader,
      path: location.hash = `/${currentStage}/${currentShaderTitle}`,
      title: currentShaderTitle,
      stage: currentStage,
    })
  }
}
const close = () => {

  history.pushState('','','/nngl/');
  state.selected = false

}
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  // console.log(isFullscreen.value)
  document.body.classList.toggle('--fullscreen')
}
const hover = (currentStage, currentShader, currentShaderTitle) => {

  console.log(isPixiActive.value)

  if(state.selected) return

  Object.assign(state, {
    shader: currentShader,
    path: `/${currentStage}/${currentShaderTitle}`,
    title: currentShaderTitle,
    stage: currentStage,
  })
}
watch(() => state.shader, (val) => {
  anime({
    targets: transition,
    saturation: state.shader ? 0 : 1,
    easing: 'easeOutExpo',
    duration: 800 ,
  })
});

</script>
<template>
  <h1 class="c-shader-title">{{ state.title || 'NN.GL' }}</h1>

  <h2 class="c-subtitle">SHADERS</h2>


  <ul class="p-gallery" v-if="isPixiActive">
    <template v-for="(shader, key) in shaders">
      <li class="p-gallery__item" v-if="getFilename(key).indexOf('_') !== 0"
        @click="onclick('shader', shader.default, getFilename(key))"
        @mouseenter.passive.capture="hover('shader', shader.default, getFilename(key))"
        :class="{ 'active': state.path === `/shader/${getFilename(key)}` }">
        <div class="item__container">
          <Thumbnail :shader="shader.default"
            :saturation="transition.saturation"
            :width="thumbnail_size"
            :height="thumbnail_size"
            :alt="getFilename(key)"
            :selected="state.selected"
            :active="state.title === getFilename(key)"
            :show="!isFullscreen"
          />
        </div>
      </li>
    </template>
  </ul>

  <template v-if="false">
    <h2>FILTERS</h2>
    <ul class="p-gallery" v-if="isPixiActive">
      <li class="p-gallery__item" @mouseenter.passive.capture="hover('filter', null, null)">
        <div class="item__container">
          Filter1
        </div>
      </li>
    </ul>
  </template>

  <Shader v-if="isPixiActive && state.stage === 'shader'" :shader="state.shader" />

  <transition name="closeButton">
    <nav v-if="state.selected" @click="close()" class="c-close"></nav>
  </transition>
  <transition name="fullscreenButton">
    <nav @click="toggleFullscreen()" class="c-fullscreen"></nav>
  </transition>
  <transition name="permalink">
    <input v-if="isPixiActive && state.selected" type="text" :value="permalink" class="permalink" readonly @click="selectPermalink()" ref="input_permalink">
  </transition>

  <div class="c-share">
    <a href="mailto:nanonum@gmail.com">{{ isSP ? 'CONTACT' : 'nanonum@gmail.com' }}</a>
    <a href="https://linktr.ee/nanonum" target="_blank">{{ isSP ? 'MORE LINKS' : 'linktr.ee/nanonum' }}</a>
  </div>

</template>

<style scoped></style>
