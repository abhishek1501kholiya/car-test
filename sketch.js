var car , wall;
var weight , speed, deformation;
function setup() {
  createCanvas(800,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,100);
  weight = random(400,1600);
 
}

function draw() {
  background(255,255,0);  
  car.velocityX = speed;
  wall.shapeColor = color(230,230,0);
  if(car.x  - wall.x <(car.width + wall.width)/2){
    car.velocityx =0;
    deformation = 0.5 * weight  * speed * speed /22500;  
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(  deformation<180 && deformation>100 ){
    car.shapeColor = color(230,230,0)   ;
    }
    if(deformation<100){
  car.shapeColor = color(0,255,0);
}
    }

  drawSprites();
}