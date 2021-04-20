const hamburger_icon = document.querySelector(
	'#nav-bar .nav-bar .nav-list .hamburger'
);
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});

// const card = document.querySelectorAll('.card-holder');
// const hidden = document.getElementsByClassName('hidden');
// const overlay = document.querySelectorAll('.overlay');

// card.forEach((card) => {
// 	card.addEventListener('mouseover', function () {
// 		overlay.forEach((overlay) => {
// 			overlay.classList.remove('hidden');
// 		});
// 	});
// });
// card.addEventListener('mouseout', function () {
// 	overlay.classList.add('hidden');
// });
