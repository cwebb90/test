var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseShape = (function () {
    function BaseShape() {
        this.innersize = 40;
        this.linesize = 2;
        this.linecolour = 0;
    }
    BaseShape.prototype.SetLines = function (graphic) {
        graphic.lineStyle(2, 0x0000FF, 1);
        graphic.beginFill(0xFF3300);
    };
    return BaseShape;
})();
var Shape_I = (function () {
    function Shape_I() {
    }
    return Shape_I;
})();
var Shape_O = (function (_super) {
    __extends(Shape_O, _super);
    function Shape_O() {
        _super.apply(this, arguments);
        this.inners = new Array();
        this.graph = new PIXI.Graphics();
    }
    Shape_O.prototype.initialise = function () {
        var graph1 = new PIXI.Graphics();
        this.SetLines(graph1);
        graph1.drawRect(0, 0, this.innersize, this.innersize);
    };
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
