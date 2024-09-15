// Fatima Arab  101463256
// LAB 02

// Question 1
const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (const name of myArray) {
      console.log(`${greetText}${name}`);
    }
  };
  
  greeter(['Fatima Arab', 'Shahnaz Smith', 'Ali Kiani'], 3);


  // Question2
  
  const capitalize = ([firstChar, ...rest]) => {
    return firstChar.toUpperCase() + rest.join('').toLowerCase();
  };
  
  console.log(capitalize('tina'));  
  console.log(capitalize('loUIsE')); 
  
  // Question 3
  const capitalize2 = ([firstChar, ...rest]) => {
    return firstChar.toUpperCase() + rest.join('').toLowerCase();
  };
  
  const colors = ['red', 'green', 'blue'];
  
  const capitalizedColors = colors.map(color => capitalize2(color));
  
  console.log(capitalizedColors);

  // Question4

  var numbers = [1,60,34,30,20,5];
  const filterNumbers = numbers.filter(element => element < 20);
  console.log(filterNumbers);


  // questiion 5
  const nums = [1, 2, 3, 4];
  const calculateSum = nums.reduce((previousElement, currentElement) => previousElement + currentElement);
  const calculateProduct = nums.reduce((previousElement, currentElement) => previousElement * currentElement);
  
  console.log(calculateSum);      
  console.log(calculateProduct);  
  
  // question 6
  class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  }
  
  
  class Sedan extends Car {   // this is the subclass, child of Car class
    constructor(model, year, balance) {
      // Here we use super to interit model and year from Car class
      super(model, year);
      this.balance = balance;  // we use this. balance because we didi not have it in main class
    }
  
    // Method to show Sedan info
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
  // Creating a Car instance
  const car = new Car('Toyota', 2020);
  console.log(car.model);
  console.log(car.year);
  
  // Creating a Sedan instance
  const sedan = new Sedan('Toyota Camry', 2020, 25000);
  console.log(sedan.info()); 