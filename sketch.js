const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world
var background1,background1Img;
var ground,box1,rope,monster;
var gameState = "seige1";
var seige3 = 0;
var seige2 = 1;
var hero
var monster;
var ground2
var ground1
var box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40;
function preload() {
//preload the images here
background1 = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();

world = engine.world;

ground = new Ground(600,600,1200,20);
ground1 = new Ground1(1080,490,7,1)
hero = new Hero(350,400,400);
rope = new Rope(hero.body,{x:350,y:50});
box1 = new Block(700,370,60,60);
box2 = new Block(700,330,60,60);
box3 = new Block(700,290,60,60);
box4 = new Block(700,250,60,60);
box5 = new Block(700,210,60,60);
box6 = new Block(700,170,60,60);
box7 = new Block(700,130,60,60);
box8 = new Block(700,90,60,60);
box9 = new Block(620,370,60,60);
box10 = new Block(620,330,60,60);
box11 = new Block(620,290,60,60);
box12 = new Block(620,250,60,60);
box13 = new Block(620,210,60,60);
box14 = new Block(620,170,60,60);
box15 = new Block(620,130,60,60);
box16 = new Block(620,90,60,60);
box17 = new Block(620,50,60,60);
box18 = new Block(780,370,60,60);
box19 = new Block(780,330,60,60);
box20 = new Block(780,290,60,60);
box21 = new Block(780,250,60,60);
box22 = new Block(780,210,60,60);
box23 = new Block(780,170,60,60);
box24 = new Block(780,130,60,60);
box25 = new Block(780,90,60,60);
box26 = new Block(780,50,60,60);
box27 = new Block(860,50,60,60);
box28 = new Block(860,370,60,60);
box29 = new Block(860,330,60,60);
box30 = new Block(860,290,60,60);
box31 = new Block(860,250,60,60);
box32 = new Block(860,210,60,60);
box33 = new Block(860,170,60,60);
box34 = new Block(860,130,60,60);
box35 = new Block(860,90,60,60);
box36 = new Block(860,50,60,60);
monster = new Monster(1080,235,300);



}

function draw() {
  Engine.update(engine)
   background(background1)
   if(keyCode===32){
     gameState=seige3;
     
   }
    if(keyCode===13){
      gameState=seige2;
    }
   if(gameState==="seige1"){
   background(0);
   fill("red");
   textSize(50)
   text("Siddharth Purohit/ WhiteHat Jr/Date:18/01/2021/Project Kill The Monster/Thanks;",25,50)
   fill("gold");
   text("LET You Have To Understand The Story And Instruction Of The Game Press ,",25,250);
   text(" ENTER TO See The Story Of The Game",25,350);
   fill("green");
   textSize(100);
   text("ENTER",800,600)

   //text("Story:A Boy Name Rahul In His School The Teacher Of Rahul Gave The ,",25,250)
   }
if(gameState===seige2){
  
  background(0);
  fill("red");
  textSize(50);
  text("STORY: A Dragon Comes To The Town And The Dragon Wants To Destroy The ,",5,150);
  text("Town,Can You Help The Villagers To Kill The MONSTER, And You Have Also,",5,250);
  text("The Hero That Help You To KILL The MONSTER ENJOY,",5,350);
  fill("green");
  text("INSTRUCTION:You Have To Kill The MONSTER Which Is Other Side Of The Boxes,",5,550);
  text("INSTRUCTION:Drag The Monster TO KiLL The MONSTER",5,650);
fill("gold");
  text("PRESS SPACE TO ENTER THE GAME",250,750)
}
if(gameState==seige3){
 
   ground.display();
 hero.display();
 box1.display();
 
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 box26.display();
 box27.display();
 box28.display();
 box29.display();
 box30.display();
 box31.display();
 box32.display();
 box33.display();
 box34.display();
 box35.display();
 box36.display();
 //box5.display();
monster.display();
//ground1.display();
 //drawSprites();
}
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}