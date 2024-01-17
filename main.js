const navMenu = document.querySelector(".nav_menu"),
    navToggle = document.querySelector(".nav_toggle"),
    navClose = document.querySelector(".nav_close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}


const navLink = document.querySelectorAll(".nav_link")
const linkAction = () => {
    const navMen = document.querySelector(".nav_menu")
    navMen.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction));


const blurHeader = () => {
    const header = document.querySelector(".header")
    this.scrollY >= 50 ? header.classList.add("blur-header")
        : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader);


const scrollUp = () => {
    const scrollUp = document.querySelector(".scrollup")
    this.scrollY >= 350 ? scrollUp.classList.add(".show-scroll")
        : scrollUp.classList.remove(".show-scroll")
}
window.addEventListener("scroll", scrollUp)


const section = document.querySelectorAll("section[id]")
const scrollActive = () => {
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link")
        }
        else {
            sectionClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)
