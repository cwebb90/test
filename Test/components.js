var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var test;
(function (test) {
    var BaseShape = (function () {
        function BaseShape() {
            this.innersize = 40;
            this.startx = 0;
            this.starty = 0;
            this.linesize = 4;
            this.linecolour = 0xffffff;
            this.graphics = new PIXI.Graphics();
            this.CreateWithRect(this.startx, this.starty);
        }
        BaseShape.prototype.CreateWithRect = function (startx, starty) {
            this.graphics.beginFill(0xFF3300);
            this.graphics.lineStyle(this.linesize, this.linecolour, 1);
            this.graphics.drawRect(startx, starty, this.innersize, this.innersize);
            this.graphics.endFill();
        };
        BaseShape.prototype.CreateWithLines = function () {
            this.graphics.lineStyle(2, 0x0000FF, 1);
            this.graphics.beginFill(0xFF3300);
            this.graphics.moveTo(0, 0);
            this.graphics.lineTo(0, this.innersize);
            this.graphics.lineTo(this.innersize, this.innersize);
            this.graphics.lineTo(this.innersize, 0);
            this.graphics.endFill();
        };
        return BaseShape;
    })();
    test.BaseShape = BaseShape;
    var Shape_I = (function () {
        function Shape_I() {
            this.graphics = new PIXI.Graphics();
            this.innersize = 40;
            this.startx = 0;
            this.starty = 0;
            this.linesize = 4;
            this.linecolour = 0xffffff;
            for (var i = 0; i < 4; i++) {
                this.CreateWithRect(this.startx, this.starty);
                this.starty += this.innersize;
            }
        }
        Shape_I.prototype.CreateWithRect = function (startx, starty) {
            this.graphics.beginFill(0xFF3300);
            this.graphics.lineStyle(this.linesize, this.linecolour, 1);
            this.graphics.drawRect(startx, starty, this.innersize, this.innersize);
            this.graphics.endFill();
        };
        return Shape_I;
    })();
    test.Shape_I = Shape_I;
    var Shape_O = (function (_super) {
        __extends(Shape_O, _super);
        function Shape_O() {
            _super.apply(this, arguments);
        }
        return Shape_O;
    })(BaseShape);
    var Shape_T = (function () {
        function Shape_T() {
        }
        return Shape_T;
    })();
    var Shape_L = (function () {
        function Shape_L() {
        }
        return Shape_L;
    })();
    var Shape_J = (function () {
        function Shape_J() {
        }
        return Shape_J;
    })();
    var Shape_S = (function () {
        function Shape_S() {
        }
        return Shape_S;
    })();
    var Shape_Z = (function () {
        function Shape_Z() {
        }
        return Shape_Z;
    })();
})(test || (test = {}));
