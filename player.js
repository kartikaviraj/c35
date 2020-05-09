class Player{
    constructor(){

    }
 getCount(){
    database.ref('playerCount').on("value",function(data) {
        playercount=data.val()
    })
 }
 updateCount(count){
     database.ref('/').update({
         playerCount:count
     })
 }
        update(name){
            var pindex="player"+playercount
            database.ref(pindex).set({
                name:name
            })
        }
    
}