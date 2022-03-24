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


let cont_btn = document.querySelector('#about_us_homeDiv_cont');


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
});

//Translate


let trnsl_srb_x = window.location.href;

let trnsl_srb_y = trnsl_srb_x.indexOf('#');

let trnsl_srb_z = trnsl_srb_x.slice(trnsl_srb_y, trnsl_srb_x.length);

let trnsl_srb_hash = window.location.hash;


let trnsl_srb_count_nav = 0;
let trnsl_srb_count_mini_nav = 0;
let trnsl_steps_count = 49;
let trnsl_footer_nav_count = 35;

let trnsl_about_us_nav = document.querySelectorAll('.trnsl_about_us_nav');
let trnsl_about_us_mini_nav = document.querySelectorAll('.trnsl_about_us_mini_nav');
let trnsl_about_us_h1 = document.querySelector('.trnsl_about_us_h1');
let trnsl_about_us_main = document.querySelector('.trnsl_about_us_main');
let about_us_steps_div_h2 = document.querySelector('#about_us_steps_div_h2');
let trnsl_steps = document.querySelectorAll('.trnsl_steps');
let trnsl_about_us_footer = document.querySelector('.trnsl_about_us_footer');
let trnsl_about_us_footer_nav = document.querySelectorAll('.trnsl_about_us_footer_nav');



if(trnsl_srb_z == '#srb') {
    fetch('translate_srb.json')
    .then(response => {
        return response.json();
	})
	.then(data => {

		trnsl_about_us_nav.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_nav];
            trnsl_srb_count_nav++;
		});
		
		trnsl_about_us_mini_nav.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_mini_nav];
            trnsl_srb_count_mini_nav++;
		});
		trnsl_about_us_h1.innerHTML = data[44];
		trnsl_about_us_main.innerHTML = data[45];
		cont_btn.innerHTML = data[47];
		about_us_steps_div_h2.innerHTML = data[48];

		trnsl_steps.forEach(e => {
            e.innerHTML = data[trnsl_steps_count];
            trnsl_steps_count++;
		});

		trnsl_about_us_footer.innerHTML = data[34];
		footer_icons.style.marginLeft = '-14.5rem';
		
		trnsl_about_us_footer_nav.forEach(e => {
            e.innerHTML = data[trnsl_footer_nav_count];
            trnsl_footer_nav_count++;
		});


	})
}

else if(trnsl_srb_z == '#ger') {
	fetch('translate_ger.json')
    .then(response => {
        return response.json();
	})
	.then(data => {

		trnsl_about_us_nav.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_nav];
            trnsl_srb_count_nav++;
		});
		
		trnsl_about_us_mini_nav.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_mini_nav];
            trnsl_srb_count_mini_nav++;
		});
		trnsl_about_us_h1.innerHTML = data[44];
		trnsl_about_us_main.innerHTML = data[45];
		cont_btn.innerHTML = data[47];
		about_us_steps_div_h2.innerHTML = data[48];

		trnsl_steps.forEach(e => {
            e.innerHTML = data[trnsl_steps_count];
            trnsl_steps_count++;
		});

		trnsl_about_us_footer.innerHTML = data[34];
		footer_icons.style.marginLeft = '-14.5rem';
		
		trnsl_about_us_footer_nav.forEach(e => {
            e.innerHTML = data[trnsl_footer_nav_count];
            trnsl_footer_nav_count++;
		});


	})
}

let go_back_from_about_page = document.querySelectorAll('.go_back_from_about_page');
let trnsl_about_to_port_nav = document.querySelectorAll('.trnsl_about_to_port_nav');
let go_back_from_about_us_wte = document.querySelectorAll('.go_back_from_about_us_wte');
let go_back_from_about_us_ser = document.querySelectorAll('.go_back_from_about_us_ser');
let trnsl_srb_about_us_nav = document.querySelectorAll('.trnsl_srb_about_us_nav');
let go_to_contact_page = document.querySelectorAll('.go_to_contact_page');

go_back_from_about_page.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_srb_hash == '#srb') {
			window.open('index.html#srb', '_self');
		}
		else if(trnsl_srb_hash == '#ger') {
			window.open('index.html#ger', '_self');
		}
        else {
			window.open('index.html', '_self');
        }
    });
});

go_back_from_about_us_wte.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_srb_hash == '#srb') {
            window.open('index.html#srb_wte', '_self');
            window.scrollBy(0, 200);
		}
		else if(trnsl_srb_hash == '#ger') {
            window.open('index.html#ger_wte', '_self');
            window.scrollBy(0, 200);
		}
		else {
			window.location.href = 'index.html#second_div_h';
        }
    });
})

go_back_from_about_us_ser.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_srb_hash == '#srb') {
            window.open('index.html#srb_ser', '_self');
            window.scrollBy(0, 800);
		}
		else if(trnsl_srb_hash == '#ger') {
            window.open('index.html#ger_ser', '_self');
            window.scrollBy(0, 800);
        }
        else {
			window.location.href = 'index.html#services_h';
        }
    });

})

trnsl_about_to_port_nav.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_srb_hash == '#srb') {
            window.open('portfolio.html#srb', '_self');
		}
		else if(trnsl_srb_hash == '#ger') {
            window.open('portfolio.html#ger', '_self');
        }
        else {
            window.open('portfolio.html', '_self');
        }
    })
})

trnsl_srb_about_us_nav.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_srb_hash == '#srb') {
			location.reload();
		}
		else if(trnsl_srb_hash == '#ger') {
			location.reload();
        }
        else {
			window.open('about_us.html', '_self');
        }
    });
});

//go to contact page

go_to_contact_page.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_srb_hash == '#srb') {
            window.open('contact.php#srb', '_self');
		}
		else if(trnsl_srb_hash == '#ger') {
            window.open('contact.php#ger', '_self');
        }
        else {
            window.open('contact.php', '_self');
        }
    })
})