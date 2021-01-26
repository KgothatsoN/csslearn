//Retrieve element and store first element from array as variable
const hamburgerButton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// On clicking hamburger
hamburgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})