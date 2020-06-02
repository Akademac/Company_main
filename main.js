//nav

let burger = document.querySelector('#fa-bars');
let mini_nav = document.querySelector('.mini_navigation');


burger.addEventListener('click', () => {
	let burger_src = burger.getAttribute('src');

	
	if(burger_src == 'Images/burger_2.png') {
		burger.src = 'Images/burger_1.png';
	}
	
	if(burger_src == 'Images/burger_1.png') {
		burger.src = 'Images/burger_2.png';
	}

	if(mini_nav.classList.contains('act')) {
		mini_nav.classList.remove('act');
	}
	else {
		mini_nav.classList.add('act');
	}
	
})

//Animation

let desk = document.querySelector('#desk');

setTimeout(() => {
	desk.src = 'Images/desk.png'
}, 4800);




//Portfolio galery

let portfolio_img = document.querySelector('#portfolio_img');

let x = 1

let interval;

interval = setInterval(() => {
	if( x > 3) {
		x = 1;
	}
	else {
		portfolio_img.src = `Images/port_img_${x}.jpg`;
		x++;
	}
}, 2000)

if(x === 10) {
	clearInterval(interval);
};


