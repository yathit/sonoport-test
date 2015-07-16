/**
 * @fileOverview Spritesheet for animating sprintes into an single animated image.
 *
 * @link http://gamedevelopment.tutsplus.com/tutorials/an-introduction-to-spritesheet-animation--gamedev-13099
 */



/**
 * Spritesheet for animating sprintes into an single animated image.
 * @param {string} path Path to the image.
 * @param {number} frameWidth Width (in px) of each frame.
 * @param {number} frameHeight Height (in px) of each frame.
 */
var SpriteSheet =function(path, frameWidth, frameHeight) {
    this.image = new Image();
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.framesPerRow = 7;
    this.image.src = path;
};
