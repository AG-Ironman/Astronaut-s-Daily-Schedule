function preload() {
  bg=loadImage("Images/iss.png");
  sleep=loadImage("Images/sleep.png");
  brush=loadImage("Images/brush.png");
;
  gym=loadAnimation("Images/gym1.png", "Images/gym2.png")
  drink = loadAnimation("Images/drink1.png", "Images/drink2.png");
  eat = loadAnimation("Images/eat1.png", "Images/eat2.png");
  bath = loadAnimation("Images/bath1.png", "Images/bath2.png");
  moving = loadAnimation("Images/move.png", "Images/move1.png");

}

function setup() {
  createCanvas(600,500);
  astronaut=createSprite(300, 230, 50, 50);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1
}

function draw() {
  background(bg);  
  drawSprites();

  textSize(15)
  stroke("black")
  fill("white")
  text("1. Up Arrow = Brushing", 20, 55)
  text("2.Down Arrow = Gymming", 20, 70)
  text("3. Left Arrow = Eating", 20, 85)
  text("4. Right Arrow = Bathing", 20, 100)
  text("5. M = Moving", 20, 115)
  text("6. D = Drink", 20, 130)
  edges = createEdgeSprites()
  astronaut.bounceOff(edges)
  
  if(keyDown("up")) {
    astronaut.addAnimation("brush", brush)
    astronaut.changeAnimation("brush")
    astronaut.y = 350
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
  }
  if(keyDown("down")) {
    astronaut.addAnimation("gym", gym)
    astronaut.changeAnimation("gym")
    astronaut.y = 350
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
  }
  if(keyDown("left")) {
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.x = 150
    astronaut.velocityX = 0.5
    astronaut.velocityY = 0.5
  }
  if(keyDown("right")) {
    astronaut.addAnimation("bathing", bath)
    astronaut.changeAnimation("bathing")
    astronaut.x = 300
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
  }
  if(keyDown("m")) {
    astronaut.addAnimation("moving", bath)
    astronaut.changeAnimation("moving")
    astronaut.x = 300
    astronaut.velocityX = 1
    astronaut.velocityY = 0.7
  }
  if(keyDown("d")) {
    astronaut.addAnimation("drinking", drink)
    astronaut.changeAnimation("drinking")
    astronaut.y = 350
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
  }
}