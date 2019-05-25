/********************************************************************************* 
*  WEB222 – Assignment 1  
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
*  No part of this assignment has been copied manually or electronically from any other source   
*  (including web sites) or distributed to other students.  
*  Name: Jordan Witley Student ID: 142433176 Date: 05/25/2019 
********************************************************************************/ 
allow pasting

/***********************Task 1*************************/

var name = "Jordan Witley";
var courses = 3;
var program = "CPA";
var part_time = true;

console.log("My name is "+name+" and I'm in "+program+" program. I'm taking "+courses+" courses in this semester.");

if(part_time)
  var job = "have";
else
  var job = "don't have";

console.log("My name is "+name+" and I'm in "+program+" program. I'm taking "+courses+" courses in this semester and I "+job+" a part time job now.");

/***********************Task 2*************************/

var current_year = 2019;
var age = prompt("Please enter your age:");
var birth_year = current_year - age;

console.log("You were born in the year of "+birth_year+".");

var num_years = prompt("Enter the number of years you expect to study in the college:");

var grad_year = +current_year + +num_years;

console.log("You will graduate from Seneca college in the year of "+grad_year+".");

/***********************Task 3*************************/

var celsius = 0.0;
celsius = prompt("Enter the temperature in Celsius degrees:");

var cToFahr = celsius * 9 / 5 + 32;
var message = cToFahr+ '\xB0C is ' + cToFahr + '\xB0F.';
console.log(message);

var fahrenheit = 0.0;
fahrenheit = prompt("Enter the temperature in Fahrenheit degrees:");

var fToCel = (fahrenheit - 32) * 5 / 9;
var message = fToCel+ '\xB0F is ' + fToCel + ' \xB0C.';
console.log(message);

/***********************Task 4*************************/

for(i=0; i<10; i++)
{
  if (i === 0)
  {
    console.log(i + " is even");
  }
  else if (i % 2 === 0)
  {
    console.log(i + " is even");
  }
  else
  {
    console.log(i + " is odd");
  }
}

/***********************Task 5*************************/

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

console.log('longerNum(1998,1999) returns: ' + largerNum(1998,1999));
console.log('longerNum("18",19) returns: ' + largerNum("18",19));
console.log('longerNum(150,"t") returns: ' + largerNum(150,"t"));
console.log('The larger number of 333 and 999 is ' + largerNum(333,999));
console.log('The larger number of 13 and 17 is ' + largerNum(13,17));

console.log("\n");


/***********************Task 6*************************/

function Evaluator()
{
  var avg;
  var total = 0;
  var arg;
  
  for(arg = 0; arg < arguments.length; arg++)
  {
    total += arguments[arg];
  }
  
  avg = total / arguments.length;
  
  if(avg >= 50)
  {
    var x = true;
  }
  else
  {
    x = false;
  }
  
  return x;
}

console.log('Average greater than or equal to 50: ' + Evaluator(77,23,56));
console.log('Average greater than or equal to 50: ' + Evaluator(13,25,65,90));
console.log('Average greater than or equal to 50: ' + Evaluator(45,75));

console.log("\n");

/***********************Task 7*************************/

/*function grader(num)
{
  var grade;
  var z = parseInt(num, 10);
  
  if(z >= 80)
    {
      grade = "A";
    }
  else if(70 <= z)
    {
      grade = "B";
    }
  else if(60 <= z)
    {
      grade = "C";
    }
  else if(50 <= z)
    {
      grade = "D";
    }
  else if(z < 50)
    {
      grade = "F";
    }
  
  return grade;
}

var TJ = grader(85);
console.log("TJ's grade is " + TJ);

var Sonny = grader(73);
console.log("Sonny's grade is " + Sonny);

var Jahseh = grader(17);
console.log("Jahseh's grade is " + Jahseh);*/

function grader(mark)
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
}

console.log('grader(45) returns: ' + grader(45));
console.log('grader(67) returns: ' + grader(67));
console.log('grader(95) returns: ' + grader(95));

console.log("\n");
/***********************Task 8*************************/

function showMultiples(num, numMultiples)
{
  var stringArray = [];
  
  for(var i = 1; i < numMultiples; i++)
    {
      stringArray.push(num * i);
    }
  
  return stringArray;
}

console.log('showMultiples(3,2) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");