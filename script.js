'use strict';

function submitForm() {
	const form = document.querySelector('.contact-form');
	form.submit();
	form.reset();
	return false;
}

var app = document.getElementById('typewriter-container');

var typewriter = new Typewriter(app, {
	loop: true,
	delay: 85,
});

typewriter
	.pauseFor(500)
	.typeString(
		'I am  <span style="color: #008cff;"><strong>web developer</strong></span>'
	)
	.pauseFor(300)
	.deleteChars(13)
	.typeString(
		'<span style="color: #27ae60;"><strong>UI/UX Designer</strong></span>'
	)

	.pauseFor(1000)
	.start();
