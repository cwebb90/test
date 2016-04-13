/// <reference="Scripts/typings/jquery/jquery.d.ts" />
/// <reference="Scripts/typings/pixi.js/pixi.js.d.ts" />
var PIXEIngine = (function () {
    function PIXEIngine() {
        this.renderer = new PIXI.WebGLRenderer(400, 800);
        this.container = new PIXI.Container();
    }
    PIXEIngine.prototype.animate = function () {
        var that = this;
        requestAnimationFrame(function () { that.animate(); });
        this.renderer.render(this.container);
    };
    PIXEIngine.prototype.init = function () {
        this.renderer.backgroundColor = 0x1099bb;
        $('body').append(this.renderer.view); //this still doesnt work here.
    };
    return PIXEIngine;
})();
//# sourceMappingURL=test.js.map