# createTimer

[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/dutchenkoOleg/node-w3c-validator/blob/master/LICENSE)
![ES6](https://img.shields.io/badge/JavaScript-ES6-blue.svg)

> Creating timers with internal closure

---

## Usage

```js
import createTimer from 'create-timer';

const timer = createTimer(500);
$(window).on('resize', function () {
    timer(() => {
        console.log('done');
    });
});

// ...delay for current calling
timer(() => {
    console.log('just test after 2seconds');
}, 2000);

// ...clear timer if need
timer.clear();
```

---

## API


### createTimer([defaultDelay = 300])

- `@param {number} defaultDelay` - default delay for created timer;
- `@returns {Function} timer`

```js
const timer1 = createTimer();
const timer2 = createTimer(600);
```

### timer(fn[, customDelay])

- `@param {Function} fn` - callback, executed after timout;
- `@param {number} [delay=defaultDelay]` - delay for override with current calling
- `@returns {number} timeoutId` - id of current timeout

### timer.clear()

- clear current timeout

---
