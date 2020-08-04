var maxDrops = 100;
function setup() {
  
createCanvas(400,400);

}

function draw() {  
  

  drawSprites();
}

for(var i = 0; i < maxDrops; i++){
  drops.push(new createDrop(random(0,400),random(0,400)));
}

