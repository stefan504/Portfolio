'use strict';

const formFunc = () => {
	form.submit();
	form.reset();
	return false;
};

var app = document.getElementById('typewriter-container');

var typewriter = new Typewriter(app, {
	loop: true,
	delay: 85,
});

typewriter
	.pauseFor(500)
	.typeString(
		'I am  <span style="color: #fff;"><strong>web developer.</strong></span>'
	)
	.pauseFor(300)
	.deleteChars(14)
	.typeString(
		'<span style="color: #fff;"><strong>UI<span style="color:#ff4332">/</span>UX Designer.</strong></span>'
	)

	.pauseFor(1000)
	.start();
