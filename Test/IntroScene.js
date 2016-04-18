var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var test;
(function (test) {
    var IntroScene = (function (_super) {
        __extends(IntroScene, _super);
        function IntroScene() {
            _super.call(this);
            this.logo = PIXI.Sprite.fromImage("img/logo.png");
            this.addChild(this.logo);
            this.logo.scale.x = test.ScenesManager.defaultWidth / 250;
            this.logo.scale.y = this.logo.scale.x;
            this.logo.anchor.x = 0.5;
            this.logo.anchor.y = 0.5;
            this.logo.alpha = 0;
            this.logo.position.x = test.ScenesManager.defaultWidth / 2;
            this.logo.position.y = test.ScenesManager.defaultHeight / 2;
        }
        IntroScene.prototype.update = function () {
            _super.prototype.update.call(this);
            if (this.logo.alpha < 1) {
                this.logo.alpha += 0.01;
            }
            else {
                test.ScenesManager.goToScene('menu');
            }
        };
        return IntroScene;
    })(test.Scene);
    test.IntroScene = IntroScene;
})(test || (test = {}));
