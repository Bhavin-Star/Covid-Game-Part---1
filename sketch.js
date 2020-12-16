var virus, virusImg, player, playerImg, bg, virusGroup, score;
var gamestate = 1

function preload(){
   
    virusImg = loadImage('images/virus.png');
    bg = loadImage('images/bg.jpg');
    playerImg = loadImage('images/plr.png')
    
}

function setup(){
    createCanvas(windowWidth,windowHeight)

    player = createSprite(100,windowHeight/2,50,50);    
    player.addImage(playerImg);
    player.scale = 0.3;
    
    virusGroup = createGroup();
    score = 0;
    
}

function draw(){
    background('green');

    
    imageMode(CENTER);
    image(bg,windowWidth/2, windowHeight/2, windowWidth, windowHeight)
    

    if(gamestate == 1){
        spawnVirus();
        
    
        drawSprites();

        score = score + Math.round(getFrameRate()/60);
        textSize(18)
        fill(210,39,48);
        text ("Score: " + score, 50,50);  

        if(player.isTouching(virusGroup)){
            gamestate = 2
        }

        if(gamestate == 2){
            virusGroup.destroyEach();
        }
    }

    if(gamestate == 2){
        
        textSize(28)
        fill(210,39,48);
        text ("Your Score: " + score, windowWidth/2 - 50, windowHeight/2 + 50); 

        textSize(28)
        fill('cyan');
        text('You Lose', windowWidth/2, windowHeight/2 - 50)

        textSize(28)
        fill('yellow');
        text('You have been affected by Covid - 19', windowWidth/2 - 150, windowHeight/2)
    }
    
}   

function spawnVirus(){
    if(World.frameCount % 70 == 0){
        virus = createSprite(windowWidth,random(100,windowHeight-100),50,50)
        virus.velocityX = -3
        virus.addImage(virusImg);
        virus.scale = 0.04;  
        virusGroup.add(virus);      
    }

    
}

function keyPressed(){
    
    if(keyCode == 39){
        player.velocityX = 4;
        player.velocityY = 0;
    }
    
    else if(keyCode == 38){
        player.velocityY = -4;
        player.velocityX = 0;
    }

    else if(keyCode == 37){
        player.velocityX = -4;
        player.velocityY = 0;
    }

    else if(keyCode == 40){
        player.velocityY = 4;
        player.velocityX = 0;
    }
}