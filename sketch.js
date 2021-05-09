const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thunder1,thunder2,thunder3,thunder4,thunderCreateFrame = 0;
var drops = [];
var maxDrops = 100;
var engine,world,thunder;

function preload(){
    thunder1 = loadImage("images/thunderbolt/t1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
   createCanvas(400,600);
   engine = Engine.create();
	world = engine.world;

    man = new Umbrella(200,460);
    if(frameCount%150==0){
        for(var i = 0;i<maxDrops;i++){
            drops.push(new Drop(random(0,400),random(0,400)));
        }
    }
    //Engine.run(engine);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    

    for(var i = 0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].update();
    }
    var rand = Math.round(random(1,4));
    if(frameCount % 60 === 0) {
        thunderCreateFrame = frameCount;
        thunder = createSprite(random(0,400),random(0,400),10,10);
        
        //generate random obstacles
        
        switch(rand) {
          case 1: thunder.addImage(thunder1);
                  break;
          case 2: thunder.addImage(thunder2);
                  break;
          case 3: thunder.addImage(thunder3);
                  break;
          case 4: thunder.addImage(thunder4);
                  break;
          default: break;
        }
        thunder.scale = random(0.2,0.5);
    }
    if(thunderCreateFrame+10===frameCount && thunder){
        thunder.destroy();
    }

    man.display();
    drawSprites();
}   

