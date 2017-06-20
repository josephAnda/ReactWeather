var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function (name) {
// 	console.log('forEach', name);
// });

//  Arrow functions can be used in place of anonymous functions
// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

//  Even more concise syntax for one-liners.  
// names.forEach((name) => console.log(name));

//  The statement after the arrow gets returned

// var returnMe = (name) => name + '!';
// console.log(returnMe('Joseph'));

var person = {
	name: 'Joseph',
	greet: function () {
		//  In the example below, the arrow function ensures that 'this' will be bound to the parent (in this case 'person') rather than 
		//  The anonymous function 
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name)
		});
	}
};
// person.greet();

//  Challenge Area
// function add (a, b) {
// 	return a + b;
// }

// console.log(add(1, 3));
// console.log(add(9, 0));

var addStatement = (a, b) => {
	return a + b;
};

console.log(addStatement(4,5));

var addExpression = (a,b) => a + b;

console.log(addExpression(100,1));