//  Lets try a stateless function component

var React = require('react');


var About = () => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a basic application built using ReactJS, JSX, ES6, Babel, Foundation,
			and several other tools  the main purpose of this project is as to:</p>
			<ul>
				<li>Create a boilerplate app that utilizes React routing.</li>
				<li>Experiment with styles and structuring tools from Foundation.</li>
				<li>Serve as a testing ground for implementing various design strategies.</li>
			</ul>
			<p>Here are some of the tools that I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react/">React</a>
				</li>
				<li>
					<a href="https://babeljs.io/">Babel</a>
				</li>
				<li>
					<a href="http://foundation.zurb.com/">Foundation</a>
				</li>
			</ul>
			<p>Check out <a href="https://github.com/josephAnda">my github profile</a> for more projects.</p>
		</div>
	)
};

module.exports = About;
