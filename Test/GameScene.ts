///<reference path="Scene.ts" />
///<reference path="Scripts/typings/pixi.js/pixi.js.d.ts" />

module test {
    export class GameScene extends Scene {
        private bunny: PIXI.Sprite;

        constructor() {
            super();

            this.bunny = PIXI.Sprite.fromImage("img/bunny.png");
            this.bunny.anchor.x = 0.5;
            this.bunny.anchor.y = 0.5;

            this.bunny.position.x = 50;
            this.bunny.position.y = 50;

            this.addChild(this.bunny);
        }

        public update() {
            console.log('???');
            super.update();
            this.bunny.rotation += 0.1
        }
    }
}