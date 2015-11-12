/**
* Setting the namespace
*/
window.CarFactory = window.CarFactory || {};

/**
* Main Program Logic
*/
(function(){
	'use strict';
	
	var cars = CarFactory.Factory.createCars(10);
	
	cars[3].changePlz(45);
	
	cars[1].drive(5);
	cars[2].drive(5);
	cars[7].drive(5);
	
	console.log(cars);
})();