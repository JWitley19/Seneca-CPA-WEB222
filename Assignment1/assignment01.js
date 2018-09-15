/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic 
* Policy. No part of this assignment has been copied manually or electronically from 
* any other source (including web sites) or distributed to other students.
*
* Name: Jordan Witley Student ID: 142433176 Date: 05/28/2018
*
********************************************************************************/
allow pasting

/*****************************
* Task 1
*****************************/
var name = "Jordan Witley";

var no_of_courses = 5;

var program = "CPA";

var part_time = true;

console.log("My name is "+name+" and I'm in "+program+" program. I'm taking "+no_of_courses+" courses in this semester.");

if (part_time)

  var job = "have";
 
else

  var job = "don't have";

console.log("My name is "+name+" and I'm in "+program+" program. I'm taking "+no_of_courses+" courses in this semester and I "+job+" a part time job now.");

/*****************************
* Task 2
*****************************/

var current_year = 2018;

var age = prompt("Please enter your age:");

var birth_year = current_year - age;

console.log("You were born in the year of "+birth_year+".");

var num_year = prompt("Enter the  number of years you expect to study in the college:");

var grad_year = +current_year + +num_year;

console.log("You will graduate from Seneca college in the year of "+grad_year+".");

/*****************************
* Task 3
*****************************/

function cToF(celsius)
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+ '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32)  * 5 / 9;
  var message = fTemp+ '\xB0F is ' + fToCel + ' \xB0C.';
  console.log(message);
}
cToF(30);
fToC(80);

/*****************************
* Task 4
*****************************/

for(i=0; i<=10; i++)
  {
    if (i === 0)
      {
        console.log(i + " is even");
      }
    else if(i % 2 === 0)
      {
        console.log(i + " is even");
      }
    else
      {
        console.log(i + " is odd");
      }
  }

/*****************************
* Task 5
*****************************/

function largerNum(num1, num2)
{
  if (num1 > num2)
    {
      return num1; 
    }
  else if (num2 > num1)
    {
      return num2;
    }
  else
    {
      return NaN;
    }
};

console.log('largerNum(1998,1999) returns: ' + largerNum(1998,1999));
console.log('largerNum("18",19) returns: ' + largerNum("18",19));
console.log('largerNum(150,"t") returns: ' + largerNum(150,"t"));

console.log("\n");

/*****************************
* Task 6
*****************************/

let evaluator = function() 
{
    let array = [];
    for (let arg = 0; arg < arguments.length; arg++) 
    {
        array.push(arguments[arg]);
    }

    let sum = array.reduce (function (num1, num2) 
    {
        return num1 + num2;
    }, 0);

    if (sum / arguments.length > 49) 
    {
        return true;
    } 
    else 
    { 
      return false; 
    }
};

console.log('Evaluator(77,23,56) returns: ' + evaluator(77,23,56));
console.log('Evaluator(13,25,88,65,90) returns: ' + evaluator(13,25,88,65,90));
console.log('Evaluator(45,75) returns: ' + evaluator(45,75));

console.log("\n");

/*****************************
* Task 7
*****************************/

let grader = function(mark)
{
if (mark >= 80 && mark <= 100)
     {
       return 'A';
     }
else if (mark >= 70 && mark <= 79)
    {
       return 'B';
    }
else if (mark >= 60 && mark <= 69)
    {
       return 'C';
    }
else if (mark >= 50 && mark <= 59)
    {
       return 'D';
    }
  else (mark >= 0 && mark <= 49)
    {
      return 'F';
    } 
};

console.log('grader(45) returns: ' + grader(45));
console.log('grader(67) returns: ' + grader(67));
console.log('grader(95) returns: ' + grader(95));

console.log("\n");

/*****************************
* Task 8
*****************************/

function showMultiples(num, numMultiples) {
  let stringArray = [];
  for (var i = 1; i < numMultiples; i++) { stringArray.push(num * i); }
  return stringArray;
}

console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");
