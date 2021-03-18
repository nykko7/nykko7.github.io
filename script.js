let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

let themeReference = document.getElementById('theme-style');

for (let i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', (event) => {
		let mode = event.target.dataset.mode;
		setTheme(mode);
	});
}

const setTheme = (mode) => {
	if (mode == 'blue') {
		themeReference.href = 'blue.css';
	} else if (mode == 'light') {
		themeReference.href = 'default.css';
	} else if (mode == 'green') {
		themeReference.href = 'green.css';
	} else if (mode == 'purple') {
		themeReference.href = 'purple.css';
	}

	localStorage.setItem('theme', mode);
};

if (theme == null) {
	setTheme('blue');
} else {
	setTheme(theme);
}

let buttons = document.getElementsByClassName('navigation-link');
[].forEach.call(buttons, (button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		let target = e.currentTarget.getAttribute('href');

		document.querySelector(target).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

// Button to Top:
//Get the button:
mybutton = document.getElementById('toTopButton');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	window.scroll({ top: 0, behavior: 'smooth' });
}
