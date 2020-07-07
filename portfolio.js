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
            if(x >= 31) {
                   clearInterval(interval_1);   
            }
            else {
                x++;
                port_circle.style.marginLeft = x + 'rem';
                setTimeout(() => {
                    port_page_slider_text.innerHTML = 'Web Design';
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
            if(x <= 0) {
                   clearInterval(interval_1);   
            }
            else {
                x--;
                port_circle.style.marginLeft = x + 'rem';
                setTimeout(() => {
                    port_page_slider_text.innerHTML = 'Web Development';
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

let world_traverse_galery = document.querySelector('#worldTraverse_1')

let gal = 1;

let interval;

interval = setInterval(() => {
	if( x > 8) {
		x = 1;
	}
	else {
		world_traverse_galery.src = `Images/Portfolio_page/Sites/worldTraverse_${x}.jpg`;
		x++;
	}
}, 2000)

if(x === 10) {
	clearInterval(interval);
};


// Footer Logo

let footer_logo = document.querySelector('#footer_logo');

footer_logo.addEventListener('click', () => {
	window.open('index.html', '_self');
})