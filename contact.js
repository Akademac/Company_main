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


let trnsl_srb_hash = window.location.hash;

console.log(trnsl_srb_hash);

let trnsl_srb_count_nav = 0;
let trnsl_srb_count_mini_nav = 0;
let trnsl_footer_nav_count = 35;

let trnsl_contact_nav = document.querySelectorAll('.trnsl_contact_nav');
let trnsl_contact_mini_nav = document.querySelectorAll('.trnsl_contact_mini_nav');
let trnsl_main_h2 = document.querySelector('.trnsl_main_h2');
let trnsl_p = document.querySelector('.trnsl_p');
let input_name = document.getElementById('input_name');
let input_email = document.getElementById('input_email');
let input_textarea = document.getElementById('textarea');
input_name.value = '';
input_email.value = '';
input_textarea.value = '';
let con_submit = document.querySelector('#con_submit');
let trnsl_footer_p = document.querySelector('.trnsl_footer_p');
let trnsl_contact_footer = document.querySelectorAll('.trnsl_contact_footer');
let mail_sent_p = document.querySelector('#mail_sent_p');

if(trnsl_srb_hash == '#srb') {
	fetch('translate_srb.json')
	.then(response => {
		return response.json();
	})
	.then(data => {

			trnsl_contact_nav.forEach(e => {
				e.innerHTML = data[trnsl_srb_count_nav];
				trnsl_srb_count_nav++;
			});
			
			trnsl_contact_mini_nav.forEach(e => {
				e.innerHTML = data[trnsl_srb_count_mini_nav];
				trnsl_srb_count_mini_nav++;
			});

			trnsl_main_h2.innerHTML = data[57];
			trnsl_p.innerHTML = data[58];
			input_name.placeholder = data[59];
			input_email.placeholder = data[60];
			input_textarea.placeholder = data[61];
			con_submit.innerHTML = data[62]

			trnsl_footer_p.innerHTML = data[34];
			footer_icons.style.marginLeft = '-14.5rem';

			trnsl_contact_footer.forEach(e => {
				e.innerHTML = data[trnsl_footer_nav_count];
				trnsl_footer_nav_count++;
			});

			// mail_sent_p.innerHTML = 'Hvala na kontaktu, javicemo Vam se uskoro!'
	});
} 

else if(trnsl_srb_hash == '#ger') {
	fetch('translate_ger.json')
	.then(response => {
		return response.json();
	})
	.then(data => {

			trnsl_contact_nav.forEach(e => {
				e.innerHTML = data[trnsl_srb_count_nav];
				trnsl_srb_count_nav++;
			});
			
			trnsl_contact_mini_nav.forEach(e => {
				e.innerHTML = data[trnsl_srb_count_mini_nav];
				trnsl_srb_count_mini_nav++;
			});

			trnsl_main_h2.innerHTML = data[57];
			trnsl_p.innerHTML = data[58];
			input_name.placeholder = data[59];
			input_email.placeholder = data[60];
			input_textarea.placeholder = data[61];
			con_submit.innerHTML = data[62]

			trnsl_footer_p.innerHTML = data[34];
			footer_icons.style.marginLeft = '-14.5rem';

			trnsl_contact_footer.forEach(e => {
				e.innerHTML = data[trnsl_footer_nav_count];
				trnsl_footer_nav_count++;
			});

			// mail_sent_p.innerHTML = 'Hvala na kontaktu, javicemo Vam se uskoro!'
	});
}


let go_back_from_con_page = document.querySelectorAll('.go_back_from_con_page');
let go_back_from_contact_wte = document.querySelectorAll('.go_back_from_contact_wte');
let go_back_from_contact_ser = document.querySelectorAll('.go_back_from_contact_ser');
let go_from_con_to_port = document.querySelectorAll('.go_from_con_to_port');
let go_from_con_to_about = document.querySelectorAll('.go_from_con_to_about');
let stay_on_con_page = document.querySelectorAll('.stay_on_con_page');


go_back_from_con_page.forEach(e => {
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

go_back_from_contact_wte.forEach(e => {
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
});


go_back_from_contact_ser.forEach(e => {
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
});

go_from_con_to_port.forEach(e => {
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
});

go_from_con_to_about.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_srb_hash == '#srb') {
            window.open('about_us.html#srb', '_self');
		}
		else if(trnsl_srb_hash == '#ger') {
            window.open('about_us.html#ger', '_self');
		}
        else {
            window.open('about_us.html', '_self');
        }
    })
});

stay_on_con_page.forEach(e => {
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
