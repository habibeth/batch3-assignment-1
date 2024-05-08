{
    //class basic properties 
    class Vehicle {
        brand: string;
        model: string;
        year: number;

        constructor(brand: string, model: string, year: number) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
    }

    class Car extends Vehicle {
        constructor(brand: string, model: string, year: number) {
            super(brand, model, year);
        }
        
        carInfo():void{
            console.log(`Your car model is:  ${this.year} ${this.brand} ${this.model}`)
        }
        
    }

    const car = new Car("Toyota", "Corolla", 2020);
    car.carInfo();

    //
}