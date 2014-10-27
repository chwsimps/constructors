String.prototype.makeLink = function () {

};


var mystring = "Hello, my name is Chase and my favorite website is http://myspace.com.";

$('.hero-unit').html(mystring);

// Typically put below jQuery plugin within it's own file.
$.fn.extend({
  makeRed: function () {
    return this.css('color', 'red');
  }
});

// var Animal = function (name, species) {
// 	this.name = name;
// 	this.species = species;
// };
//
// Animal.prototype.des = function () {
//   return 'I am a ' + this.species + ' and my name is ' + this.name;
// };
//
// var Dog = function (name) {
//   Animal.call(this, name, "Dog");
// };
//
// Dog.prototype.noise = function () {
//   return 'Woof';
// };



// var Person = function ( options ) {
// 	var options = options || {};
// 	this.name = options.name;
// 	this.age = options.age;
//   // Drive Method
//   // Two Params - object being driven, updated condition
//   this.drive = function ( driven, updated_condition) {
//     driven.condition = updated_condition;
//   };
// };
//
// var chase = new Person ({
//   name: 'Chase',
//   age: 28
// });
//
// Person.prototype.greeting = function () {
//   console.log('Hi, ' + 'my name is ' + this.name);
// };
//
// var Car = function ( options ) {
// 	var options = options || {};
// 	this.make = options.make;
// 	this.color = options.color;
//   this.condition = options.condition || 'New';
// };


// if (1) {
//   result = 'something';
// } else {
//   result = 'something else';
// }

var result = (1 === 1) ? 'something' : 'something else'; //<- Ternary operator (? = if and : = else)

console.log(result);



(function ($) {

  var me = {
    name: 'Tim',
    age: 30
  };

  window.me = me;

  // $('h1').html(me.name);

}(window.jQuery));


(function () {

  myObj = {
    me: function () {
        console.log(this);
    }
  };

  myObj.me(); //myObj

  //call or apply
  myObj.me.call();

  //bind
  var newbounded = myObj.me.bind(window);

  newbounded(); //Turns call function into a variable


}());
