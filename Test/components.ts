//probably easier to draw each shape ourselves?

//we could stop drawing the shape once it hits the bottom, get its co ordinates and then redraw it statically
//using single blocks, then we could just delete them as and when and theres no connection between the shapes themselves and the deletions.
//all we would need is to know the colour and the position.
//http://tetris.wikia.com/wiki/Tetromino
module test {
    export class BaseShape {
        innersize: number = 40;
        startx: number = 0;
        starty: number = 0;
        linesize: number = 4;
        linecolour: number = 0xffffff;

        //okay so the base shape should be a simple square
        //we can make that using graphic.rect or whatever
        //we possible might have to make that into a sprite later?
        //because i'm not sure how much we can do with a simple graphics object idk.
        //stage one get square on screen. go.

        graphics: PIXI.Graphics = new PIXI.Graphics();

        texture: PIXI.Texture;

        sprite: PIXI.Sprite;

        constructor() {
            this.CreateWithRect(this.startx, this.starty);
        }

        CreateWithRect(startx: number, starty: number) {
            this.graphics.beginFill(0xFF3300);
            this.graphics.lineStyle(this.linesize, this.linecolour, 1);
            this.graphics.drawRect(startx, starty, this.innersize, this.innersize);
            this.graphics.endFill();

            //this.texture = this.graphics.generateTexture(ScenesManager.renderer);

            //this.sprite = new PIXI.Sprite(this.texture);

            //var text: PIXI.Texture = new PIXI.Texture(

            //var spritefromgraph: PIXI.Sprite = new PIXI.Sprite(this.graphics);
        }

        CreateWithLines() {
            this.graphics.lineStyle(2, 0x0000FF, 1);
            this.graphics.beginFill(0xFF3300);
            this.graphics.moveTo(0, 0);
            this.graphics.lineTo(0, this.innersize);
            this.graphics.lineTo(this.innersize, this.innersize);
            this.graphics.lineTo(this.innersize, 0);
            this.graphics.endFill();
        }
    }

    export class Shape_I {
        graphics: PIXI.Graphics = new PIXI.Graphics();
        innersize: number = 40;
        startx: number = 0;
        starty: number = 0;
        linesize: number = 4;
        linecolour: number = 0xffffff;

        CreateWithRect(startx: number, starty: number) {
            this.graphics.beginFill(0xFF3300);
            this.graphics.lineStyle(this.linesize, this.linecolour, 1);
            this.graphics.drawRect(startx, starty, this.innersize, this.innersize);
            this.graphics.endFill();
        }
        constructor() {
            for (var i = 0; i < 4; i++) {
                this.CreateWithRect(this.startx, this.starty);
                this.starty += this.innersize;
            }
        }
    }
    //we cant really make them outside and import them, 
    //because we'll need the ability to cut them up once lines have been made
    //if we can make an base square object that every higher object will be made from
    class Shape_O extends BaseShape {

    }

    class Shape_T {

    }

    class Shape_L {

    }

    class Shape_J {

    }

    class Shape_S {

    }

    class Shape_Z {

    }
}