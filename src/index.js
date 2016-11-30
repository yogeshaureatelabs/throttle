import raf from 'raf'

// Throttle with Request animation frame
export default (type, callback) => {
  let ticking = false
  const cb = (event) => {
    if (ticking) return
    ticking = true
    raf(() => {
      callback()
      ticking = false
    })
  }
  window.addEventListener(type, cb)
}
