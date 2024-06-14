<script setup>
import { watch, onMounted, reactive, ref, onBeforeUnmount, onUnmounted } from 'vue';
import { Application, Sprite, Point, DisplacementFilter, Filter, GlProgram, Graphics } from 'pixi.js';
import FilterHelper from '../includes/FilterHelper.js'
// import Image from '../components/Image.vue';
import vertex from '../default.vert';
const getFilename = (path) => {
  const url = new URL(path, location)
  return (path.split('/').pop())
}

const shaderTitle = ref('WEBGL.NANONUM.COM')
const props = defineProps({
  shader: String
})
// Vue
const isShaderActive = ref(false)
let filter

const update = (ticker) => {
  filter.getFilter().resources.timeUniforms.uniforms.u_time += 0.01 * ticker.deltaTime;
}

const onMouseMove = (e) => {
  filter.getFilter().resources.localUniforms.uniforms.u_mouse = [e.clientX, e.clientY];
}

async function init() {


  window.background = new Application();
  await window.background.init({
    id: 'canvas_background',
    background: '#000',
    backgroundAlpha: 0,
    resizeTo: window,
    resolution: window.devicePixelRatio
  });
  const shader = props.shader ?? `#version 300 es
    precision highp float;
    uniform float u_time;// 0-1
    out vec4 fragColor;
    void main(){
      fragColor = vec4(0.0, 0.0, pow(sin(u_time * 4.41) * 0.5 + 0.5, .4), 1.0);
    }`

  // Rectangle
  filter = new FilterHelper({
    stage: window.background.stage,
    fragment: shader,
    vertex: vertex,
    uniforms: {},
  })
  window.background.stage.filters = [filter.getFilter()];
  window.background.ticker.maxFPS = 60
  window.background.ticker.add(update);

  window.background.canvas.setAttribute('id', 'canvas_app')
  document.body.appendChild(window.background.canvas);

  window.addEventListener('mousemove', onMouseMove)

  isShaderActive.value = true
  
}
onMounted(() => {
  // console.log('%cMOUNT', 'color: red;')
  init(props.shader)
})

onBeforeUnmount(() => {
  isShaderActive.value = false
  if (window.background.ticker) {
    // console.log('removeticker')
    window.background.ticker.remove(update);
  }
  if (window.background) {
    window.background.destroy({
      removeView: true,
      stageOptions: {
        children: true,
        texture: true,
        baseTexture: true,
      }
    })
  }
})
onUnmounted(() => {
  // console.log('onUnmount', window.background)
  filter.destroy()
  window.background = null
  window.removeEventListener('mousemove', onMouseMove)
})

watch(() => props.shader, () => {
  if(isShaderActive.value) {
    filter.setFragment(props.shader)
  }

  // hoge.value = props.hoge;
});
</script>
<template>
</template>

<style scoped>
.shader {
  position: fixed;
  top: 40px;
  left: 40px;
  text-align: left;
  pointer-events: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  opacity: .4;
}
</style>
