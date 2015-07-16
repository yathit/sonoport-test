/*
 * Main game loop.
 *
 * @link https://developer.mozilla.org/en-US/docs/Games/Anatomy
 * 
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that DemoApp is previously defined.
 *
 * DemoApp.lastRender keeps track of the last provided requestAnimationFrame timestamp.
 * DemoApp.lastTick keeps track of the last update time. Always increments by tickLength.
 * DemoApp.tickLength is how frequently the game state updates. It is 20 Hz (50ms) here.
 *
 * timeSinceTick is the time between requestAnimationFrame callback and last update.
 * numTicks is how many updates should have happened between these two rendered frames.
 *
 * render() is passed tFrame because it is assumed that the render method will calculate
 *          how long it has been since the most recently passed update tick for
 *          extrapolation (purely cosmetic for fast devices). It draws the scene.
 *
 * update() calculates the game state as of a given point in time. It should always
 *          increment by tickLength. It is the authority for game state. It is passed
 *          the DOMHighResTimeStamp for the time it represents (which, again, is always
 *          last update + DemoApp.tickLength unless a pause feature is added, etc.)
 *
 * setInitialState() Performs whatever tasks are leftover before the mainloop must run.
 *                   It is just a generic example function that you might have added.
 */

;(function () {
    function main( tFrame ) {
        DemoApp.stopMain = window.requestAnimationFrame( main );

        var nextTick = DemoApp.lastTick + DemoApp.tickLength;
        var numTicks = 0;

        //If tFrame < nextTick then 0 ticks need to be updated (0 is default for numTicks).
        //If tFrame = nextTick then 1 tick needs to be updated (and so forth).
        //Note: As we mention in summary, you should keep track of how large numTicks is.
        //If it is large, then either your game was asleep, or the machine cannot keep up.
        if (tFrame > nextTick) {
            var timeSinceTick = tFrame - DemoApp.lastTick;
            numTicks = Math.floor( timeSinceTick / DemoApp.tickLength );
        }

        queueUpdates( numTicks );
        demoApp.render( tFrame );
        DemoApp.lastRender = tFrame;
    }

    function queueUpdates( numTicks ) {
        for(var i=0; i < numTicks; i++) {
            DemoApp.lastTick = DemoApp.lastTick + DemoApp.tickLength; //Now lastTick is this tick.
            demoApp.update( DemoApp.lastTick );
        }
    }

    DemoApp.lastTick = performance.now();
    DemoApp.lastRender = DemoApp.lastTick; //Pretend the first draw was on first update.
    DemoApp.tickLength = 50; //This sets your simulation to run at 20Hz (50ms)

    demoApp.setInitialState();
    main(performance.now()); // Start the cycle
})();