/**
 * This is an implementation of a Unary Operator node, which represents an operator
 * with one operands, such as sin(x).
 *
 * @date 9/24/2019
 */

const Node = require('./Node.js');

class UnaryOperator extends Node {

  constructor() {
    super();
    this.operand = null;
    this.operatorText = '';
    if (this.constructor === UnaryOperator) {
      throw new TypeError('Abstract class \'UnaryOperator\' cannot be instantiated');
    }
  }

  getText() {
    let operandText = '?';

    if (this.operand != null) {
      operandText = this.operand.getText();
    }

    return `${this.operatorText}(${operandText})`;
  }

}

module.exports = UnaryOperator;
