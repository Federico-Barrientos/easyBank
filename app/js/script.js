const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const  header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function () {
    if(header.classList.contains('open')){ //Close hamburguer menu
      body.classList.remove('nonscroll')
      header.classList.remove('open')
      fadeElems.forEach((element) => {
        element.classList.remove('fade-in')
        element.classList.add('fade-out')
      })
    }
    else { // Open hamburguer menu
      body.classList.add('nonscroll')
      header.classList.add('open')
      fadeElems.forEach((element) => {
        element.classList.add('fade-in')
        element.classList.remove('fade-out')
      })
    }
})