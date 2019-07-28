const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/* Function to draw a square inside
a canvas with border around the square
*/
function square(a) {  
// Set canvas size + a border width!
ctx.canvas.width = a * 1.1;
ctx.canvas.height = a * 1.1;
  
// Set line start point
let x = (ctx.canvas.width / 2) - (a / 2);
let y = (ctx.canvas.height / 2) - (a / 2);

// Draw first line of square setting line colour
ctx.beginPath();
ctx.strokeStyle = 'lightgrey';
ctx.moveTo(x + 0, y + 0);
ctx.lineTo(x + 0, y + a);
// Draw second, third & fourth line of square
ctx.lineTo(x + a, y + a);
ctx.lineTo(x + a, y + 0);
ctx.lineTo(x + 0, y + 0);
// Draw an outline around the shape
ctx.stroke();
}

let a = "";
let b = "";

// callSquare() passes the value of the input box to square()
function callSquare() {
  let b = document.getElementById("inputBox").value;
 // parseFloat converts the input string to a float
 a = parseFloat(b);  
  document.getElementById('outputOne').innerHTML = "You typed: " + a;
  if (a === 1) {
  document.getElementById('outputTwo').innerHTML = "This is a square of " + a + " unit. Look closely! O.^.O";
    square(a);
 }
  else if (a === 0) {    document.getElementById('outputTwo').innerHTML = "A square of " + a + " units is technically not a square!";
     square(a);
  }
  else if (a < 0) {    document.getElementById('outputTwo').innerHTML = "Doh! That's a negative number. Not allowed!";
  }
  else if (a > 225) {    document.getElementById('outputTwo').innerHTML = "Boom Shackalack! Number too high! 225 is the limit";
  }
  else if (a !== 1) {  
  document.getElementById('outputTwo').innerHTML = "This is a square of " + a + " units";
    square(a);
 }
  
}