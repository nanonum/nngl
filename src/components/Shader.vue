<script setup>
import { onMounted, reactive, ref, onBeforeUnmount, onUnmounted } from 'vue';
import { Application, Sprite, Point, DisplacementFilter, Filter, GlProgram, Graphics } from 'pixi.js';
import FilterHelper from '../includes/FilterHelper.js'
import Image from '../components/Image.vue';
import vertex from '../default.vert';


// Vue
const isPixiActive = ref(false)
const stage = ref('shader')

// PIXI
let modules = ref();
modules.value = import.meta.glob('/src/shaders/**/*.frag', { eager: true })

let filter
const getFilename = (path) => {
  const url = new URL(path, location)
  return (path.split('/').pop())
  // return (path.split('/').pop().split('.').shift())
}

async function init() {
  window.app = new Application();
  await window.app.init({
    id: 'app',
    background: '#000',
    backgroundAlpha: 0,
    resizeTo: window,
    resolution: 1
  });
  window.app.canvas.setAttribute('id', 'canvas_app')
  document.body.appendChild(window.app.canvas);


  // Rectangle

  filter = new FilterHelper({
    fragment: `#version 300 es
    precision highp float;
    uniform float u_time;// 0-1
    out vec4 fragColor;
    void main(){
      fragColor = vec4(0.0, 0.0, pow(sin(u_time * 0.41) * 0.5 + 0.5, .4), 1.0);
    }`,
    vertex: vertex,
    uniforms: {},
  })
  window.app.stage.filters = [filter.getFilter()];

  // window.addEventListener('mousemove', e => {
  //   // filter.getFilter().resources.timeUniforms.uniforms.u_time = e.clientX / window.innerWidth
  // })
  window.app.ticker.maxFPS = 60
  window.app.ticker.add(ticker => {
    // if (filter.getFilter().groups[0].getResource(1)) {
    //   filter.getFilter().resources.localUniforms.uniforms.uEffectWidth = filter.getFilter().groups[0].getResource(1).width;
    // }
    filter.getFilter().resources.timeUniforms.uniforms.u_time += 0.01 * ticker.deltaTime;
  });
  isPixiActive.value = true
}

onBeforeUnmount(() => {
  if(window.app) {
    window.app.destroy({
      removeView: true
    })
  }
})
onMounted(() => {
  init()
})
onUnmounted(() => {
  console.log('onUnmount')
})
const shaderTitle = ref('WEBGL.NANONUM.COM')
const onClick = (shader, title) => {
  filter.setFragment(shader)
  shaderTitle.value = title
}
</script>
<template>

  <div class="c-site-title"><a href="mailto:nanonum@gmail.com">nanonum@gmail.com</a></div>

  <p class="c-shader-title">{{ shaderTitle }}</p>


</template>

<style scoped>
</style>
