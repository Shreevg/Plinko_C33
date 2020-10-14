var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var flag = 0;

var score = 0;
var particleScore;

var turn = 0;

var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 

   textSize(30)
   text("Score: "+score, 50, 450)
   
   textSize(50)
   text("1", 25, 600)

   textSize(50)
   text("1", 105, 600)

   if(particles.x<160&&particles.y>750){
    score=score+1
  }


   textSize(50)
   text("5", 188, 600)

   textSize(50)
   text("5", 268, 600)

   if(particles.x>160&&particles.x<320&&particles.y>700){
    score=score+1
  }


   textSize(50)
   text("10", 330, 600)

   textSize(50)
   text("10", 410, 600)

   textSize(50)
   text("5", 508, 600)

   textSize(50)
   text("5", 588, 600)

   textSize(50)
   text("1", 665, 600)

   textSize(50)
   text("1", 745, 600)


  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }



}