var car,wall;
var weight;
var speed=20;

function setup() {
  createCanvas(1600, 400);
  
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  
  wall=createSprite(1500,200,50,height/2);
  
  
  
  weight=random(400,1500);
  speed=random(50,90);
  console.log=speed;
  
}

function draw() {
  background(220);
  
  if(wall.x-car.x <(car.width+wall.width)/2){
  car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    
    if(deformation>180){
     car.shapeColor =color(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
     car.shapeColor =color(230,230,0);
    }
    
    if(deformation<100){
     car.shapeColor =color(0,255,0);
    }
    
    
    
    }
  
drawSprites();
  stroke ("black");
  text ("SPEED= "+speed,40,50); 
  text ("WEIGHT= "+weight,220,50); 
  text ("DEFORMATION= "+deformation,410,50); 
  
  
}
