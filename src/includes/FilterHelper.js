import { Point, Filter, GlProgram, Graphics } from 'pixi.js';
import ResizeHelper from './ResizeHelper.js'

const pixelRatio =  window.devicePixelRatio

class FilterHelper {
  constructor(setting) {


    this.stage = setting.stage
    this.size = new Point(window.innerWidth * pixelRatio, window.innerHeight * pixelRatio)
    this.padding = new Point()
    this.vertex = setting.vertex
    this.init(setting.fragment, this.vertex, setting.uniforms || {})

    this.fill()
    // this.resize = setting.resize
    this.resize()
    this.bind()
  }
  init(fragment, vertex, uniforms) {
    const program = GlProgram.from({
      fragment,
      vertex,
    })
    this.filter = new Filter({
      glProgram: program,
      resolution: pixelRatio,
      resources: {
        localUniforms: Object.assign({
          // u_resolution: { value: pixelRatio, type: 'f32'},
          // uEffectWidth: { value: 0.0, type: 'f32'},
          u_resolution: {
            value: this.size, type: 'vec2<f32>'
          },
        }, uniforms),
        timeUniforms: {
          u_time: { value: 0.0, type: 'f32' },
          u_frame: { value: 0.0, type: 'f32' },
        },
      },
    });
  }
  fill() {
    this.background = new Graphics()
    this.background.rect(0, 0, window.innerWidth, window.innerHeight)  //todo resize
    this.background.fill({ color: 0x000000 })
    this.stage.addChild(this.background)
  }
  bind() {
    new ResizeHelper(e => {
      this.resize()
    })
  }
  setFragment(new_fragment) {
    const program = GlProgram.from({
      fragment: new_fragment,
      vertex: this.vertex,
    })
    // this.filter.glProgram.destroy()
    this.filter.glProgram = program
  }
  resize() {
    this.size.set(
      window.innerWidth * pixelRatio,
      window.innerHeight * pixelRatio
    )

    this.filter.resources.localUniforms.uniforms.u_resolution = this.size;
    this.background.width = this.size.x
    this.background.height = this.size.y
  }
  getFilter() {
    return this.filter
  }
  destroy() {
    // this.filter.glProgram.destroy()
    this.filter.destroy()
  }
}


export default FilterHelper;
