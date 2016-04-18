var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var test;
(function (test) {
    var MenuScene = (function (_super) {
        __extends(MenuScene, _super);
        function MenuScene() {
            _super.call(this);
            this.isdown = false;
            this.isOver = false;
            this.textureButton = PIXI.Texture.fromImage("img/button.png");
            this.textureButtonDown = PIXI.Texture.fromImage("img/buttonDown.png");
            this.textureButtonOver = PIXI.Texture.fromImage("img/buttonOver.png");
            this.button = new PIXI.Sprite(this.textureButton);
            this.button.scale.x = test.ScenesManager.defaultWidth / 400;
            this.button.scale.y = this.button.scale.x;
            this.button.anchor.x = 0.5;
            this.button.anchor.y = 0.5;
            this.button.position.x = test.ScenesManager.defaultWidth / 2;
            this.button.position.y = test.ScenesManager.defaultHeight / 2;
            this.button.interactive = true;
            this._registerEvents();
            this.addChild(this.button);
        }
        MenuScene.prototype._registerEvents = function () {
            var that = this;
            this.button
                .on('mousedown', function () {
                if (that.isPaused())
                    return;
                that.isdown = true;
                that.button.texture = that.textureButtonDown;
                that.button.alpha = 1;
            }).on('mouseup', function () {
                if (that.isPaused())
                    return;
                that.isdown = false;
                if (that.isOver) {
                    that.button.texture = that.textureButtonOver;
                }
                else {
                    that.button.texture = that.textureButton;
                }
            }).on('mouseover', function () {
                if (that.isPaused())
                    return;
                that.isOver = true;
                if (that.isdown)
                    return;
                that.button.texture = that.textureButtonOver;
            }).on('mouseout', function () {
                if (that.isPaused())
                    return;
                that.isOver = false;
                if (that.isdown)
                    return;
                that.button.texture = that.textureButton;
            }).on('click', function () {
                if (that.isPaused())
                    return;
                test.ScenesManager.goToScene('game');
            });
        };
        MenuScene.prototype.OnButtonDown = function () {
            var that = this;
            if (that.isPaused)
                return;
            console.log(that.button);
            that.isdown = true;
            that.button.texture = that.textureButtonDown;
            that.button.alpha = 1;
        };
        MenuScene.prototype.OnButtonUp = function () {
            if (this.isPaused)
                return;
            this.isdown = false;
            if (this.isOver) {
                this.button.texture = this.textureButtonOver;
            }
            else {
                this.button.texture = this.textureButton;
            }
        };
        MenuScene.prototype.OnButtonOver = function () {
            if (this.isPaused)
                return;
            this.isOver = true;
            if (this.isdown)
                return;
            this.button.texture = this.textureButtonOver;
        };
        MenuScene.prototype.OnButtonOut = function () {
            if (this.isPaused)
                return;
            this.isOver = false;
            if (this.isdown)
                return;
            this.button.texture = this.textureButton;
        };
        MenuScene.prototype.OnButtonClick = function () {
            if (this.isPaused)
                return;
        };
        return MenuScene;
    })(test.Scene);
    test.MenuScene = MenuScene;
})(test || (test = {}));
