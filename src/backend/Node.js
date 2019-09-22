/**
 * This is a basic representation of a Node object to represent each of the draggable nodes in the
 * visual programmer
 *
 * @date 9/18/2019
 */
class Node {
  constructor() {
    if (this.constructor === Node) {
      throw new TypeError('Abstract class \'Node\' cannot be instantiated');
    }

    if (this.getText === undefined) {
      throw new TypeError('Child class of \'Node\' must define method \'getText\'');
    }
  }
}
