class Form  {
    constructor(){
        this.button = createButton('Play')
    }

    hide(){
    this.button.hide();
    }

    display(){
        this.button.position(displayWidth/2-175,50)
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'gray');

        this.button.mousePressed(()=> {
            this.button.hide()
            gameState = "cutscene"
        })
    }
    
    

}