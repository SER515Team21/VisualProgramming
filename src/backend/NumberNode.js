/**
 * This is an implementation of a Binary Operator node, which represents an operator
 * with two operands.
 *
 * @date 9/22/2019
 */

const Node = require('./Node.js');

class NumberNode extends Node {

  constructor(number) {
    super();
    this.number = number;
  }

  getText() {
    return this.number;
  }

}

module.exports = NumberNode;
