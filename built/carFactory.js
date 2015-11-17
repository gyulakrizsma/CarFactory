/**
 * CarFactory
 */
var CarFactory = (function () {
    function CarFactory() {
    }
    CarFactory.prototype.CreateCar = function (numberOfCars) {
        var cars = [];
        for (var i = 0; i < numberOfCars; i++) {
            var car = new Car(i);
            car.draw();
            car.drive(null, null);
            cars.push(car);
        }
        return cars;
    };
    return CarFactory;
})();
