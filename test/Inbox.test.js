const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());


beforeEach(async () => {
   //Traer todas las cuentas
   
    const fetchedAccounts = await web3.eth.getAccounts();

    console.log(fetchedAccounts);
});


describe("Inbox", () => {
    it("deploys a contract", () => {
        

    });
})


// class Car {
//     park() {
//         return "stopped";
//     }

//     drive() {
//         return "vroom"
//     }
// }

// let car;

// beforeEach(() => {
//     car = new Car();
// })

// describe("Car", () => {
//     it("can park", () => {
//         assert.equal(car.park(), "stopped");
//     })

//     it("can park", () => {
//         assert.equal(car.drive(), "vroom");
//     })
// });