import charts from './charts.js';

const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body'),
	header = document.querySelector('.header'),
	footer = document.querySelector('.footer');


// =-=-=-=-=-=-=-=-=-=-=-=- <click-events> -=-=-=-=-=-=-=-=-=-=-=-=

body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}


	// =-=-=-=-=-=-=-=-=-=-=-=- <menu-in-header> -=-=-=-=-=-=-=-=-=-=-=-=
	
	if ($('.header__burger')) {
	
		menu.forEach(element => {
			element.classList.toggle('is-mobile-menu-active')
		})
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </menu-in-header> -=-=-=-=-=-=-=-=-=-=-=-=

	
	

})

// =-=-=-=-=-=-=-=-=-=-=-=- </click-events> -=-=-=-=-=-=-=-=-=-=-=-=


document.querySelectorAll(".option-card__button").forEach(button => {
	const card = button.closest(".option-card");
	button.addEventListener("pointerenter", () => {
		card.classList.add("is-hover");
	})
	button.addEventListener("pointerleave", () => {
		card.classList.remove("is-hover");
	})
})


document.querySelectorAll(".auth-form__input").forEach(input => {
	const label = input.closest(".auth-form__label");
	input.addEventListener("focus", () => {
		label.classList.add("is-focus");
		label.classList.remove("is-error");
	})
	input.addEventListener("blur", () => {
		label.classList.remove("is-focus");
	})
})

document.querySelectorAll(".auth-form").forEach(form => {
	form.addEventListener("submit", (event) => {
		event.preventDefault();	
	})
})


// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

let windowSize = 0;

function resize() {

	header && html.style.setProperty("--height-header", header.offsetHeight + "px");
	footer && html.style.setProperty("--height-footer", footer.offsetHeight + "px");
	html.style.setProperty("--vh", (window.innerHeight * 0.01).toFixed(2) + "px");
	if(windowSize != window.innerWidth) {
		html.style.setProperty("--svh", (window.innerHeight * 0.01).toFixed(2) + "px");
	}
	
	windowSize = window.innerWidth;
	
}

resize();

window.addEventListener('resize', resize)

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <charts> -=-=-=-=-=-=-=-=-=-=-=-=

charts();

// =-=-=-=-=-=-=-=-=-=-=-=- </charts> -=-=-=-=-=-=-=-=-=-=-=-=
