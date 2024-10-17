// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = funtion() {
	return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	this.topSpeed = topSpeed;
}

Object.setPrototypeOf(SportsCar.prototype, Car.prototype)

SportsCar.prototype.getTopSpeed = function() {
	return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
