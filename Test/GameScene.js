var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var test;
(function (test) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            _super.call(this);
            this.bunny = PIXI.Sprite.fromImage("img/bunny.png");
            this.bunny.anchor.x = 0.5;
            this.bunny.anchor.y = 0.5;
            this.bunny.position.x = 50;
            this.bunny.position.y = 50;
            this.addChild(this.bunny);
            var that = this;
            var button = new PIXI.Sprite(PIXI.Texture.fromImage("img/MenuButton.png"));
            button.position.x = test.ScenesManager.defaultWidth - 200;
            button.scale.x = 0.5;
            button.scale.y = 0.5;
            button.on("click", function () {
                if (that.isPaused())
                    return;
                test.ScenesManager.goToScene('menu');
            });
            button.interactive = true;
            this.addChild(button);
            this.interactive = true;
        }
        GameScene.prototype.update = function () {
            _super.prototype.update.call(this);
            this.bunny.rotation += 0.1;
        };
        return GameScene;
    })(test.Scene);
    test.GameScene = GameScene;
})(test || (test = {}));
