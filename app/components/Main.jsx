var React = require('react');
var Navigation = require('Navigation');
//  Note that 'props' rather than 'this.props' will be used if you're dealing with arrow functions 
var Main = (props) => {
	return (
		<div>
			<Navigation />
			<h2>Main Component</h2>
			{props.children} 
		</div>
	);
};


module.exports = Main;