// Burger menu including left nav links

const leftNavLinks = document.querySelectorAll('.left-nav')


icons.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

leftNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
})

// h1 store title animation on mouseenter

const store = document.querySelector('#store')
const storeTitleToShow = document.querySelector('.storeTitle')

store.addEventListener('mouseenter', (e) => {
    storeTitleToShow.classList.add('revealStoreTitle')

})