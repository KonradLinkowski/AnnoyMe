const requestLock = e => {
  canvas.requestPointerLock()
  if (e) {
    e.preventDefault()
  }
}
const canvas = document.querySelector('canvas')
document.body.addEventListener('click', requestLock)
document.body.addEventListener('keydown', requestLock)
requestLock()
