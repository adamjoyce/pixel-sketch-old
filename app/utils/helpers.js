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
