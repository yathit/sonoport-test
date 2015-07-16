/**
 * @fileOverview Spritesheet for animating sprintes into an single animated image.
 *
 * @link http://gamedevelopment.tutsplus.com/tutorials/an-introduction-to-spritesheet-animation--gamedev-13099
 */


/**
 * Spritesheet for animating sprintes into an single animated image.
 * @param {string} path sprite image URL.
 * @param {number} frameWidth
 * @param {number} frameHeight
 * @param {number} frameSpeed
 * @param {number} endFrame
 * @constructor
 */
var SpriteSheet = function(path, frameWidth, frameHeight, frameSpeed, endFrame) {

    /**
     * @type {Image}
     * @protected
     */
    this.image = new Image();

    /**
     * @protected
     * @type {number}
     */
    this.framesPerRow = 4;

    this.image.onload = function() {
        this.framesPerRow = Math.floor(this.image.width / frameWidth);
    };

    this.image.src = path;

    /**
     * @protected
     * @type {number}
     */
    this.frameWidth = frameWidth;

    /**
     * @protected
     * @type {number}
     */
    this.frameHeight = frameHeight;

    /**
     * @protected
     * @type {number}
     */
    this.frameSpeed = frameSpeed;

    /**
     * @protected
     * @type {number}
     */
    this.endFrame = endFrame;

    /**
     * @protected
     * @type {number}
     */
    this.currentFrame = 0;  // the current frame to draw

    /**
     * @protected
     * @type {number}
     */
    this.counter = 0;       // keep track of frame rate
};


/**
 * Update the animation
 */
SpriteSheet.prototype.update = function() {

    // update to the next frame if it is time
    if (this.counter == (this.frameSpeed - 1))
        this.currentFrame = (this.currentFrame + 1) % this.endFrame;

    // update the counter
    this.counter = (this.counter + 1) % this.frameSpeed;
};

/**
 * Draw the current frame
 * @param {number} x
 * @param {number} y
 */
SpriteSheet.prototype.draw = function(x, y) {
    // get the row and col of the frame
    var row = Math.floor(this.currentFrame / this.framesPerRow);
    var col = Math.floor(this.currentFrame % this.framesPerRow);

    ctx.drawImage(
            this.image,
            col * this.frameWidth, row * this.frameHeight,
            this.frameWidth, this.frameHeight,
            x, y,
            this.frameWidth, this.frameHeight);
};