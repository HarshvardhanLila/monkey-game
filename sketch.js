
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
  


function setup() {
  createCanvas(600,400)

  monkey = createSprite(50,345,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,380,900,10)
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
 
  
}


function draw() {
background("WHITE");
  ground.x=ground.width/2;
  //console.log(ground.x)
  if(keyWentDown("space")){
    monkey.velocityY = -8
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  food();
  obstacles();
  score = Math.ceil(frameCount/frameRate())
  textSize(15)
  text("Survival Time : "+ score,460,50  )
  if(obstacleGroup.isTouching(monkey)){
    background("black");
    ground.visible = false;
    monkey.visible = false;
    obstacleGroup.setVisibleEach(false)
    FoodGroup.setVisibleEach(false)
    ground.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach (0);
    obstacleGroup.setLifetimeEach (-1);
    FoodGroup.setLifetimeEach (-1);
    score = 0;
      stroke("red")
      fill("RED")
     textSize(50);
    text("GAME OVER",200,200)
  }
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score = score + 5;
  }
 
  drawSprites();
}
function food(){
  if(frameCount%80===0){
    banana = createSprite(650,200,50,50);
    banana.velocityX = -4
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 300;  
    FoodGroup.add(banana);
  }
  
  }
  function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(650,350,50,50);
    obstacle.velocityX = -3;
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 300;
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
    monkey.depth = obstacle.depth
    monkey.depth = monkey.depth + 1
    
  }
  }
      
  
  
  







                          