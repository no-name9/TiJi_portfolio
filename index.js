const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('--active');
	document.querySelector('.burger-content').classList.toggle('--active');
});

new Splide('.section-2 .splide', {
	type: 'loop',
}).mount();

const sect7Splide = new Splide('.section-7__cards.splide', {
	type: 'loop',
	perPage: 3,
	perMove: 1,
	gap: '40px',
	cloneStatus: false,
	breakpoints: {
		828: {
			// perPage: 2,
		},
	},
}).mount();

const section7Buttons = document.querySelectorAll('.section-7__buttons button');
sect7Splide.on('move', checkArrows)
sect7Splide.on('dragging', checkArrows)

function checkArrows() {
	if (
		getComputedStyle(
			document.querySelector('.section-7 .splide')
		).getPropertyValue('--hide-arrows') == 1
	) {
		document.querySelector('.section-7 .splide__arrows').style.display = 'none';
	}
}

sect7Splide.on('moved', () => {
	document.querySelector('.section-7 .splide__arrows').style.display = 'flex';
});

section7Buttons.forEach(function (button) {
	button.addEventListener('click', function () {
		section7Buttons.forEach(function (btn) {
			btn.classList.remove('--active');
		});
		button.classList.add('--active');
	});
});
