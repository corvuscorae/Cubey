class MouseSmiley extends Phaser.Scene {
    constructor(){
        super("mouseSmiley");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
    }

    preload() {

    }

    create() {
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'

        let my = this.my;   // create an alias to this.my for readability
        this.input.on('pointerdown', (pointer) => {
            let touchX = pointer.x;
            let touchY = pointer.y;
            my.sprite.body = this.add.sprite(touchX, touchY, "yellowBody");
            my.sprite.smile = this.add.sprite(touchX, touchY, "smile");
        });
        

    }

    update() {
        let my = this.my;   // create an alias to this.my for readability
        /*var pointer = this.input.activePointer;
        if(pointer.isDown){
            var touchX = pointer.x;
            var touchY = pointer.y;
            my.sprite.body = this.add.sprite(touchX, touchY, "yellowBody");
            my.sprite.smile = this.add.sprite(touchX, touchY, "smile");
        }*/

    }
}