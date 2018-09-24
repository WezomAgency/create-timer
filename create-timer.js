'use strict';

/**
 * Creating timers with internal closure
 * @module
 * @example
import createTimer from 'create-timer';

const timer = createTimer(500);
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
 * @typedef {Function} timer
 */

/**
 * @param {number} [defaultDelay=300]
 * @return {timer}
 */
function createTimer (defaultDelay = 300) {
	let timeoutId = null;

	/**
	 * @type {timer}
	 * @param {Function} fn
	 * @param {number} [delay=defaultDelay]
	 * @returns {number} timeoutId
	 */
	function timer (fn, delay = defaultDelay) {
		window.clearTimeout(timeoutId);
		timeoutId = window.setTimeout(fn, delay);
		return timeoutId;
	}

	/**
	 * clear current timeout
	 * @methodOf timer
	 * @returns void
	 */
	timer.clear = () => window.clearTimeout(timeoutId);

	return timer;
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default createTimer;
