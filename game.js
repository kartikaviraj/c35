class Game{
    constructor(){

    }
    getState(){
       database.ref('gameState').on("value", function(data){
         gamestate=data.val()
       }) 
    }
    update(state){
    database.ref('/').update({
        gameState:state
    })
    }
    start(){
      if(gamestate===0){
          player=new Player()
          player.getCount()
          form= new Form()
          form.display()
      }  
    }
}