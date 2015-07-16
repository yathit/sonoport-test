/**
 * @fileOverview Load and play audio file.
 *
 * @author  Kyaw Tun <kyawtun@yathit.com>
 */



var Sound = function(src) {
    this.audio = new Audio(src);
};


Sound.prototype.trim = function() {
    this.audio.onended = (function() {
        this.loop();
    }).bind(this);
    throw new Error('Load into AudioContext createBufferSource manupulate buffer and create a new AudioContext for trimming')
};


/**
 * Loop play with poor man trimming
 */
Sound.prototype.loop = function() {
    this.audio.currentTime = 2;
    this.audio.play();
};


