

//  "Presentational Components" don't really render anything, they are 'dummy components'
//  in that the user ineracts with them and they then run functions.  They are generally not responsible
//  for maintaining state.  Container components encapsulate the presentational components and maintain state
//  In short, UI components (that the user updates) should store their data in refs/props that are passed up to
//  container components that can alter their internal state based on this information.  This is (again) the classic
//  data handling design pattern for ReactJS

//  Import React when its accessed via webpack as opposed to being
//  made available globally via a script tag.  Require is via npm

var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Joseph";
var newMessage = "This is the most updated message";

ReactDOM.render(
	<Greeter name={firstName} message={newMessage} />,
	document.getElementById('app')
);

