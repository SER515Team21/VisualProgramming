/**
 * This is an implementation of a Binary Operator node, which represents an operator
 * with two operands.
 *
 * @date 9/22/2019
 */

const Node = require('./Node.js');

class BinaryOperator extends Node {

  constructor(operatorText) {
    super();
    this.leftOperand = null;
    this.rightOperand = null;
    this.operatorText = operatorText;
    if (this.constructor === BinaryOperator) {
      throw new TypeError('Abstract class \'BinaryOperator\' cannot be instantiated');
    }
  }

  setLeftOperand(leftOperand) {
    if (leftOperand instanceof Node) {
      this.leftOperand = leftOperand;
    } else {
      this.leftOperand = null;
    }
  }

  setRightOperand(rightOperand) {
    if (rightOperand instanceof Node) {
      this.rightOperand = rightOperand;
    } else {
      this.rightOperand = rightOperand;
    }
  }

  getText() {
    let leftText = '?';
    let rightText = '?';

    if (this.leftOperand != null) {
      leftText = this.leftOperand.getText();
    }

    if (this.rightOperand != null) {
      rightText = this.rightOperand.getText();
    }

    return leftText + this.operatorText + rightText;
  }

}

module.exports = BinaryOperator;
