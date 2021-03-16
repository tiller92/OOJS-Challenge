class Vehicle {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    honk() {
        return "Beep Beep"
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
    }
    numWheels() {
        return 4
    }

}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
    }
    revEngine() {
        return "VROOOOM!!!!"
    }
    numWheels() {
        return 2
    }

}

class Garage {
    constructor(capacity) {
        this.capacity = capacity
        this.vehiclesArr = []
    }

    add(vehicle) {
        if (vehicle.make === undefined || vehicle.model === undefined || vehicle.year === undefined) {
            return "Only Vehicles can be here!!"
        }
        if (this.vehiclesArr.length < this.capacity) {
            this.vehiclesArr.push(vehicle)
            return 'Vehicle added'
        } else {
            return 'Garage is Full'
        }
    }
}