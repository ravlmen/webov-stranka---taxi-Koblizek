export function initGallery(gallery) {
  const slides = [...gallery.querySelectorAll('.gallery-slide')]
  if (slides.length < 2) return

  const controls = gallery.querySelector('.gallery-controls')
  const counter = gallery.querySelector('.gallery-counter')
  const previous = gallery.querySelector('.gallery-prev')
  const next = gallery.querySelector('.gallery-next')
  const toggle = gallery.querySelector('.gallery-toggle')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let current = 0
  let playing = !reducedMotion.matches
  let hovering = false

  function showSlide(index, announce = false) {
    current = (index + slides.length) % slides.length
    slides.forEach((slide, i) => { slide.hidden = i !== current })
    counter.setAttribute('aria-live', announce ? 'polite' : 'off')
    counter.textContent = `${current + 1} / ${slides.length}`
  }

  function setPlaying(value) {
    playing = value
    toggle.textContent = playing ? 'Pozastavit střídání' : 'Spustit střídání'
  }

  previous.addEventListener('click', () => { setPlaying(false); showSlide(current - 1, true) })
  next.addEventListener('click', () => { setPlaying(false); showSlide(current + 1, true) })
  toggle.addEventListener('click', () => setPlaying(!playing))
  gallery.addEventListener('focusin', (event) => {
    if (event.target !== toggle && !gallery.contains(event.relatedTarget)) setPlaying(false)
  })
  gallery.addEventListener('mouseenter', () => { hovering = true })
  gallery.addEventListener('mouseleave', () => { hovering = false })
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) setPlaying(false)
  })

  showSlide(0)
  setPlaying(playing)
  controls.hidden = false
  window.setInterval(() => {
    if (playing && !hovering && !document.hidden) showSlide(current + 1)
  }, 5000)
}
