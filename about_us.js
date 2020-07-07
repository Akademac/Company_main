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

window.addEventListener('scroll', () =>{
        mini_nav.classList.remove('act');
		burger.src = 'Images/burger_2.png';
        

})

//home div 


let portf_btn = document.querySelector('#about_us_homeDiv_port');
let cont_btn = document.querySelector('#about_us_homeDiv_cont');

portf_btn.addEventListener('click', () => {
    window.open('portfolio.html', '_self')
})


cont_btn.addEventListener('click', () => {
    window.open('contact.html', '_self')
})