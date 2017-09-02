//  Lets try a stateless function component

var React = require('react');


var About = () => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a basic application built using ReactJS, JSX, ES6, Babel, Foundation,
			and several other tools  the main purpose of this project is as to:</p>
			<ul>
				<li>Create a boilerplate app that utilizes React routing.</li>
				<li>Experiment with styles and structuring tools from Foundation.</li>
				<li>Serve as a testing ground for implementing various design strategies.</li>
			</ul>
			<p>Check out <a href="https://github.com/josephAnda" target="_blank">my github profile</a> for more projects.</p>
		</div>
	)
};

module.exports = About;
