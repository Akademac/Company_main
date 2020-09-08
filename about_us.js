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

//home div 


let portf_btn = document.querySelector('#about_us_homeDiv_port');
let cont_btn = document.querySelector('#about_us_homeDiv_cont');

portf_btn.addEventListener('click', () => {
    window.open('portfolio.html', '_self')
})


cont_btn.addEventListener('click', () => {
    window.open('contact.php', '_self')
})

//links

let links = document.querySelectorAll('.links');

links.forEach(e => {
	e.addEventListener('click', ee => {
		let link = ee.target.dataset.links;
		if(link == 1) {
			window.open('https://www.facebook.com/Webeldes-613056809352153')
		}
		else if(link == 2) {
			window.open('https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fwebeldes2020%3Figshid%3D1qwfoxahqmcrn%26fbclid%3DIwAR3dzGXIbBJygc0fg6D4GFW9KohNyjmDdxivL31GqpbVu1CTxP7-8WXq53s&h=AT1JTpVAMDbit8Oa6eH3UGSREl5er4TC6DRtRdIJBG1YburN8ffqYIYqrcdbcp6tEbZ46bT3qZOWOaP-IYXR-fqum8A-P5dVn6d2m6aNRU9_27DrK-4zBZTKVIq5cntL_5sdEg')
		}
		else if(link == 3) {
			window.open('https://www.linkedin.com/company/webeldes/');
		} 
		else if(link == 4) {
			window.open('https://twitter.com/webeldes');
		}

	})
})