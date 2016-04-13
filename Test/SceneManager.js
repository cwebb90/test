//this should help for later down the line when we want to switch between different states.
//its not necessary for right now, but would be nice to get a working project going.
///<reference path="Scripts/typings/pixi.js/pixi.js.d.ts" />
///<reference path="Scene.ts"/>
var test;
(function (test) {
    var ScenesManager = (function () {
        function ScenesManager() {
        }
        ScenesManager.create = function (width, height) {
            if (ScenesManager.renderer)
                return this; //??
            ScenesManager.renderer = new PIXI.WebGLRenderer(width, height);
            document.body.appendChild(ScenesManager.renderer.view);
            requestAnimationFrame(ScenesManager.renderloop); //??
            return this;
        };
        ScenesManager.renderloop = function () {
            requestAnimationFrame(function () { ScenesManager.renderloop(); });
            if (!this.currentScene || this.currentScene.isPaused()) {
                return;
            } //check if current scene exists and is not paused, then update it and render it
            this.currentScene.update();
            ScenesManager.renderer.render(this.currentScene);
        };
        ScenesManager.createScene = function (id, TScene) {
            if (TScene === void 0) { TScene = test.Scene; }
            if (ScenesManager.scenes[id]) {
                return undefined;
            }
            var scene = new test.Scene();
            ScenesManager.scenes[id] = scene;
            return scene;
        };
        ScenesManager.gotToScene = function (id) {
            if (ScenesManager.scenes[id]) {
                if (ScenesManager.currentScene) {
                    ScenesManager.currentScene.pause();
                }
                ScenesManager.currentScene = ScenesManager.scenes[id];
                ScenesManager.currentScene.resume();
                return true;
            }
            return false;
        };
        ScenesManager.scenes = {}; //basically this is a key-value indexing guy, so instead of a flat number being the index its a string. i think.
        return ScenesManager;
    })();
    test.ScenesManager = ScenesManager;
})(test || (test = {}));
//methods are static because we should only ever have one scene manager 
//# sourceMappingURL=SceneManager.js.map