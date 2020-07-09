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
            if(x >= 26) {
                   clearInterval(interval_1);   
            }
            else {
                x++;
                port_circle.style.marginLeft = x + 'rem';
                setTimeout(() => {
                    port_page_slider_text.innerHTML = 'Print';
                    portfolio_nav.style.background = "var(--mainDBlue)";
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
            if(x <= 2.8) {
                   clearInterval(interval_1);   
            }
            else {
                x--;
                port_circle.style.marginLeft = x + 'rem';
                setTimeout(() => {
                    port_page_slider_text.innerHTML = 'Web';
                    portfolio_nav.style.background = "var(--mainOrange)";
                    port_circle.style.background = 'var(--mainDBlue)';
                }, 200);
            }
        }, 5);
        
        port_page_port_div_des.classList.remove('active');
        port_page_port_div_dev.classList.remove('inactive');
        y = y-1;
    }
})

//Portfolio Galery

// let world_traverse_galery = document.querySelector('#worldTraverse_1')

// let gal = 1;

// let interval;

// interval = setInterval(() => {
// 	if( x > 8) {
// 		x = 1;
// 	}
// 	else {
// 		world_traverse_galery.src = `Images/Portfolio_page/Sites/worldTraverse_${x}.jpg`;
// 		x++;
// 	}
// }, 2000)

// if(x === 10) {
// 	clearInterval(interval);
// };


// Footer Logo

let footer_logo = document.querySelector('#footer_logo');

footer_logo.addEventListener('click', () => {
	window.open('index.html', '_self');
})