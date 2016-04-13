//this should help for later down the line when we want to switch between different states.
//its not necessary for right now, but would be nice to get a working project going.

///<reference path="Scripts/typings/pixi.js/pixi.js.d.ts" />
///<reference path="Scene.ts"/>
module test {
    export class ScenesManager {
        private static scenes: any = {}; //should be a hashmap??? but a JS object is fine too - apparently. reading the tutorial may help explain
        private static currentScene: Scene;
        public static renderer: PIXI.WebGLRenderer;

        public static create(width: number, height: number) { //initiate pixi.renderer and start game loop
            if (ScenesManager.renderer) return this; //??
            ScenesManager.renderer = new PIXI.WebGLRenderer(width, height);
            document.body.appendChild(ScenesManager.renderer.view);
            requestAnimationFrame(ScenesManager.renderloop); //??
            return this;
        }

        public static renderloop() {
            requestAnimationFrame(function () { ScenesManager.renderloop() });

            if (!this.currentScene || this.currentScene.isPaused()) { return; } //check if current scene exists and is not paused, then update it and render it
            this.currentScene.update();
            ScenesManager.renderer.render(this.currentScene);
        }

        public static createScene(id: string): Scene { //why is id a string? probably something to do with key-value?
            if (ScenesManager.scenes[id]) { //will return undefined if it already exists
                return undefined; //i like how it breaks here instead of having an else, elses are ugly
            }

            var scene = new Scene();
            ScenesManager.scenes[id] = scene;
            return scene;
        }

        public static gotToScene(id: string): boolean {
            if (ScenesManager.scenes[id]) {
                if (ScenesManager.currentScene) { //pauses current scene before switching to another scene
                    ScenesManager.currentScene.pause();
                }
                ScenesManager.currentScene = ScenesManager.scenes[id];
                ScenesManager.currentScene.resume();
                return true;
            }
            return false;
        }
    }
}

//methods are static because we should only ever have one scene manager