(function(){
	'use strict';
	
	var carFactory = new CarFactory();
	var cars = carFactory.CreateCar(10);
	
	cars[3].changePlz(45);
	
	cars[1].drive(5);
	cars[2].drive(5);
	cars[7].drive(5);
	
	console.log(cars);
	
})();