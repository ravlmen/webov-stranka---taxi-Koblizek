const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#navigation')
const dropdowns = [...document.querySelectorAll('.dropdown-toggle')]

function closeDropdowns(except) {
  for (const toggle of dropdowns) {
    if (toggle === except) continue
    toggle.setAttribute('aria-expanded', 'false')
    document.getElementById(toggle.getAttribute('aria-controls')).hidden = true
  }
}

for (const toggle of dropdowns) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true'
    closeDropdowns(toggle)
    toggle.setAttribute('aria-expanded', String(!isOpen))
    document.getElementById(toggle.getAttribute('aria-controls')).hidden = isOpen
  })
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-dropdown')) closeDropdowns()
})
navigation.addEventListener('focusout', (event) => {
  if (!navigation.contains(event.relatedTarget)) closeDropdowns()
})

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false')
  navigation.classList.remove('is-open')
  closeDropdowns()
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  navigation.classList.toggle('is-open', !isOpen)
})

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu()
})

document.addEventListener('keydown', (event) => {
  const openDropdown = dropdowns.find(toggle => toggle.getAttribute('aria-expanded') === 'true')
  if (event.key === 'Escape' && openDropdown) {
    closeDropdowns()
    openDropdown.focus()
    return
  }
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu()
    menuButton.focus()
  }
})

document.querySelector('#year').textContent = String(new Date().getFullYear())

const fileInput = document.querySelector('#video-file')
const video = document.querySelector('#intro-video')
const placeholder = document.querySelector('#video-placeholder')
const changeButton = document.querySelector('#change-video')
const status = document.querySelector('#video-status')
let videoUrl

fileInput?.addEventListener('change', () => {
  const file = fileInput.files?.[0]
  if (!file) return
  if (!['video/mp4', 'video/webm', 'video/quicktime'].includes(file.type)) {
    status.textContent = 'Tento formát videa není podporovaný. Vyberte prosím MP4, WebM nebo MOV.'
    fileInput.value = ''
    return
  }
  video.pause()
  if (videoUrl) URL.revokeObjectURL(videoUrl)
  videoUrl = URL.createObjectURL(file)
  video.src = videoUrl
  video.hidden = false
  placeholder.hidden = true
  changeButton.hidden = false
  status.textContent = `Místní náhled: ${file.name}. Video není zveřejněné ani uložené na serveru. Po obnovení stránky se odstraní.`
})

video?.addEventListener('error', () => {
  status.textContent = 'Prohlížeč toto video nedokáže přehrát. Zkuste soubor MP4 s kódováním H.264 nebo WebM.'
  video.hidden = true
  placeholder.hidden = false
})

changeButton?.addEventListener('click', () => fileInput.click())
window.addEventListener('pagehide', () => {
  if (videoUrl) URL.revokeObjectURL(videoUrl)
})
