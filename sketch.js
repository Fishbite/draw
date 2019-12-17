/* A simple sketchpad script
All drawing action happens when the mouse button is held down */

/* first we need a function to draw a dot when the mouse button
 is pressed down at a specific point on the html canvas */

// parameters are the canvas context & the x / y position & dot size
function drawDot(ctx, x, y, size) {
    // set variables for dot colour to opaque black:
    r = 0;
    g = 0;
    b = 0;
    a = 1;

    // set a fill style:
    ctx.fillStyle = "rgba("+r+", "+g+", "+b+", "+a+")";

    // draw a filled circle:
    ctx.beginPath();
    ctx.arc( x, y, size, 0, Math.PI*2, true)
    ctx.closePath();
    ctx.fill();
}

/* Now we need to create some event handlers for:
mousedown
mouseup
mousemove */

// some variables for referencing the canvas and 2d context
let canvas, ctx;

// some variables to keep track of the mouse status:
let mouseX, mouseY, mouseDown = 0;

// register a mouse click and draw a dot at the current position
function canvas1_mouseDown() {
    mouseDown = 1;
    drawDot( ctx, mouseX, mouseY, 4);
}

// de-register the mouse click
function canvas1_mouseUp() {
    mouseDown = 0;
}

// check to see if mouse button is down, if so, draw at the current position
function canvas1_mouseMove(e) {
    // update mouse position when moved
    getMousePos(e);
    //draw a pixel if the mouse button is being pressed
    if ( mouseDown == 1) {
        drawDot(ctx, mouseX, mouseY, 4);
    }
}

//update the mouseX & mouseY pos relative to the top left of canvas
function getMousePos(e) {
    if (!e) {var e = event;}

    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
}

// Set-up the canvas and add our event handlers after the page has loaded
function draw() {

// get the canvas element from the document:
    canvas = document.getElementById('canvas1');

// if the browser supports the canvas element, get the 2d context:
if (canvas.getContext){
    ctx = canvas.getContext('2d');
    }

// attach our event handelers to the events
canvas.addEventListener('mousedown', canvas1_mouseDown, false);
canvas.addEventListener('mousemove', canvas1_mouseMove, false);
//listen in the entire window in case mouseUp occurs off canvas
window.addEventListener('mouseup', canvas1_mouseUp, false);
}



// clear the canvas context using the canvas width & height:
function clearCanvas() {
    ctx.clearRect( 0, 0, canvas.clientWidth, canvas.height);
    }