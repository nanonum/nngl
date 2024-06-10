<script setup>
import { onMounted, reactive, ref, onBeforeUnmount, onUnmounted } from 'vue';
import { Application, Sprite, Point, DisplacementFilter, Filter, GlProgram, Graphics } from 'pixi.js';
import FilterHelper from './includes/FilterHelper.js'
import Image from './components/Image.vue';
import vertex from './default.vert';




// PIXI
const isPixiActive = ref(false)
let modules = ref();
modules.value = import.meta.glob('/src/shaders/**/*.frag', { eager: true })

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
  window.ui.ticker.maxFPS = 30

  window.app = new Application();
  await window.app.init({
    id: 'app',
    background: '#000',
    backgroundAlpha: 0,
    resizeTo: window,
    resolution: 1
  });

  window.app.canvas.setAttribute('id', 'canvas_app')
  window.ui.canvas.setAttribute('id', 'canvas_ui')

  document.body.appendChild(window.app.canvas);
  document.body.appendChild(window.ui.canvas);


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

onMounted(() => {
  Object.keys(modules.value).forEach(d => {
    console.log(d)
  })

  init()

})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
  if(window.app) {
    window.app.destroy({
      removeView: true
    })
  }
  if(window.ui) {
    window.ui.destroy({
      removeView: true
    })
  }
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

  <div style="height: 20vh;"></div>
  <h2>SHADERS</h2>
  <ul class="p-gallery" v-if="isPixiActive">
    <template v-for="(module, key) in modules">
      <li class="p-gallery__item" @mouseenter="onClick(module.default, getFilename(key))" v-if="getFilename(key).indexOf('_') !== 0">
        <div class="item__container">
          <Image :shader="module.default" :width="110" :height="110" :alt="getFilename(key)" />
        </div>
      </li>
    </template>
  </ul>

  <div style="height: 20vh;"></div>

</template>

<style scoped>
</style>
