//  Classic callback pattern. 
/*
function getTempCallback (location, callback) {
	callback(undefined, 78);
	callback('City not found');
}
/*
getTempCallback('Philadelphia', function (err, temp) {
	if(err) {
		console.log('error', err);
	} else {
		console.log('success', temp);
	}

});

//  Note that promises are an ES6 feature
function getTempPromise (location) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(79);
			reject('City not found');
		}, 1000);
	});
}

getTempPromise('Philadelphia').then(function(temp) {
	console.log('promise success', temp);
}, function(err) {
	console.log('promise error', err);
})

//  The funciton above is intended to demonstrate a design pattern in which the necessary callback 
// function is only run once, and that only the appropriate one is run 
*/

//  Challenge Area

function addPromise( a, b ) {
	return new Promise(function(resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') { 
			resolve(a + b); 
		} else {
			reject('Both entries need to be numbers');
		}
	})
}

addPromise(2, 5).then(function(sum) {
	console.log('promise success', sum);
}, function(err) {
	console.log('promise error', err);
});

addPromise('this', 5).then(function(sum) {
	console.log('promise success', sum);
}, function(err) {
	console.log('promise error', err);
});