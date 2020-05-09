var ball;
var database, position
var playercount=0
var gamestate=0, player,form,game
function setup(){
    createCanvas(500,500);
    database=firebase.database()
   game= new Game()
   game.getState()
   game.start() 
}

function draw(){
    background("white");
}