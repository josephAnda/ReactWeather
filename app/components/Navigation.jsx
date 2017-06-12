var React = require('react');
var {Link, IndexLink} = require('react-router');
//  IndexLink is preferred if the component is going to be referenced
//  as an IndexRoute in app.jsx
var Navigation = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Navigation Component</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				<IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
				<IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
			</div>
		);
	}
});

module.exports = Navigation;