

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
//  Presentational component: 
var GreeterMessage = React.createClass({

	render: function() {

		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});
 
var GreeterForm = React.createClass({

	onFormSubmit: function(e) {
		e.preventDefault();
		
		//  Capture values
		var name = this.refs.name.value;
		var message = this.refs.message.value;

		//  Reset Form
		this.refs.name.value = "";
		this.refs.message.value = "";

		var updates = {
			name: name,
			message: message
		};

		for (var key in updates) {
			if(updates.hasOwnProperty(key)) {
				this.props.onNewName(key, updates[key]);
			}
		}
	},

	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" placeholder="Enter name" /><br />
				<textarea ref="message" placeholder="Enter message" rows="4" cols="50"/> <br /> 
				<button>Submit</button>
			</form>
		);
	}
});

//  Container component:  
var Greeter = React.createClass({
	//  Allows you to specify default prop values
	getDefaultProps: function() {
		return {
			name: 'React',
			message:  "This is a message from within the 'p' tag of a component"
		};

	},
	//  Tells the component to maintain state, that can be altered by the component itself (in practice,
	//  components should not update their own props)  Furthermore, props cannot be altered by functions after 
    //  rendering.  State must handle the changes.  
	getInitialState: function() {
		return {
			name: this.props.name,
			message: this.props.message
		};
	},


    //  The function below updates the view with any new non-null values inputted to the form 
    //  This update keys are assumed to be valid state properties (if a given key isn't, this function won't do anything)

	handleNewInfo: function(property, value) {
		if (value.length > 0) {

			var update = {}; 
			update[property] = value;
			this.setState( update );
		}
	},

	render: function() {

		var name = this.state.name;
		var message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>

				<GreeterForm onNewName={this.handleNewInfo} />
			</div>

		);

	}

})

var firstName = "Joseph";

var newMessage = "This is the most updated message"

ReactDOM.render(
	<Greeter name={firstName} message={newMessage} />,
	document.getElementById('app')
);

