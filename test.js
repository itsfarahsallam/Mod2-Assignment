console.log("Hello World");
document.write("Hello World! <br><br>");

/* 3 Examples of basic arithmetic in JS */
console.log( 2 * 2 );
console.log( 10 + 5);
console.log( 14 - 7);

console.log( 14 - (7 + 2));

/* 3 Examples of declaring variables in JS */
var myBirth = "03/01";
console.log(myBirth);

let dogBreed = "Poodle";
console.log("My dog is a " + dogBreed);

const PI = 3.14;
console.log("Pi is " + PI);

/* 2 Examples of using variables in arithmetic operations in JS */
let x = 5;
let y = 6;
let z = x + y;
console.log(z);

console.log(z * PI);

let a = 2;
let b = 3;
let c = a + (b * x);
console.log(c);

/* Practice */
var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function changeColor()
{
    if(box.style.background == 'red')
    {
        box.style.background = 'blue';
    }
    else
    {
        box.style.background = 'red';
    }  
}

document.write(" <br><br> Random Number Generator (1-10) <br> (Refresh the page if you want a new number!): <br><br>");
document.write(Math.round(Math.random() *10));
