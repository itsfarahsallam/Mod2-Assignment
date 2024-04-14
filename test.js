console.log("Hello World");
document.write("Hello World <br>");
document.write("Hello World Again <br><br><br>");

/* 3 Examples of basic arithmetic in JS */
document.write

/* 3 Examples of declaring variables in JS */


/* 2 Examples of using variables in arithmetic operations in JS */




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

document.write("Random Number Generator (1-10) <br> (Refresh the page if you want a new number!): <br><br>")
document.write(Math.round(Math.random() *10));
