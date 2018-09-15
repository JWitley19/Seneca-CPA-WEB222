/*****************************
 * Step 1 
 *****************************/
var e1;
var e2;
var e3;
var e4;
var e5;
var e6;
var e7;
var str;

/*****************************
 * Step 2
 *****************************/
function capFirstLetter(e1)
{
  e1 = prompt("Please enter your first name:");
  var i = e1.substring(0,1);
  i = i.toUpperCase();
  e1 = e1.substring(1,6);
  e1 = e1.toLowerCase();
  e1 = (i+e1);
  console.log(e1);
}

capFirstLetter(e1);

/*****************************
 * Step 3
 *****************************/
var getAge = function(e2)
{
  e2 = prompt("Please enter your year of birth:");
  var d = new Date();
  var n = d.getFullYear();
  e2 = n - e2;
  console.log(e2);
};

getAge(e2);

/*****************************
 * Step 4
 *****************************/

  var myArr;
  var a;
  var b;
  var c;
  var d;
  
  e3 = prompt("Please enter the college you are attending:");
  myArr = e3.split(' ');
  
  myArr[0];
  myArr[1];
  
  a = myArr[0].substring(0,1);
  a = a.toUpperCase();
  b = myArr[0].substring(1,7);
  b = b.toLowerCase();
  myArr[0] = (a+b);
  
  c = myArr[1].substring(0,1);
  c = c.toUpperCase();
  d = myArr[1].substring(1,8);
  d = d.toLowerCase();
  myArr[1] = (c+d);
  
  e3 = (myArr[0]+ " " +myArr[1]);
  console.log(e3);
  
/*****************************
 * Step 5
 *****************************/

e4 = prompt("Enter your favorite sports", "hockey,football,basketball,tennis,golf ");
e4 = e4.toUpperCase(); // Step 6

e4 = e4.replace(/football/, 'soccer');

e4 = e4.split(',');
e5 = prompt("Enter one more favorite sports", "formula 1");
e5 = e5.toUpperCase(); // Step 6
e4.push(e5);

console.log(e4.sort());

/*****************************
 * Step 7
 *****************************/

function getDateString(e6)
{
  var d = new Date();
  var n = d.getFullYear();
  
  var m = new Date();
  var c = m.getMonth();
  
  var a = new Date();
  var b = a.getDate();
  
  e6 = console.log(n+ "-" +c+ "-" +b);
  console.log(e6);
};
getDateString(e6);


/*****************************
 * Step 8
 *****************************/

str = str.concat