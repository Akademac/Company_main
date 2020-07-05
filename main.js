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


//Go to Portfolio

let portfolio_btn = document.querySelector('#portfolio_btn');

portfolio_btn.addEventListener('click', () => {
	window.open('portfolio.html', '_self');
});


//Go to Contact

let main_btn = document.querySelector('#main_btn');

main_btn.addEventListener('click', () => {
	window.open('contact.html', '_self');
});


//page scroll animations

let icon_alarm_left = document.querySelector('.icon_alarm_left');
let icon_alarm_right = document.querySelector('.icon_alarm_right');
let small_alarm_needle = document.querySelector('.small_alarm_needle');
let second_div_pen = document.querySelector('.second_div_pen');
let second_div_ruler = document.querySelector('.second_div_ruler');

window.addEventListener('scroll', () => {
	let scrollY = window.scrollY;
	console.log(scrollY);

	if(scrollY > 500) {
		expects_anim();
	}
});


let expects_anim = () => {
	icon_alarm_left.classList.add('icon_alarm_left_anim');
	icon_alarm_right.classList.add('icon_alarm_right_anim');
	small_alarm_needle.classList.add('small_alarm_needle_anim');
	second_div_pen.classList.add('second_div_pen_anim');
	second_div_ruler.classList.add('second_div_ruler_anim');
}; 