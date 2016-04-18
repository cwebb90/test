//probably easier to draw each shape ourselves?
//http://tetris.wikia.com/wiki/Tetromino
class BaseShape {
    innersize: number = 40;
    linesize: number = 2;
    linecolour: number = 0;

    SetLines(graphic: PIXI.Graphics) {
        graphic.lineStyle(2, 0x0000FF, 1);
        graphic.beginFill(0xFF3300);
    }
}

class Shape_I {
    
}
//we cant really make them outside and import them, 
//because we'll need the ability to cut them up once lines have been made
//if we can make an base square object that every higher object will be made from
class Shape_O extends BaseShape {
    inners: PIXI.Graphics[] = new Array<PIXI.Graphics>();

    graph: PIXI.Graphics = new PIXI.Graphics();
    
    initialise() {
        var graph1: PIXI.Graphics = new PIXI.Graphics();
        this.SetLines(graph1);
        graph1.drawRect(0, 0, this.innersize, this.innersize);
    }
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