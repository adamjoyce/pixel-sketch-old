/**
 * Shuffles an array using the 'unbiased' Fisher-Yates (Knuth) shuffle.
 * @param {array} array - The array to be shuffled.
 * @return {array} - The shuffled array.
 */
export function shuffle(array) {
  let currentIndex = array.length, tempVal, randomIndex;

  // While there are elements remaining...
  while (0 !== currentIndex) {
    // Grab a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap it with the current element.
    tempVal = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempVal;
  }

  return array;
}

/**
 * Calculates the delay before the fill animation should take place to make it
 * uniform with the rest of the SVG paths.
 * @param {integer} n - The nth position of the path.
 * @param {integer} drawInterval - The time (in ms) between drawing letters.
 * @param {integer} drawDuration - The time (in ms) it takes to draw a letter.
 * @param {integer} pathCount - The number of paths (letters) in the SVG.
 * @return {integer} - The delay the given nth path should wait before filling.
 */
export function calculateFillDelay(n, drawInterval, drawDuration, pathCount) {
  return drawInterval * (pathCount - n) + (drawDuration - drawInterval);
}
