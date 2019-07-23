//Animation

let desk = document.querySelector('#desk');

setTimeout(() => {
	desk.src = 'Images/desk.png'
}, 4800);

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
}