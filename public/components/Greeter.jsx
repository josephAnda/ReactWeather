var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

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

});

module.exports = Greeter;