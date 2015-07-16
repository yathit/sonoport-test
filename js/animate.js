/**
 * Creates an animation from a spritesheet.
 *
 * @link http://gamedevelopment.tutsplus.com/tutorials/an-introduction-to-spritesheet-animation--gamedev-13099
 */

/**
 * Creates an animation from a spritesheet.
 * @param {SpriteSheet} spritesheet The spritesheet used to create the animation.
 * @param {number} frameSpeed Number of frames to wait for before transitioning the animation.
 * @param {Array} startFrame Range or sequence of frame numbers for the animation.
 * @param {boolean} endFrame Repeat the animation once completed.
 */
var Animation = function(spritesheet, frameSpeed, startFrame, endFrame) {

    this.animationSequence = [];  // array holding the order of the animation
    this.currentFrame = 0;        // the current frame to draw
    this.counter = 0;             // keep track of frame rate
    this.spritesheet = spritesheet;
    this.frameSpeed = frameSpeed;
    this.x = 400;
    this.y = 0;

    // start and end range for frames
    for (var frameNumber = startFrame; frameNumber <= endFrame; frameNumber++) {
        this.animationSequence.push(frameNumber);
    }
};


/**
 * Update the animation
 */
Animation.prototype.update = function() {

    // update to the next frame if it is time
    if (this.counter == (this.frameSpeed - 1))
        this.currentFrame = (this.currentFrame + 1) % this.animationSequence.length;

    // update the counter
    this.counter = (this.counter + 1) % this.frameSpeed;

    this.x -= this.frameSpeed * 20;
    if (this.x < -320) {
        this.x = 400;
    }
};


Animation.prototype.render = function(ctx) {
    this.draw(ctx, this.x, this.y);
};


/**
 * Draw the current frame
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x - X position to draw
 * @param {number} y - Y position to draw
 * @protected
 */
Animation.prototype.draw = function(ctx, x, y) {
    // get the row and col of the frame
    var row = 0;
    var col = Math.floor(this.animationSequence[this.currentFrame] % this.spritesheet.framesPerRow);

    ctx.drawImage(
            this.spritesheet.image,
            col * this.spritesheet.frameWidth, row * this.spritesheet.frameHeight,
            this.spritesheet.frameWidth, this.spritesheet.frameHeight,
            x, y,
            this.spritesheet.frameWidth, this.spritesheet.frameHeight);
};
