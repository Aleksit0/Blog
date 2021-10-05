const toggleSwitch = document.querySelector('#darkmode-toggle');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
	enableDarkMode();
	toggleSwitch.setAttribute('checked', '');
}

toggleSwitch.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
