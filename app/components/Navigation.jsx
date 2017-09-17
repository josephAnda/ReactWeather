var React = require('react');
var {Link, IndexLink} = require('react-router');
//  IndexLink is preferred if the component is going to be referenced
//  as an IndexRoute in app.jsx

//  Use className instead of class in JSX html tags to prevent js conflict
var Navigation = React.createClass({
	onSearch: function(e) {
		e.preventDefault();
		var location = this.refs.city.value;
		var encodedLocation = encodeURIComponent(location);

		if (location.length > 0) {
			this.refs.city.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}

	},
	render: function() {
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
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather by city . . . " ref="city"/>
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather" />
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Navigation;
