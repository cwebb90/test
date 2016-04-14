/// <reference="Scripts/typings/pixi.js/pixi.js.d.ts" />

//this class is essentially an extended PIXI.container with some extra functionality.
//actually a really good idea.

module test {
    //classes within modules must have export so they can be used elsewhere..
    export class Scene extends PIXI.Container {
        private paused: boolean = false;
        private updateCB = function () { };

        constructor() {            
            super();
        }

        public onUpdate(updateCB: () => void) {
            this.updateCB = updateCB;
        }

        public update() {//well this gets called, which is nice.
            this.updateCB();
        }

        public pause() {
            this.paused = true;
        }

        public resume() {
            this.paused = false;
        }

        public isPaused() {
            return this.paused;
        }
    }
}