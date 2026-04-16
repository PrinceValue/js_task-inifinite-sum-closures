'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function makeAdder(n) {
    if (n === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += n;

    return makeAdder;
  }

  return makeAdder;
}

module.exports = makeInfinityAdder;
