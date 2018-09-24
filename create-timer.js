'use strict';

/**
 * Creating timers with internal closure
 * @module
 * @example
import createTimer from './create-timer';

let timer = createTimer(500);
$(window).on('resize', function () {
    timer(() => {
        console.log('done');
    });
});

timer(() => {
    console.log('just test');
}, 300);

// ...clear timer if need
timer.clear();
 */

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {number} [defaultDelay=300]
 * @return {Function}
 */
function createTimer (defaultDelay = 300) {
	let timeoutId = null;

	/**
	 * @param {Function} fn
	 * @param {number} [delay=defaultDelay]
	 * @prop {Function} clear
	 */
	function timer (fn, delay = defaultDelay) {
		window.clearTimeout(timeoutId);
		timeoutId = window.setTimeout(fn, delay);
		return timeoutId;
	}

	/** clear current timeout */
	timer.clear = () => window.clearTimeout(timeoutId);

	return timer;
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default createTimer;
