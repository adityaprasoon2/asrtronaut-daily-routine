var bgImg;
var  Astronaut,Astronautimg;
var sleep,brush,gym,eat,drink,move,bath;
var sleepimg,brushimg,gymimg,eatimg,drinkimg,moveimg,bathimg;
var edges;
function preload(){
  

bgImg =loadImage("images/iss.png");

sleep = loadAnimation("images/sleep.png");

brush= loadAnimation("images/brush.png");
gym= loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
eat = loadAnimation ("images/eat1.png","images/eat2.png");
bath=loadAnimation("images/bath1.png","images/bath2.png")
drink = loadAnimation("images/drink1.png","images/drink2.png");
move = loadAnimation("images/move.png","images/move1.png");

}
function setup() {
  createCanvas(400,400);
  


Astronaut=createSprite(300,230);
Astronaut.addAnimation("sleeping",sleep);
  Astronaut.scale=0.1;

}



function draw() {
  background(bgImg);
  textSize(20); fill("white");
   text("Instructions:",20, 35); 
  textSize(15); 
  text("Up Arrow = Brushing",20, 55);
   text("Down Arrow = Gymming",20, 70); 
  text("Left Arrow = Eating",20, 85);
   text("Right Arrow = Bathing",20, 100);
   text("m key = Moving",20, 115);
  edges=createEdgeSprites();
   Astronaut.bounceOff(edges);
    if (keyDown ("UP_ARROW")){
    Astronaut.addAnimation ("brushing", brush);
     Astronaut.changeAnimation ("brushing");   
    Astronaut.y = 350;   
    Astronaut.velocityX = 0;   
    Astronaut.velocityY=0;
    }
    if (keyDown ("DOWN_ARROW")){
      Astronaut.addAnimation ("gymming", gym);
       Astronaut.changeAnimation ("gymming");   
      Astronaut.y = 350;   
      Astronaut.velocityX = 0;   
      Astronaut.velocityY=0;
      }
      if (keyDown ("RIGHT_ARROW")){
        Astronaut.addAnimation ("bathing",bath );
         Astronaut.changeAnimation ("bathing");   
        Astronaut.y = 350;   
        Astronaut.velocityX = 0;   
        Astronaut.velocityY=0;
        }
        if (keyDown ("LEFT_ARROW")){
          Astronaut.addAnimation ("eating", eat); 
          Astronaut.changeAnimation ("eating");   
          Astronaut.y = 350;   
          Astronaut.velocityX = 0;  
          Astronaut.velocityY=0
          }
          if (keyDown ("M")){
            Astronaut.addAnimation ("moving",move); 
            Astronaut.changeAnimation ("moving");   
            Astronaut.y = 350;   
            Astronaut.velocityX = 1;   
            Astronaut.velocityY=1;
            }  
            
  drawSprites();
}