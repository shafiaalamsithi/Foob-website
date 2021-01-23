/*======================== SHOW MENU ====================*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //Validate that variables exist
    if(toggle && nav){
        //We add the show-menu class to the dive tag with thw nav__menu class
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*======================== REMOVE MENU MOBILE ================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ==================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================================== CHANGE BACKGROUND HEAER ===================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport hegth,add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
  
window.addEventListener('scroll', scrollHeader)

/*============================= SHOW SCROLL TOP ==========================*/

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    // When the scroll is higher than 560 viewport hegth,add the show-scroll class to the scroll-top class
    if(this.scrollY >= 500) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
  
window.addEventListener('scroll', scrollTop)



/*======== DARK LIGTH THEME ======*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-Theme'
const iconTheme = 'bx-sun'
//previously selected topic ( if user selected)
const selectedTheme = localStorage.getItem('selected-Theme')
const selectedIcon = localStorage.getItem('selected-icon')
// we obtain the current theme that the interface has by validating the dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
//we validate if the user previouly chose a topic 
if(selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    // Add or remove the dark / icon theme

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentTheme())
})