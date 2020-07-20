//nav

let burger = document.querySelector('#fa-bars');
let mini_nav = document.querySelector('.mini_navigation');
let mini_nav_a = document.querySelectorAll('.mini_nav_a');


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
			mini_nav_a.forEach(e => {
				e.classList.remove('mini_nav_a_act');
			});
	}
	else {
		mini_nav.classList.add('act');
		mini_nav_a.forEach(e => {
			e.classList.add('mini_nav_a_act');
		});
	}
	
})

//Animation

let desk = document.querySelector('#desk');

setTimeout(() => {
	desk.src = 'Images/desk.png'
}, 4800);

//second div

let second_div_third = document.querySelector('#second_div_third');
let second_div_third_p = document.querySelector('#second_div_third_p');

second_div_third.addEventListener('mouseover', () => {
	second_div_third_p.innerHTML = `<p id='second_div_third_p'>If you are not satisfied with your delivery,
	our team of designers will change everything you do not like
even if it is the smallest thing, you have the opportunity for countless revisions</p>	`;
});

second_div_third.addEventListener('mouseout', () => {
	second_div_third_p.innerHTML = `<p id='second_div_third_p'>If you are not satisfied with your delivery,
	our team of designers will change everything you do not like...<!--y
even if it is the smallest thing, you have the opportunity for countless revisions--></p>	`;
});


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

//services
let services_web_development = document.querySelector('#services_web_development');
let services_web_development_p = document.querySelector('#services_web_development_p');

services_web_development.addEventListener('mouseover', () => {
	services_web_development_p.innerHTML = `We deliver fully functional and professional designed websites 
	and applications, that offer end users invariably perfect experience 
	across desktops, smartphones, and tablets.
	Beside that we modernize and completly redesign your unfriendly and 
	old-fashioned web sites and аdjust them to answer modern trends.`;
});

services_web_development.addEventListener('mouseout', () => {
	services_web_development_p.innerHTML = `We deliver fully functional and professional designed websites 
	and applications, that offer end users invariably perfect experience 
	across...<!--desktops, smartphones, and tablets.
	Beside that we modernize and completly redesign your unfriendly and 
	old-fashioned web sites and аdjust them to answer modern trends.-->`;
});

let services_single_page = document.querySelector('#services_single_page');
let services_single_page_p = document.querySelector('#services_single_page_p');



services_single_page.addEventListener('mouseover', () => {
	services_single_page_p.innerHTML = `A single page website is one that fits on a single page.
	Single page websites are fully loaded in the initial page
	 load or page zones are replaced with new page fragments 
   loaded from server on demand, making the experience more
	continuous and fluid for the user.`
});


services_single_page.addEventListener('mouseout', () => {
	services_single_page_p.innerHTML = `A single page website is one that fits on a single page.
	Single page websites are fully loaded in the initial page
	 load or...<!-- page zones are replaced with new page fragments 
   loaded from server on demand, making the experience more
	continuous and fluid for the user.-->`
});


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

let footer_logo = document.querySelector('#footer_logo');

footer_logo.addEventListener('click', () => {
	window.open('index.html', '_self');
})

//page scroll animations

let icon_alarm_left = document.querySelector('.icon_alarm_left');
let icon_alarm_right = document.querySelector('.icon_alarm_right');
let truck = document.querySelector('.second_div_truck');
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
	truck.classList.add('second_div_truck_anim');
	second_div_pen.classList.add('second_div_pen_anim');
	second_div_ruler.classList.add('second_div_ruler_anim');
}; 