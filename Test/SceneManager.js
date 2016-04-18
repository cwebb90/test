var test;
(function (test) {
    var ScenesManager = (function () {
        function ScenesManager() {
        }
        ScenesManager.create = function (width, height) {
            if (ScenesManager.renderer)
                return this;
            this.defaultWidth = ScenesManager.width = width;
            this.defaultHeight = ScenesManager.height = height;
            ScenesManager.renderer = new PIXI.WebGLRenderer(width, height);
            document.body.appendChild(ScenesManager.renderer.view);
            requestAnimationFrame(ScenesManager.renderloop);
            return this;
        };
        ScenesManager.renderloop = function () {
            requestAnimationFrame(function () { ScenesManager.renderloop(); });
            if (!this.currentScene || this.currentScene.isPaused()) {
                return;
            }
            this.currentScene.update();
            ScenesManager.renderer.render(this.currentScene);
        };
        ScenesManager.createScene = function (id, TScene) {
            if (TScene === void 0) { TScene = test.Scene; }
            if (ScenesManager.scenes[id]) {
                return undefined;
            }
            var scene = new TScene();
            ScenesManager.scenes[id] = scene;
            return scene;
        };
        ScenesManager.goToScene = function (id) {
            console.log(ScenesManager.scenes[id]);
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
        ScenesManager.changeBackgroundColor = function (color) {
            this.renderer.backgroundColor = color;
        };
        ScenesManager.scenes = {};
        return ScenesManager;
    })();
    test.ScenesManager = ScenesManager;
})(test || (test = {}));
