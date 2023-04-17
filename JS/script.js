const scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navbar-example',
});
const navList = document.querySelector('.navbar-collapse');
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	function addShadow() {
		if (window.scrollY >= 50) {
			console.log(nav.classList.add('shadow-bg'));
		} else {
			console.log(nav.classList.remove('shadow-bg'));
		}
	}


allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

















	window.addEventListener('scroll', addShadow);
});
