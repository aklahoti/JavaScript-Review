//Create a Animal Constructor that has the following parameters. species, name, legs, color, food 
//(which is an array of foods they can eat).

  function Animal(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  function Person(name, age, height, gender) {
    var obj = {
      name: name,
      age: age,
      height: height,
      gender: gender
    }
    return obj;
  }


//Create a animal array and a person array.

  var animals = [];
  var people = [];
  


//Create two instances of Animal and push those into your animal array

  var monkey = new Animal('Mammal','Monkey', 2, 'Brown', ['Bananas', 'Berries', 'Nuts']);
  var lion = new Animal('Predator', 'Lion', 4, 'Light Brown', ['Wildabeasts', 'Gazelles', 'Humans']);
  animals.push(monkey, lion);


//Create two instances of person and push those into your person array.

  var me = new Person('Nishu', 25, '5-8', 'Male');
  var you = new Person('Anshu', 30, '5-9', 'Male');
  people.push(me, you);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, 
//then alert "(name) ' ate ' (whichever food was chosen)".
  
 Animal.prototype.eat = function(){
      console.log(this.name + " ate " +  this.food[Math.floor(Math.random()*this.food.length)]);
  }
  


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
  //No, because the person object is local to the Person function. So we shouldn't be able to manipulate it
  //in the global scope.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  -You can create and define a specific instance of an object.
  2) What's a good way to describe the keyword 'this'
  -This is used to reference an object, whether its purpose is in a constructor function or in an object definition.
  3) Can a normal function which creates an object and then returns that object use the prototype?
  -No, I don't believe so. The prototype can only be defined on an Object or Array, not a Function.
  4) What happens if you forget to use 'new' when calling a constructor?
  -The specific object instance you're attempting to create becomes undefined.
*/