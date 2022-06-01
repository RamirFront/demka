const $burger = document.querySelector('.menu-trigger')
const $nav = document.querySelector('.nav')

$burger.addEventListener('click', function(){
  $burger.classList.toggle('active')
  $nav.classList.toggle('active')
})