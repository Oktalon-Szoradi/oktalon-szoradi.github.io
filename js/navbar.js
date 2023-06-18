const navbar = document.querySelector('.navbar')
const navbarMenuHolder = document.querySelector('.navbar-menu-holder')
// const navbarMenu = document.querySelector('.navbar-menu')
const navbarMenuButton = document.querySelector('.navbar-menu-button')
const navbarMenuUnderlay = document.querySelector('.navbar-menu-underlay')

const toggleNavbarMenu = () => {
  navbar.classList.toggle('navbar-menu-isopen')
  navbarMenuButton.classList.toggle('active')
  navbarMenuHolder.classList.toggle('nav-hidden')
  // navbarMenu.classList.toggle('hidden')
  // navbarMenuUnderlay.classList.toggle('hidden')
}

navbarMenuButton.addEventListener('click', toggleNavbarMenu)
navbarMenuUnderlay.addEventListener('click', toggleNavbarMenu)
