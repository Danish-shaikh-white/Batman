class Drop{
    constructor(x,y);
}
this.image = loadImage("sprites/drop.jpg");
var maxDrops=100;
for(var i=0; i<maxDrops; i++){
drops.push(new createDrop(random(0,400), random(0,400)));
}