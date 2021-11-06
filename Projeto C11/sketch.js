var path,Jaxon, leftBoundary,rightBoundary; 
var pathImg,JaxonImg;



function preload(){
  pathImg = loadImage("path.png");
  JaxonImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
path=createSprite(200,200,10,10);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//criando menino que corre
Jaxon = createSprite(180,340,30,30);
Jaxon.scale=0.08;
Jaxon.addAnimation("JaxonRunning",JaxonImg);
  
// crie Boundary (Limite) esquerdo
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crie Boundary direito
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // menino se movendo no eixe X com o mouse
  Jaxon.x = World.mouseX;
  
  edges= createEdgeSprites();
  Jaxon.collide(edges[3]);
  Jaxon.collide(leftBoundary);
  Jaxon.collide(rightBoundary);
  
  //código para reiniciar o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
