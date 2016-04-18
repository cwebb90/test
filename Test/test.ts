/// <reference="Scripts/typings/jquery/jquery.d.ts" />
/// <reference="Scripts/typings/pixi.js/pixi.js.d.ts" />

class PIXEIngine {
    renderer: PIXI.WebGLRenderer = new PIXI.WebGLRenderer(400, 800);
    container: PIXI.Container = new PIXI.Container();    
    
    animate() {
        var that = this;
        requestAnimationFrame(function () { that.animate() });
        this.renderer.render(this.container);
    }

    init() {
        this.renderer.backgroundColor = 0x1099bb;
        $('body').append(this.renderer.view);//this still doesnt work here.
    }
}