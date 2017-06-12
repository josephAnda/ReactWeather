var React = require('react');

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

module.exports = GreeterForm;