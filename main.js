window.addEventListener('scroll', onScroll)
const navigation = document.querySelector('#navigation')
const menu = document.querySelector('.menu')
const backToTopButtonOnScroll = document.querySelector('#backToTopButton')

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(deposition)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  
  const sectionTop = section.offsetTop
  
  const sectionHeight = section.offsetHeight
  
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
      menuElement.classList.add('active')
  }
}


function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove("scroll")
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButtonOnScroll.classList.add("show")
  } else {
    backToTopButtonOnScroll.classList.remove("show")
  }
}

function openMenu() {
  document.body.classList.add('menu-expended')
}

function closeMenu() {
  document.body.classList.remove('menu-expended')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '300',
}).reveal(`
  #home img,
  #home .metric,
  #services header,
  #services .card,
  #deposition header,
  #deposition .depositions-in,
  #about header,
  #about .content,
  #contact header,
  #contact ul li,
  #contact .button,
  #contact img,
  #contact .wrapper iframe,
  footer .logo,
  footer p,
  footer .social-links
  `)