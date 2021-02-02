var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet1 = createSprite(1700,10,10,10)
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall1 = createSprite(1700,10,10,10)
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
}

function hasCollided(bullet1, wall1){
  bulletRightEdge = bullet1.x +bullet1.width;
  wallLeftEdge =wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

function draw() {
  background("black");  
  bullet.shapeColor = color("white")
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed;

  if(hasCollided(bullet , wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor = color(0,255,0);
      wall.shapeColor = color(0,255,0);
    }

  }


  drawSprites();
}