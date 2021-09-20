var stickFigureIntro, StickFigureIntro_IMG, button, button_IMG

var gameState = "introduction"

function preload(){
  StickFigureIntro_IMG = loadImage("images/StickFigureMan.png")
  button_IMG = loadImage("images/PlayButton.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(255,255,255);
  

  if(gameState === "introduction"){
    textSize(20)
    text("Stick Figure Adventure!!!", displayWidth/2-125,displayHeight-300)

    stickFigureIntro = createSprite(displayWidth/2, displayHeight/2-175)
    stickFigureIntro.addImage(StickFigureIntro_IMG)
    stickFigureIntro.scale=0.75
    stickFigureIntro.visible=true
    

  button = createSprite(displayWidth/2-75,80)
  button.scale=0.4;
  button.addImage(button_IMG)
  if(mousePressedOver(button)){
    gameState = "cutscene"
  }
    

  }


  if(gameState === "cutscene"){
    nameSprite = createSprite(80,displayHeight/2-100)
    nameSprite.addImage(StickFigureIntro_IMG)
    nameSprite.scale = 0.6;

    stickFigureIntro.visible=false
    button.destroy()
  }
  
  
  drawSprites();
}
