/**
* Setting the namespace
*/
window.CarFactory = window.CarFactory || {};

(function(){
	'use strict';
	
	/**
	*  Factory Constructor
	*/
	CarFactory.Factory = function(){
		
	}
	
	/**
	*  Responsible for generating cars
	*/
	CarFactory.Factory.createCars = function(carNum){
		var cars = [];
			
		for(var i = 0; i < carNum; i++){
			var car = new CarFactory.Car(i);
			car.draw();
			car.drive();
			cars.push(car);
		}
		
		return cars;
	}
	
})();

