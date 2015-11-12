/**
* Setting the namespace
*/
window.CarFactory = window.CarFactory || {};

(function(){
	'use strict';
	
	/**
	* Car Constructor
	*/
	CarFactory.Car = function (plz){
		this.plz = plz;
		this.isDriving = false;
		this.dom = null;
	}
		
	/**
	* Draws the car to the screen
	*/
	CarFactory.Car.prototype.draw = function(){
		var square = document.createElement('div');
		square.style.backgroundColor = 'green';
		square.style.height = '20px';
		square.style.width = '20px';
		square.style.marginTop = '20px';
		square.style.marginBottom = '20px';
		document.body.appendChild(square);
		this.dom = square;
	}
	
	/**
	* Starts/Moves the car to drive
	*/
	CarFactory.Car.prototype.drive = function(steps, counter){
		this.isDriving = true;
		console.log('drive');
		var stepCounter = counter || 0;
		
		var that = this;
		
		if(steps !== undefined && stepCounter < steps){
			stepCounter += 1;
			
			setTimeout(function(){
				that.dom.style.marginLeft = 100 * stepCounter;	
				that.drive(steps, stepCounter);
				
				//Stops the car
				if(stepCounter === steps){
					that.stop();
				}
				
			}, 1000);
		}
	}
	
	/**
	* Stops the car
	*/
	CarFactory.Car.prototype.stop = function(){
		this.isDriving = false;
		console.log('stop');
	}
	
	/**
	* Changes the car plate number
	*/
	CarFactory.Car.prototype.changePlz = function(plz){
		this.plz = plz;
	}
	
})();