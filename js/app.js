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
    var cow = new SpriteSheet('asset/spritesheet.png');
    this.objects_ = [cow];
};


/**
 * Performs whatever tasks are leftover before the main loop must run.
 */
DemoApp.prototype.setInitialState = function() {

};


/**
 * Draws the scene.
 * @param {number} tFrame
 */
DemoApp.prototype.render = function(tFrame) {
    console.log(tFrame);
};


/**
 * Calculate the game state as of a given point in time.
 * @param {number} tFrame
 */
DemoApp.prototype.update = function(tFrame) {
    console.log(tFrame);
};


demoApp = new DemoApp();



