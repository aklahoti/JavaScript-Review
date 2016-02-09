var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

 var call = callFriend();
 call('435-215-9248');



/*

Write a function that accepts a function as it's first argument and returns a new function 
(which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. 
After the function has been called N number of times, console.log('STAHHP');

*/

function oneExec(fn) {
	var result;
	if(fn) {
		result = fn.apply(this, arguments);
		fn = null;
	}
	return result;
}

var oneTime = oneExec(function(){
	console.log("Apply this once, then stop.")
});

//second function

function nExecs(fn, n) {
	var result;
	var counter = 0;
	return function() {
		if(counter < n) {
			result = fn();
			++counter;
		}
		else {
			return console.log('STAHHP');
		}
	return result;
	}
}

var x = 5;
var nTimes = nExecs(function() {
    console.log('This executes a specific number of times.')
}, 5);