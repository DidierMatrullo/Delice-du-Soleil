const links = document.querySelectorAll('.left-nav')


icons.addEventListener('click', () => {
  navbar.classList.toggle('active')
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active')
  })
})

