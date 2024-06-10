// libNN.ResizeHelper.js 2023/01
// add throttle

let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let callbacks = [];
let running = false;
import { throttle } from 'throttle-debounce'

let resize = function () {
  if (!running) {
    running = true;

    if (window.requestAnimationFrame) {

      window.requestAnimationFrame(runCallbacks);
    } else {
      setTimeout(runCallbacks, 66);
    }
  }
};

let runCallbacks = function () {
  callbacks.forEach(function (callback) {
    callback(this);
  });

  running = false;
};

let addCallback = function (callback) {
  if (callback) {
    callbacks.push(callback);
  }
};

class ResizeHelper {
  constructor(callback, frameRate){
    this.frameRate = frameRate
    if (!callbacks.length) {
      window.addEventListener('resize', throttle(this.frameRate, resize));

    }
    addCallback(callback);
  }
  init() {
    resize()
  }
  destroy() {
    // console.log('destroy');
    window.removeEventListener('resize', resize);

  }
}

export default ResizeHelper;
