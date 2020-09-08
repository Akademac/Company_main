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

if(window.matchMedia("(max-width: 800px)").matches) { //great f
	setTimeout(() => {
		desk.src = 'Images/desk.png'
	}, 800);
}
else {
	setTimeout(() => {
		desk.src = 'Images/desk.png'
	}, 4800);
}

//second div

let second_div_third = document.querySelector('#second_div_third');
let second_div_third_p = document.querySelector('#second_div_third_p');

second_div_third.addEventListener('mouseover', () => {
	second_div_third_p.innerHTML = `If you are not satisfied with your delivery,
	our team of designers will change everything you do not like
even if it is the smallest thing, you have the opportunity for countless revisions`;
});

second_div_third.addEventListener('mouseout', () => {
	second_div_third_p.innerHTML = `If you are not satisfied with your delivery,
	our team of designers will change everything you do not like...<!--y
even if it is the smallest thing, you have the opportunity for countless revisions-->	`;
});


//Portfolio galery

let portfolio_img = document.querySelector('#portfolio_img');

let x = 1

let interval;

interval = setInterval(() => {
	if( x > 10) {
		x = 1;
	}
	else {
		portfolio_img.src = `Images/port_img_${x}.jpg`;
		x++;
	}
}, 1500)

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
	 load or page zones are replaced with...<!-- new page fragments 
   loaded from server on demand, making the experience more
	continuous and fluid for the user.-->`
});

let logo_design = document.querySelector('#logo_design');
let logo_design_p = document.querySelector('#logo_design_p');

logo_design.addEventListener('mouseover', () => {
	logo_design_p.innerHTML = `The logo plays a very important role when
	it comes to the success of your business.
	We deliever a professionaly designed logo
	 that will make your brand stand out among others.`;
});

logo_design.addEventListener('mouseout', () => {
	logo_design_p.innerHTML = `The logo plays a very important role when
	it comes to the success of your business.
	We deliever a professionaly designed logo... <!--
	 that will make your brand stand out among others -->`;
});

let service_branding = document.querySelector('#service_branding');
let service_branding_p = document.querySelector('#service_branding_p');


service_branding.addEventListener('mouseover', () => {
	service_branding_p.innerHTML = `Brand design is all about creating a brand identity that
	 perfectly reflects your brand.
	We can create elements that shape your company’s branding design and 
	represent your brand’s personality. In addition to a logo, branding design can include marketing collateral, 
	websites, menus, uniforms and even more.`;
});

service_branding.addEventListener('mouseout', () => {
	service_branding_p.innerHTML = `Brand design is all about creating a brand identity that
	 perfectly reflects your brand.
	We can create elements that shape your company’s...<!--  branding design and 
	represent your brand’s personalityIn addition to a logo, branding design can include marketing collateral, 
	websites, menus, uniforms and even more.-->`;
});

//Go to Portfolio

let portfolio_btn = document.querySelector('#portfolio_btn');

portfolio_btn.addEventListener('click', () => {
	window.open('portfolio.html', '_self');
});


//Go to Contact

let main_btn = document.querySelector('#main_btn');

main_btn.addEventListener('click', () => {
	window.open('contact.php', '_self');
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