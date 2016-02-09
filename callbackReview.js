/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});

function first(myArray, cb) {
    return cb(myArray[0]);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

function last(myArray, cb) {
  var x = myArray.length - 1;
  return cb(myArray[x]);
}




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});

function contains(str, myArray, cb) {
  if (myArray.indexOf(str) !== -1) {
    return cb(true);
  }
  else {
    return cb(false);
  }
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});


function map(myArray, cb) {
  var newArr = [];
  for(var i = 0; i < myArray.length; i++) {
    newArr.push(myArray[i]);
  }
  return cb(newArr);
}

//still need to finish
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

function uniq(nameArray, cb) {
  var newObj = {};
  var newArr = [];
  nameArray.forEach(function(item) {
    newObj[item] = item;
  });

  for (var key in newObj) {
    newArr.push(key);
  }
  return cb(newArr);
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});


function each(nameArray, cb) {
 for (var i = 0; i < nameArray.length; i++) {
     return cb(i, nameArray[i]);
 }
}




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});

function getUserById(id, userObj, cb) {
  for (var key in userObj) {
    if (userObj[key].id === id) {
      return cb(userObj[key]);
    }
  }
}




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})

function find(numArray, cb) {
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      return cb(numArray[i]);
    }
  }
}