/**
 * Rounds a number to a specified precision.
 *
 * @author MDN docs on Math.round()
 * @param {number} x            Number to be rounded
 * @param {number} precision    Precision to which to round x
 */
function roundToPrecision(x, precision) {
  var y = +x + (precision === undefined ? 0.5 : precision / 2);
  return y - (y % (precision === undefined ? 1 : +precision));
}

export { roundToPrecision };
