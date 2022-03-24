let trnsl_hash = window.location.hash;

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
	
});

let go_back_from_port_page = document.querySelectorAll('.go_back_from_port_page');
let go_back_from_port_page_fte = document.querySelectorAll('.go_back_from_port_page_fte');
let stay_on_port_page_nav = document.querySelectorAll('.stay_on_port_page_nav');
let trnsl_port_to_about_nav = document.querySelectorAll('.trnsl_port_to_about_nav');
let go_back_from_port_page_ser = document.querySelectorAll('.go_back_from_port_page_ser');
let go_to_contact_page = document.querySelectorAll('.go_to_contact_page');

trnsl_port_to_about_nav.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_hash == '#srb') {
            window.open('about_us.html#srb', '_self');
        }
        else if(trnsl_hash == '#ger') {
            window.open('about_us.html#ger', '_self');
        }
        else {
            window.open('about_us.html', '_self');
        }
    })
})

go_back_from_port_page.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_hash == '#srb') {
            window.open('index.html#srb', '_self');
        }
        else if(trnsl_hash == '#ger') {
            window.open('index.html#ger', '_self');
        } 
        else {
            window.open('index.html', '_self');
        }
    });

});

let scrollY = window.scrollY;


go_back_from_port_page_fte.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_hash == '#srb') {
            window.open('index.html#srb_wte', '_self');
            window.scrollBy(0, 200);
        }
        else if(trnsl_hash == '#ger') {
            window.open('index.html#ger_wte', '_self');
            window.scrollBy(0, 200);
        }
        else {
			window.location.href = 'index.html#second_div_h';
        }
    });

});

go_back_from_port_page_ser.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_hash == '#srb') {
            window.open('index.html#srb_ser', '_self');
            window.scrollBy(0, 800);
        } 
        else if(trnsl_hash == '#ger') {
            window.open('index.html#ger_ser', '_self');
            window.scrollBy(0, 800);
        }
        else {
			window.location.href = 'index.html#services_h';
        }
    });

});

stay_on_port_page_nav.forEach(e => {
    e.addEventListener('click', () => {
        location.reload();
    })
});

//go to contact page

go_to_contact_page.forEach(e => {
    e.addEventListener('click', () => {
        if(trnsl_hash == '#srb') {
            window.open('contact.php#srb', '_self');
        }
        else if(trnsl_hash == '#ger') {
            window.open('contact.php#ger', '_self');
        }
        else {
            window.open('contact.php', '_self');
        }
    })
})

//Portfolio Slider

let portfolio_nav = document.querySelector("#portfolio_nav");
let port_circle = document.querySelector('#port_page_circle');
let port_page_slider_text = document.querySelector('#port_page_slider_text');
let port_page_port_div_des = document.querySelector('.port_page_port_div_des'); 
let port_page_port_div_dev = document.querySelector('.port_page_port_div_dev'); 

let interval_1;
let interval_2;
let x = 0;
let y = 0;

portfolio_nav.addEventListener('click', () => {
    if(y == 0) {
        interval_1 = setInterval(() => {
            if(x >= 12) {
                   clearInterval(interval_1);   
            }
            else {
                x++;
                port_circle.style.marginLeft = x + 'rem';
                setTimeout(() => {
                    port_page_slider_text.innerHTML = 'Print';
                    port_page_slider_text.style.color = 'var(--mainOrange)';
                    port_page_slider_text.style.marginLeft = '-1.5rem';
                    portfolio_nav.style.border = "3px solid var(--mainOrange)";
                    port_circle.style.background = 'var(--mainOrange)';
                }, 200);
            }
        }, 5);

        port_page_port_div_dev.classList.add('inactive');
        port_page_port_div_des.classList.add('active');


        y = y+1;
    }
    else if(y == 1) {
        interval_1 = setInterval(() => {
            if(x <= 1) {
                   clearInterval(interval_1);   
            }
            else {
                x--;
                port_circle.style.marginLeft = x - 0.3  + 'rem';
                setTimeout(() => {
                    port_page_slider_text.innerHTML = 'Web';
                    port_page_slider_text.style.color = 'var(--mainDBlue)';
                    port_page_slider_text.style.marginLeft = '.1rem';
                    portfolio_nav.style.border = "3px solid var(--mainDBlue)";
                    port_circle.style.background = 'var(--mainDBlue)';
                }, 200);
            }
        }, 5);
        
        port_page_port_div_des.classList.remove('active');
        port_page_port_div_dev.classList.remove('inactive');
        y = y-1;
    }
})

let port_page_img_wrapper = document.querySelectorAll('.port_page_img_wrapper');
let imgs_container = document.querySelectorAll('.imgs_container');

port_page_img_wrapper.forEach(e => {
    e.addEventListener('mouseover', ee => {
        e.style.display = 'none';
    })
})

imgs_container.forEach(e => {
    e.addEventListener('mouseout',() => {
        port_page_img_wrapper.forEach(ee => {
            ee.style.display = 'block';
        })

    })
})


// Footer Logo

let footer_logo = document.querySelector('#footer_logo');

footer_logo.addEventListener('click', () => {
    if(trnsl_hash == '#srb') {
	    window.open('index.html#srb', '_self');
    }
    else {
        window.open('index.html', '_self');
    }
})

let footer_stay_on_port_page = document.querySelector('.footer_stay_on_port_page');

footer_stay_on_port_page.addEventListener('click', () => {
    location.reload();
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

//translate helper

let trnsl_srb_x = window.location.href;
console.log(trnsl_srb_x);

let trnsl_srb_y = trnsl_srb_x.indexOf('#');

let trnsl_srb_z = trnsl_srb_x.slice(trnsl_srb_y, trnsl_srb_x.length);

let trnsl_srb_count_sites = 39;
let trnsl_srb_count_nav = 0;
let trnsl_srb_count_mini_nav = 0;
let trnsl_footer_nav_count = 35;



let trnsl_port_page_nav = document.querySelectorAll('.trnsl_port_page_nav');
let trnsl_port_page_mini_nav = document.querySelectorAll('.trnsl_port_page_mini_nav');
let trnsl_port_page_main = document.querySelector('.trnsl_port_page_main');
let trnsl_port_page_sites = document.querySelectorAll('.trnsl_port_page_sites');
let trnsl_port_page_footer = document.querySelector('.trnsl_port_page_footer');
let trnsl_footer_nav = document.querySelectorAll('.trnsl_footer_nav');

if(trnsl_srb_z == '#srb') {
    fetch('translate_srb.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        trnsl_port_page_nav.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_nav];
            trnsl_srb_count_nav++;
        });

        trnsl_port_page_mini_nav.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_mini_nav];
            trnsl_srb_count_mini_nav++;
        });

        trnsl_port_page_main.innerHTML = data[19];

        trnsl_port_page_sites.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_sites];
            trnsl_srb_count_sites++;
        });

        trnsl_port_page_footer.innerHTML = data[34];

        footer_icons.style.marginLeft = '-14.5rem';

        trnsl_footer_nav.forEach(e => {
            e.innerHTML = data[trnsl_footer_nav_count];
            trnsl_footer_nav_count++;
        })

    })
}

else if(trnsl_srb_z == '#ger') {
    fetch('translate_ger.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        trnsl_port_page_nav.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_nav];
            trnsl_srb_count_nav++;
        });

        trnsl_port_page_mini_nav.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_mini_nav];
            trnsl_srb_count_mini_nav++;
        });

        trnsl_port_page_main.innerHTML = data[19];

        trnsl_port_page_sites.forEach(e => {
            e.innerHTML = data[trnsl_srb_count_sites];
            trnsl_srb_count_sites++;
        });

        trnsl_port_page_footer.innerHTML = data[34];

        footer_icons.style.marginLeft = '-14.5rem';

        trnsl_footer_nav.forEach(e => {
            e.innerHTML = data[trnsl_footer_nav_count];
            trnsl_footer_nav_count++;
        })

    })
}