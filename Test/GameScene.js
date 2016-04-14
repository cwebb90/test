///<reference path="Scene.ts" />
///<reference path="Scripts/typings/pixi.js/pixi.js.d.ts" />
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
        }
        GameScene.prototype.update = function () {
            _super.prototype.update.call(this);
            this.bunny.rotation += 0.1;
        };
        return GameScene;
    })(test.Scene);
    test.GameScene = GameScene;
})(test || (test = {}));
//# sourceMappingURL=GameScene.js.map