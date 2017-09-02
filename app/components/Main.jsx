var React = require('react');
var Navigation = require('Navigation');
//  Note that 'props' rather than 'this.props' will be used if you're dealing with arrow functions
var Main = (props) => {
	return (
		<div>
			<Navigation />
			<div className="row">
				<div className="columns medium-6 large-4 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
};


module.exports = Main;
