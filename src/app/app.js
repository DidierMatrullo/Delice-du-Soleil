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

const store = document.getElementById("store")
const titleToShow = document.getElementById("store_title")

store.addEventListener('mouseenter', (e) => {
  titleToShow.classList.add('reveal_store_title')
})

