var prompt = require("prompt-sync")({sigint:true});
// Lab1    Fatima Arab

// question1 : write a program to capitalize the first letter of each word of a given string.
let sentence = "the quick brown fox";
console.log(sentence);

function capitalize(sentence) {
  let words = sentence.split(' ');  // we  Split the sentence into words to capitalize the first letter of the words later
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);  // Capitalize first letter of each word
  }

   let joinedWords = words.join(' ');  // by .join() method, we put the words into a phrase togethe
   console.log(joinedWords);
   return joinedWords;
}

let result = capitalize(sentence);
console.log(result);

// question2
// Write a JavaScript program to find the largest of three given integers.

function findMax(x,y,z){
  return Math.max(x,y,z);
}

// here, i want to get the input from the user
let x = parseFloat(prompt("Enter the first number: "));
let y = parseFloat(prompt("Enter the second number: "));
let z = parseFloat(prompt("Enter the third number: "));
 result = findMax(x,y,z);
console.log(`The largest among ${x}, ${y},${z} is:  ${result}`);

// question3
//Write a JavaScript program to move last three character to the start of a given string.
// The string length must be greater or equal to three.

function shiftLastLetters(word){
    if (word.length < 3){
        console.log(" The word should be more than 3 characters.");
    }
    let lastThree = word.slice(-3); // this method slices the last 3 characters
    let restOfWord = word.slice(0, -3);  // this shows the remained part of the word.

    // now we can concatinate the new word by changeing the position of the above variables
    return newWord = lastThree + restOfWord;
}
let word = prompt("Enter the word: ")
result = shiftLastLetters(word);
 console.log(result);

 // question4
 //Write a JavaScript program to find the types of a given angle.
// Types of angles:
// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.

function findAngleType(angle){
    if(angle < 0 || angle > 180){
        console.log(" This is an invalid angle. Angle should be between 0 and 180 degrees.")
    }  // this is to catch out of range numbers

    if (angle < 90){
        return `Acute angle`;
    }
    else if (angle === 90){
        return `Right angle`;
    }
    else if(angle > 90 && angle < 180 ){
        return `Obtuse Angle`;
    }
    else if(angle === 180){
        return `straight angle.`
    }
}
let userInput = parseFloat(prompt("Enter the angle in degrees between 0 - 180 :  "));
angle = userInput;

result = findAngleType(angle);
console.log(`the angle type is: ${result}`);