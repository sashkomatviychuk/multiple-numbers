/**
 *
 * @param {number} n
 * @returns (k) => number
 */
const createDivisibleChecker = (n) => (k) => n % k === 0;

/**
 * Returns `G` if n is mulitple of 3,
 * `N` if n is mulitple of 5
 * `GN` if multiple of both 3 and 5
 * Otherwise returns n
 *
 * @param {number} n
 * @returns {string | number}
 */
const replaceNumberIfHasMultiple = (n) => {
  const isDivisibleBy = createDivisibleChecker(n);
  let result = '';

  if (isDivisibleBy(3)) {
    result += 'G';
  }

  if (isDivisibleBy(5)) {
    result += 'N';
  }

  return result || n;
};

module.exports = {
  createDivisibleChecker,
  replaceNumberIfHasMultiple,
};
