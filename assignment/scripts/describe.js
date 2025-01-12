// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we initialize a variable called name and set it to Dane
// then we write a conditional to check if varible name is EXACTLY Mary.
// Name does not exactly match Mary, so we console log "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We initialize a variable called 'secret', and a variable called 'code' and set it to 123.
// Then we write a conditional to check if variable 'code' is 123. If true, variable 'secret' is set to "super"
// and variable 'code' is set to multiply itself by 2.
// Then we write another conditional to check if variable 'code' is greater than 250. It isn't, so the codeblock doesn't run.
// Lastly we console.log variable secret, which outputs 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We initialize three variables 'isStudent', 'age', and 'zip' and set them to true, 34, and 55407 respectively.
// Then we write a compound conditional, first to check if 'isStudent' is true ALONG WITH 'zip' being greater than 80000.
// It isn't, so then we check if 'isStudent' is false OR 'age' is less than 30. They aren't, so then we simply check if 'isStudent'
// is true. It is, so we console log "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne should be set to 'blue'. colorTwo should be set to 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX - colorTwo should also be set to 'purple'.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 OR if time is greater than or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - 'time' should be set as a variable using [let], not [const]
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX (maybe) - This technically works, but could be clearer using 'age >= minAge', to better fit description.
if(minAge <= age) {
  //FIX - 'if' code block and 'else' code block need to be swapped so 'if' block console logs "enter"
  console.log('no entry');
} else {
  console.log('enter');
}
*/

