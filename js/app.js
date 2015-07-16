/**
 * @fileOverview Game application.
 *
 * @author  Kyaw Tun <kyawtun@yathit.com>
 */



/**
 * Game application.
 * @constructor
 */
var DemoApp = function() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    var cow = new SpriteSheet('asset/spritesheet.png', 279, 456);
    this.runner = new Animation(cow, 1, 0, 7);

    this.sound = new Sound('asset/audio.wav');
};


/**
 * Performs whatever tasks are leftover before the main loop must run.
 */
DemoApp.prototype.setInitialState = function() {
    try {
        this.sound.trim();
    } catch (e) {
        window.console.error(e);
    }
    this.sound.loop();
};


/**
 * Calculate the game state as of a given point in time.
 * @param {number} tFrame
 */
DemoApp.prototype.update = function(tFrame) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.runner.update();
};


/**
 * Draws the scene.
 * @param {number} tFrame
 */
DemoApp.prototype.render = function(tFrame) {

    this.runner.render(this.ctx);
};


demoApp = new DemoApp();



