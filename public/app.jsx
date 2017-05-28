

//  "Presentational Components" don't really render anything, they are 'dummy components'
//  in that the user ineracts with them and they then run functions.  They are generally not responsible
//  for maintaining state.  Container components encapsulate the presentational components and maintain state
//  In short, UI components (that the user updates) should store their data in refs/props that are passed up to
//  container components that can alter their internal state based on this information.  This is (again) the classic
//  data handling design pattern for ReactJS

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

//  Presentational Component:  
var GreeterForm = React.createClass({

	onFormSubmit: function(e) {
		e.preventDefault();

		var name = this.refs.name.value;
		var message = this.refs.message.value;
		
		if (name.length >0 || message.length >0) {
			this.refs.name.value = '';
			this.refs.message.value = '';
			this.props.onNewName(name, message);
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
	//  This function is activated by nested components to activate a change in state using setState(), which 
	//  Will re-render the necessary compoenents.  This is the intended prupose of container components  
	handleNewName: function(name, message) {
		//  [  ]  Refactor so this argument deals with an object that is/has been selectively updated with the 
		//  input refs that have changed, maintaining the state of any elements that have been fed blank information 
		this.setState({
			name: name,
			message: message
		});

	},
	render: function() {

		var name = this.state.name;
		var message = this.state.message;

		return (
			<div>
				
				<GreeterMessage name={name} message={message}/>


				<GreeterForm onNewName={this.handleNewName} />
			</div>

		);

	}

})

var firstName = "Joseph";

var newMessage = "This is the most updated message"
//  Access Greeter class using JSX
//  Note that during the rendering of any component, you can set the state of the component by simply setting the value 
//  equal to a JS expression within the braces.  
ReactDOM.render(
	<Greeter name={firstName} message={newMessage} />,
	document.getElementById('app')
);

