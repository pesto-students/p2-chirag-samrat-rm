let records = [];
let parkignLot = [];
let parkignLotAvailable;
// until the parkign lot is created it is undefined and after creating its true

//creating a parking lot with the given number
const createParkingLot = (numOfCars) => {
    for (let a = 1; a <= numOfCars; a++) {
        let arr = [a, 0];
        parkignLot.push(arr);
    }
    parkignLotAvailable = true;
    return parkignLot;
};

class Car {
    constructor(regNo, color) {
        this.regNo = regNo;
        this.color = color;
    }
}

// creates a car and adds the car to record and gives it a parking aspot and then generates the ticket
function createTicket(reqNo, color) {
    let newCar = new Car(reqNo, color);
    let slot = parkignLot.find((spot) => {
        if (spot[1] == 0) {
            newCar.slotNum = spot[0];
            parkignLot[spot[0] + 1] = [spot[0], 1];
            return true;
        } else {
            return false;
        }
    });
    if (slot) {
        console.log(`Ticket :
            Registration numbers : ${newCar.regNo}
            color : ${newCar.color}
            slot number : ${newCar.slotNum}`);
        records.push(newCar);
    } else {
        newCar.slotNum = "Parking was full";
        console.log("Parking is full");
    }
}

// when car is left the parking space is made available for the other cars
function carLeave(slotNum) {
    parkignLot[slotNum + 1] = [slotNum, 0];
    console.log(`${slotNum} is empty`);
}

// the closet part to the entry is displayed
function status() {
    let slot = parkignLot.find((spot) => spot[1] == 0);
    if (slot) {
        console.log(`${slot[0]} is available`);
    } else {
        console.log("no space is available for parking");
    }
}

// register numbers of the cars are given for specified color
function regNumOfAllCarsOfColor(color) {
    let cars = records.filter((car) => {
        if (car.color === color) {
            return true;
        } else {
            return false;
        }
    });
    if (cars.length) {
        console.log(`Register number of all the ${color} cars color `);
        for (let i = 0; i < cars.length; i++) {
            console.log(` ${i + 1})  ${cars[i].regNo} `);
        }
    } else {
        console.log(`no cars available with ${color} color`);
    }
}

// slots of the cars are given based on the color
function slotOfAllCarsOfColor(slot) {
    let cars = records.filter((car) => {
        if (car.slotNum === slot) {
            return true;
        } else {
            return false;
        }
    });
    if (cars.length) {
        console.log(`All cars parked in the slot number  ${slot} `);
        for (let i = 0; i < cars.length; i++) {
            console.log(` ${i + 1})  ${cars[i].slotNum} `);
        }
    } else {
        console.log(`no car was parked at ${slot} `);
    }
}

// slot number of the given car is returned for the given register number
function slotNumforRegNum(regNum) {
    let car = records.find((car) => {
        if (car.regNo === regNum) {
            return true;
        } else {
            return false;
        }
    });
    if (car) {
        console.log(
            `The car with register number ${regNum} was parked at ${car.slotNum}`
        );
    } else {
        console.log(`No car was parked with this ${regNum} register number`);
    }
}
