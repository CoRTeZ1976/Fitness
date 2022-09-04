let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu__body');

menuBtn.addEventListener('click', function (){
	menu.classList.toggle('open');
	menuBtn.classList.toggle('open');
})