// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Events = Matter.Events
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse;



var engine;
var world;
var boxes = [];



var ground;
var plat1;

var gameState;

    function setup () {
  createCanvas (1000,800)

// create an engine
engine = Engine.create();
world = engine.world;
Engine.run(engine);
var options = {
  isStatic: true
}
ground = Bodies.rectangle (500, height, width, 10, options);
World.add(world, ground);
plat1 = Bodies.rectangle(500, 750, 100, 10, options);
World.add(world, plat1);


gameState = 0;

}


function draw() {

  if (gameState == 0) { // Title Screen
    showTitleScreen();
  } else if (gameState == 1) {
    playGame();
  } else if (gameState == 2) {
    showGameOver()
  } else if (gameState == 3) {
    showCredits();
  }
}

function startOrRestartGame() {


  gameState = 1;



  }

function showTitleScreen() {
  background(0, 255, 0 );
  textSize(32);
  text("Stacker", 440, 30);
  textSize(12);
  text("by Chris Jacob", 455, 50)
  textSize(24);
  text("Press Spacebar to Start", 370, height/2);
  text("Press enter to see the credits screen", 310, height/2 + 50);
  if (keyIsPressed) {
    if (keyCode == 32) { // Spacebar's keycode (see website: keycode.info)
      // We want to reset all the important variables, then set the gameState to 1
      startOrRestartGame();
    } else if (keyCode == 13) {
      gameState = 3;


    }
  }
}
function mousePressed () {
   boxes.push(new Box(mouseX, mouseY, 40, 40));

}


  function playGame() {
  background(51)

for (var i = 0; i < boxes.length; i++) {
boxes[i].show();

// console.log(boxes[i].body.position.y)
}
noStroke(255);
fill(170);
rectMode(CENTER);
rect(500, height, width, 10);
rect(500, 750, 100, 10);


}

function showGameOver() {
  background("Gold");
  fill ("Black")
  textSize(32);
  if (gameWon) {
    text("You Won!", 430, 30);
    textSize(22);
    text("NICE WORK", 435, 60);
  } else {
    background("Red")
    text("You Lost", 420, 30);
    textSize(22);
    text("TOO BAD", 435, 60);
  }
  textSize(24);
  text("Press Spacebar to Re-Start", 350, height/2);
  text("Press enter to see the credits screen", 300, height/2 + 50);
  if (keyIsPressed) {
    if (keyCode == 32) {
       // Spacebar's keycode (see website: keycode.info)
      // We want to reset all the important variables, then set the gameState to 1
      startOrRestartGame();
    } else if (keyCode == 13) {
      gameState = 3;
    }
  }
}
  function showCredits() {
    background(255,200,150);
    textSize(24);
    text("This took forever", 400, 30);
    text("Code by: Christopher Jacob", 340, 70);
    text("P5.js and matter.js", 390, 110);
    text("Thank you for playing", 370, 150);
    text("Press shift to return to the title screen", 290, height/2);
    if (keyIsPressed) {
      if (keyCode == 16) {
        gameState = 0;
      }
    }
  }
