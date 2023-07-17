// Burger menu including left nav links

const leftNavLinks = document.querySelectorAll('.left-nav')
const icon = document.querySelector('#icons')
const navbar = document.querySelector('#navbar');

let icons;
icon.addEventListener('click', () => {
  navbar.classList.toggle('active')
})

leftNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active')
  })
})

// h1 store title animation on mouseenter

const store = document.querySelector('#store')
const storeTitleToShow = document.querySelector('#store_title')

store.addEventListener('mouseenter', (e) => {
  storeTitleToShow.classList.add('reveal_store_title')
})