class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1')
        title.html("Racing car")
        title.position(130,0)
        var input=createInput("Enter name ")
        input.position(130,160)
        var button=createButton('play')
        button.position(250,200)
        var greeting=createElement('h3')
        button.mousePressed(function() {
          input.hide()
          button.hide()
          var name=input.value()
          playercount=playercount+1
          player.update(name)
          player.updateCount(playercount)
           greeting.html("Hello, "+name)
           greeting.position(130,160)
        })
    }
}