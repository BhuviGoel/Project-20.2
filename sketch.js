var car,wall;
var speed, weight;
var deform;
function setup() {
  createCanvas(1200,400);
  speed=random(55,90);

  weight=random(400,1500);

  car=createSprite(20, 200, 20, 20);
  car.velocityX=speed;

  wall=createSprite(1100, 200, 30, height/2);
  wall.shapeColor= color(80,80,80);

//   deform=(0.5*weight*speed*speed)/22500
}

function draw() {
  background("black");  
  if (car.collide(wall)){
	car.velocityX=0;
	deform=(0.5*weight*speed*speed)/22500
  }
  if (deform<100 ){
    car.shapeColor=color(0,255,0);
  }
  if (180>deform && deform>100){
    car.shapeColor=color(255,255,0);
  }
  if (deform>180){
    car.shapeColor=color(255,0,0);
   }
   console.log(deform);
  drawSprites();
}