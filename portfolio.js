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
	window.open('index.html', '_self');
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