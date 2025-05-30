// TODO: Create a function called sum. The function will take in a parameter and
// calculate all the numbers from 0 -> the parameter. You must check if the parameter is
// an integer first before any calculation is made. If the parameter is not a number,
// return a message stating, “The value passed is not a number”. You are NOT allowed to
// use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure
// to test your code effectively.
// TODO: Create a function called ‘factorial’ that takes in a number as a parameter.
// The function will print the factorial of the entered number, e.g. factorial(4) ->
// 4*3*2*1 //output 24
// TODO: Create a function called funkyMath . If this function is called with 2
// arguments the function will subtract the first from the second. If the function is called
// with 3 arguments it will add all 3 numbers together. If the function is called with 4
// arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide
// them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
// TODO: Create a loop that will remove all the odd numbers from the array and add
// them to a new array. Use the current array [1, 2 , 33, 45, 6,44].
// Bonus: Make sure to arrange them from smallest to biggest.()
// TODO: Create an object called ‘me’ with properties of first name, last name, age,
// favourite colour, dream car
// TODO: Create and add a new property and value of ‘favourite food’ to the object.
// TODO: . Now delete the age property from the object.

// Function to calculate the sum from 0 to a given number
function sum(n) {
  // Check if the input is a number and an integer
  if (typeof n !== 'number' || n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i; // Add each number from 0 to n
  }
  return total; // Return the total sum
}

console.log("Sum(5):", sum(5)); // 0+1+2+3+4+5 = 15
console.log("Sum('abc'):", sum("abc")); // Not a number

// Function to calculate factorial of a number
function factorial(num) { 
  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i; // Multiply result by i for each loop
  }

  console.log(`Factorial of ${num} is: ${result}`);
}

factorial(4); // 4 * 3 * 2 * 1 = 24

// Function with different behaviors based on the number of arguments
function funkyMath(a, b, c, d) {
  // Check how many arguments were passed using arguments.length
  if (arguments.length === 2) {
    return b - a; // Subtract first from second
  } else if (arguments.length === 3) {
    return a + b + c; // Add all three numbers
  } else if (arguments.length === 4) {
    let sum1 = a + b; // Add 1st and 2nd
    let sum2 = c + d; // Add 3rd and 4th
    return sum1 / sum2; // then divide the two sums
  } else {
    return "Invalid number of arguments";
  }
}

console.log("funkyMath(2, 6):", funkyMath(2, 6));           // 6 - 2 = 4
console.log("funkyMath(1, 2, 3):", funkyMath(1, 2, 3));     // 1 + 2 + 3 = 6
console.log("funkyMath(8, 2, 3, 5):", funkyMath(8, 2, 3, 5)); // (8+2)/(3+5) = 10/8 = 1.25

// Loop to remove odd numbers and store them in a new sorted array
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]); // Add only odd numbers
  }
}

// Sort the odd numbers from smallest to biggest for that bonus baby!
oddNumbers.sort(function(a, b) {
  return a - b;
});

console.log("Sorted odd numbers:", oddNumbers); // [1, 33, 45]

// Create an object with personal details
let me = {
  firstName: "Son",
  lastName: "Goku",
  age: 46,
  favouriteColour: "Blue",
  dreamCar: "Flying Nimbus Cloud"
};

// Add a new property 'favouriteFood'
me.favouriteFood = "Chi Chi's Cooking";

// Delete the 'age' property
delete me.age;

console.log("Object me:", me); // this will show the object with all properties including favouriteFood and without age