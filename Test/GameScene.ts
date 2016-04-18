///<reference path="Scene.ts" />
///<reference path="components.ts" />
///<reference path="Scripts/typings/pixi.js/pixi.js.d.ts" />
//game logic goes here.
module test {
    export class GameScene extends Scene {
        private bunny: PIXI.Sprite;

        private square: test.BaseShape;
        private shape: test.Shape_I;

        constructor() {
            super();           

            this.bunny = PIXI.Sprite.fromImage("img/bunny.png");
            this.bunny.anchor.x = 0.5;
            this.bunny.anchor.y = 0.5;
            this.bunny.position.x = 50;
            this.bunny.position.y = 50;
            this.addChild(this.bunny);

            this.shape = new test.Shape_I();

            this.addChild(this.shape.graphics);

            var that = this;
            var button = new PIXI.Sprite(PIXI.Texture.fromImage("img/MenuButton.png"));
            button.position.x = ScenesManager.defaultWidth - 200;
            button.scale.x = 0.5;
            button.scale.y = 0.5;
            button.on("click", function () {
                if (that.isPaused()) return;
                ScenesManager.goToScene('menu');
            });

            button.interactive = true;
            this.addChild(button);
            this.interactive = true;
        }

        public update() {
            super.update();
            this.bunny.rotation += 0.1;
        }
    }
}