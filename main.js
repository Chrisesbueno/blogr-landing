const openMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');
const menuModal = document.querySelectorAll('.menu li')

openMenu.addEventListener('click', () => {
    openMenu.parentElement.classList.add('show')
})

closeMenu.addEventListener('click', () => {
    openMenu.parentElement.classList.remove('show')
})

menuModal.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        element.classList.toggle('modal')
    })
});