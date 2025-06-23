// Creating variables
var myX = 385, myY = 285; patronX=1000, patronY=1000, ESize=[], DSX=0, DSY=0, end=false, pause=false, KC=0
EnemyX=[], EnemyY=[], EBX=[],EBY=[]

window.alert("Welcome To My FPS! Using LMB, Destroy The Orange Cubes Trying To Come Close To You! Beware, If They Get Too Close, You Lose! Destory As Many Cubes As You Can!                                            Controls: Mouse-Move Crosshair; LMB-Shoot; P-Pause; Esc-Resume")

for(var i=0;i<4;i++){
EnemyX[i]=Math.random()*680+20
EnemyY[i]=Math.random()*480+20
EBX[i]=EnemyX[i]
EBY[i]=EnemyY[i]
ESize[i]=20
}

function update() {


if(pause==false){
if(end==false){
myX=mouseX-5
myY=mouseY-5

for(var i=0;i<4;i++){

ESize[i]+=0.5

if(areColliding(patronX,patronY,10,10, EnemyX[i], EnemyY[i],ESize[i],ESize[i]) ){
patronX=1000
patronY=1000
EnemyX[i]=Math.random()*680+20
EnemyY[i]=Math.random()*480+20
EBX[i]=EnemyX[i]
EBY[i]=EnemyY[i]
ESize[i]=20
KC+=1
}

}

}
}

}

function draw() {
    // This is how you draw a rectangle
	context.fillStyle="#62e3c0"
	context.fillRect(0, 0, 800, 600);

for(var i=0;i<4;i++){
context.fillStyle="#e07b22"
context.fillRect(EnemyX[i], EnemyY[i],ESize[i],ESize[i])
context.strokeRect(EBX[i], EBY[i],ESize[i],ESize[i])
}	

context.strokeRect(myX, myY, 10, 10);

if(pause==true){
context.fillStyle="#c9daf5"
context.fillRect(0, 0, 800, 600);
context.fillStyle="#7dd45d";
context.font='100px Title';
context.fillText("Paused",250,300);
}

for(var i=0;i<4;i++){

if(ESize[i]>=130){
context.fillStyle="#171454";
context.font='100px Title';
context.fillText("You Lost!",180,300);
context.font='30px Title';
context.fillText("Try again by clicking refresh!",200,350);
context.fillText("Cubes Destroyed:",250,400);
context.fillText(KC,480,400);
end=true
}

}


};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
if(key==[80]){
pause=true
}

if(key==[27]){
pause=false
}
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
for(var i=0;i<4;i++){

if(areColliding(myX,myY,10,10,EnemyX[i], EnemyY[i],ESize[i],ESize[i]) ){
patronX=EnemyX[i]
patronY=EnemyY[i]
}

}
};