/**
 * Car
 */
class Car {
	plz: number;
	isDriving: boolean;
	dom: any;
	
	constructor(plz:number) {
		this.plz = plz;
		this.isDriving = false;
		this.dom = null;
		console.log('created');
	}
	
	draw(){
		var square = document.createElement('div');
		square.style.backgroundColor = 'green';
		square.style.height = '20px';
		square.style.width = '20px';
		square.style.marginTop = '20px';
		square.style.marginBottom = '20px';
		document.body.appendChild(square);
		this.dom = square;
	}
	
	drive(steps:number, counter:number){
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
	
	stop(){
		this.isDriving = false;
		console.log('stop');
	}
	
	changePlz(plz: number){
		this.plz = plz;
	}
}