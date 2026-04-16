'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function calc(n) {
    if (n === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += n;

    return calc;
  }

  return calc;
}

module.exports = makeInfinityAdder;
