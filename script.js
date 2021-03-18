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
