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

    var animationSequence = [];  // array holding the order of the animation
    var currentFrame = 0;        // the current frame to draw
    var counter = 0;             // keep track of frame rate

    // start and end range for frames
    for (var frameNumber = startFrame; frameNumber <= endFrame; frameNumber++)
        animationSequence.push(frameNumber);

    /**
     * Update the animation
     */
    this.update = function() {

        // update to the next frame if it is time
        if (counter == (frameSpeed - 1))
            currentFrame = (currentFrame + 1) % animationSequence.length;

        // update the counter
        counter = (counter + 1) % frameSpeed;
    };

    /**
     * Draw the current frame
     * @param {integer} x - X position to draw
     * @param {integer} y - Y position to draw
     */
    this.draw = function(x, y) {
        // get the row and col of the frame
        var row = Math.floor(animationSequence[currentFrame] / spritesheet.framesPerRow);
        var col = Math.floor(animationSequence[currentFrame] % spritesheet.framesPerRow);

        ctx.drawImage(
                spritesheet.image,
                col * spritesheet.frameWidth, row * spritesheet.frameHeight,
                spritesheet.frameWidth, spritesheet.frameHeight,
                x, y,
                spritesheet.frameWidth, spritesheet.frameHeight);
    };
};
