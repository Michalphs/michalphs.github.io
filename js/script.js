const toggleBtn = document.querySelector('.nav__toggle');

const toggleNav = function toggleNav() {
	const nav = document.querySelector('.nav');

	nav.classList.toggle('nav--active');
	toggleBtn.classList.toggle('nav__toggle--active');
	toggleBtn.setAttribute('aria-expanded', true);
}

toggleBtn.addEventListener('click', toggleNav, false);

