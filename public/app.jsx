

//  "Presentational Components" don't really render anything, they are 'dummy components'
//  in that the user ineracts with them and they then run functions.  They are generally not responsible
//  for maintaining state.  Container components encapsulate the presentational components and maintain state
//  In short, UI components (that the user updates) should store their data in refs/props that are passed up to
//  container components that can alter their internal state based on this information.  This is (again) the classic
//  data handling design pattern for ReactJS

var GreeterMessage = React.createClass({

	render: function() {

		var name = this.props.name;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>This is a 'p' tag</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({

	onFormSubmit: function(e) {
		e.preventDefault();

		var name = this.refs.name.value;
		
		if (name.length >0) {
			this.refs.name.value = '';
			this.props.onNewName(name);
		}

	},

	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" />  
				<button>Set Name</button>
			</form>
		);
	}
	

});

var Greeter = React.createClass({
	//  Allows you to specify default prop values
	getDefaultProps: function() {
		return {
			name: 'React',
			message:  "This is a message from within the 'p' tag of a component"
		};

	},
	//  Tells the component to maintain state, that can be altered by the component itself (in practice,
	//  components should not update their own props)
	getInitialState: function() {
		return {
			name: this.props.name
		};
	},
	handleNewName: function(name) {
		
		this.setState({
			name: name,
		});

	},
	render: function() {

		var name = this.state.name;
		var message = this.props.message;

		return (
			<div>
				
				<GreeterMessage name={name} />


				<GreeterForm onNewName={this.handleNewName} />
			</div>

		);

	}

})

var firstName = "Joseph";

var newMessage = "This is a message that can showcase what well-placed props can do."
//  Access Greeter class using JSX
ReactDOM.render(
	<Greeter name={firstName} message={newMessage} />,
	document.getElementById('app')
);

