
//  UI components (that the user updates) should store their data in refs/props that are passed up to
//  container components that can alter their internal state based on this information.  This is (again) the classic
//  data handling design pattern for ReactJS

//  Import React when its accessed via webpack as opposed to being
//  made available globally via a script tag.  Require is via npm

var React = require('react');
var ReactDOM = require('react-dom');

//  e.g. Creates the variable 'Route' and sets it equal to the Route property of whatever
//  'require' returns.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
//console.log(Foundation, $(document));  //  <--- For debugging the following line

$(document).foundation();
//  The code below uses React Roter to integrate React components into the paths required to render
//  Different parts of a website or app.  The Route tag references paths and their corresponding
//  Components.  These components are displayed when {this.props.children} is placed somewhere
//  Within the root component (in this case, {Main}).  The IndexRoute specifies the 'homepage'
//  Information that's displayed along with the 'root' compoent.
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About} />
			<Route path="examples" component={Examples} />
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,

	document.getElementById('app')
);
