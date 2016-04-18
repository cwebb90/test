var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var test;
(function (test) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.paused = false;
            this.updateCB = function () { };
        }
        Scene.prototype.onUpdate = function (updateCB) {
            this.updateCB = updateCB;
        };
        Scene.prototype.update = function () {
            this.updateCB();
        };
        Scene.prototype.pause = function () {
            this.paused = true;
        };
        Scene.prototype.resume = function () {
            this.paused = false;
        };
        Scene.prototype.isPaused = function () {
            return this.paused;
        };
        Scene.prototype.changeBackgroundColor = function (render, color) {
            render.backgroundColor = color;
        };
        return Scene;
    })(PIXI.Container);
    test.Scene = Scene;
})(test || (test = {}));
