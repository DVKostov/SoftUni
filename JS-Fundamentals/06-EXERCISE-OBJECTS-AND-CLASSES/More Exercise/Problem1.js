function solve(input) {
    class Laptop {
        constructor(info, quality) {
            this.info = info;
            this.isOn = false;
            this.turnOn = () => { this.isOn = true; this.quality -= 1; this.calcPrc() };
            this.turnOff = () => { this.isOn = false; this.quality -= 1; this.calcPrc()  };
            this.showInfo = () => { return JSON.stringify(this.info) };
            this.quality = quality;
            this.calcPrc = () => { this.price = 800 - (this.info.age * 2) + (this.quality * 0.5) }
            this.price = 800 - (this.info.age * 2) + (this.quality * 0.5)
        }
    }
   
    let info = {producer: "Dell", age: 2, brand: "XPS"}
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)
    
}
solve()