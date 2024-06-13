<script setup>
import {
  ref,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onMounted,
  onUpdated,
  watch
} from 'vue'
// import Intersection from '../modules/_Intersection.js'
import {
  // Container,
  // Application,
  Assets,
  // Text,
  Point,
  // Rectangle,
  Graphics,
  // TextStyle,
  // Color,
  // FillGradient,
  Sprite,
  Filter,
  GlProgram
} from 'pixi.js';

import vertex from '../circle.vert';
// import anime from 'animejs/lib/anime.es.js'
import { updateBound, getBound } from '../includes/functions.ts'

const props = defineProps({
  shader: String,
  alt: String,
  // src: String,
  saturation: {
    type: Number,
    default: 1
  },
  show: Boolean,
  selected: Boolean,
  active: Boolean,
  width: Number,
  height: Number,
  className: String
})

const el = ref()
let background
let circle
const bound = {}
let filter
const sprite = new Sprite()

const update = (ticker) => {
  if (el.value) {
    updateBound(bound, getBound(el.value.getBoundingClientRect()))
    background.x = bound.x;
    background.y = bound.y;
    sprite.x = bound.x;
    sprite.y = bound.y;
    sprite.width = bound.width
    sprite.height = bound.height
  }
  if (props.active === true || !props.selected ) {
    filter.resources.timeUniforms.uniforms.u_time += 0.01 * ticker.deltaTime;
  }
  filter.resources.localUniforms.uniforms.u_position.y = bound.y
  filter.resources.localUniforms.uniforms.u_position.x = bound.x
  filter.resources.localUniforms.uniforms.u_posteffect_mix = (!props.selected || props.active) ? 1.0 : props.saturation
  // filter.resources.localUniforms.uniforms.u_resolution.x = 1920 + bound.x + ticker.deltaTime
  // filter.resources.localUniforms.uniforms.u_position.y = (document.scrollingElement.scrollTop / window.innerHeight)
  // filter.resources.localUniforms.uniforms.u_position.y += 0.001
  // console.log(filter.resources.localUniforms.uniforms.u_resolution)
}

const replaceUniform = (shader) => {
  const adjusted = `
    vec2 aPosition = vec2(
      (gl_FragCoord.x - u_position.x) * u_resolution.x / u_posteffect_viewport.x  ,
      (gl_FragCoord.y - (u_resolution.y - u_position.y ) + u_posteffect_viewport.x) * u_resolution.y / u_posteffect_viewport.x  
    );`
  let tmp = shader
  tmp = tmp.replace(/gl_FragCoord/ig, 'aPosition')
  tmp = tmp.replace(/uniform[\s]*vec2[\s]*u_resolution;/ig, `
    uniform vec2 u_resolution;
    uniform vec2 u_position;
    uniform vec2 u_posteffect_viewport;
    uniform float u_posteffect_mix;
  `)
  tmp = tmp.replace(/void main\([void]*\)[\s]*{/ig, `void main(){${adjusted}`)

  // desaturation
  tmp = tmp.replace(/.*}$/, `fragColor.rgb=mix(vec3(min(1.0,fragColor.r+fragColor.g+fragColor.b))*0.3,fragColor.rgb,u_posteffect_mix);}`)

  return tmp
}


onMounted(async () => {

  const texture = await Assets.load('./vite.svg');

  updateBound(bound, getBound(el.value.getBoundingClientRect()))

  filter = new Filter({
    glProgram: GlProgram.from({
      fragment: replaceUniform(props.shader),
      vertex,
    }),
    resolution: 1,
    resources: {
      localUniforms: {
        u_resolution: {
          value: new Point(window.innerHeight, window.innerHeight), type: 'vec2<f32>'
        },
        u_position: {
          value: new Point(0, 0), type: 'vec2<f32>'
        },
        u_posteffect_viewport: {
          value: new Point(bound.width, bound.height), type: 'vec2<f32>'
        },
        u_posteffect_mix: {
          value: 0.0, type: 'f32'
        },
      },
      timeUniforms: {
        u_time: { value: 0.0, type: 'f32' },
      },
    },
  });
  // console.log('onmounted')
  sprite.x = bound.x
  sprite.y = bound.y
  sprite.width = bound.width
  sprite.height = bound.height
  // console.log(bound.x)


  background = new Graphics()
  circle = background.circle(bound.width / 2, bound.width / 2, bound.width / 2)  //todo resize

  background.fill({ color: 0x000000 })
  // background.x = bound.x;
  // background.y = bound.y;
  // background.width = 100
  // background.height = 100

  sprite.mask = background
  sprite.filters = [filter]
  window.ui.stage.addChild(sprite)

  // viewport.x = props.width || 110
  // viewport.y = props.height || 110
  window.ui.stage.addChild(background)
  filter.resources.localUniforms.uniforms.u_position.y = bound.y
  filter.resources.localUniforms.uniforms.u_position.x = bound.x


  if (window.ui.ticker) {
    window.ui.ticker.add(update);
  }


  window.addEventListener('resize', e => {
    filter.resources.localUniforms.uniforms.u_resolution.x = window.innerHeight
    filter.resources.localUniforms.uniforms.u_resolution.y = window.innerHeight
    // viewport.width = 
    // background.circle(bound.width / 2, bound.width / 2, bound.width / 2)  //todo resize
    circle.x = bound.width / 2
    circle.y = bound.width / 2
    circle.width = bound.width
    circle.height = bound.height
    
    sprite.width = bound.width
    sprite.height = bound.height
    console.log(bound.width)
  })

  // window.addEventListener('mousemove', e => {
  //   filter.resources.localUniforms.uniforms.u_posteffect_mix = e.clientX / window.innerWidth
    
  // })

  // window.addEventListener('scroll', e => {
  //   // console.log(bound.x)
  //   // console.log('scroll', document.scrollingElement.scrollTop / window.innerHeight)
  //   filter.resources.localUniforms.uniforms.u_position.y = bound.y
  //   filter.resources.localUniforms.uniforms.u_position.x = bound.x
  // })

  // window.addEventListener('click', e => {

  //   const from = 1.0//(80 / window.innerWidth)
  //   const to = 0.02// (rect.width + 80 + 1) / window.innerWidth
  //   const duration = 1000 / (bound.width / 960)

  //   anime({
  //     targets: filter.resources.timeUniforms.uniforms,
  //     uFrame: [from, to],
  //     // uFrame: [to, from],
  //     // uTime: [-1, 0],
  //     easing: 'easeOutExpo',
  //     duration: duration ,

  //     complete: e => {
  //       // console.log('end')
  //     }
  //   })
  // })



})

watch(() => props.show, (val) => {
  sprite.visible = val
});
onUnmounted(() => {
  if (window.ui.ticker) {
    window.ui.ticker.remove(update);
  }
  sprite.destroy()

})
</script>

<template>
  <div class="dev">{{ active }}</div>
  <div :class="`js-nnfxline`" ref="el" :width="width" :height="height"></div>
</template>
<style scoped lang="scss">
@use "sass:math";
@use '../sass/functions.scss' as fn;
@import "../sass/reset";

.dev {
  position: absolute;
  background: #000;
  width: 40px;
  height: 14px;
  z-index: 20;
  margin-top: -20px;
  display: none;
}
div {
  @include fn.pc {
    width: 110px;
    height: 110px;
  }

  @include fn.sp {
    width: fn.px(85);
    height: fn.px(85);
  }
}
</style>
