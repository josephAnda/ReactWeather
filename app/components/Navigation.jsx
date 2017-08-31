var React = require('react');
var {Link, IndexLink} = require('react-router');
//  IndexLink is preferred if the component is going to be referenced
//  as an IndexRoute in app.jsx

//  Use className instead of class in JSX html tags to prevent js conflict
var Navigation = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Weather App</li>
					<li>
						<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
					</li>
					<li>
						<IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
					</li>
					<li>
						<IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">

			</div>

		</div>

	);
};

module.exports = Navigation;
