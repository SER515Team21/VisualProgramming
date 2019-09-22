/**
 * This is an implementation of a Binary Operator node, which represents an operator
 * with two operands.
 *
 * @date 9/22/2019
 */
class BinaryOperator extends Node {
	
  var leftOperand;
  var rightOperand;
  const operatorText = "";

  constructor() {
    if (this.constructor === BinaryOperator) {
      throw new TypeError('Abstract class \'BinaryOperator\' cannot be instantiated');
    }
  }

  getText() {
    leftText = "?";
	rightText = "?";

	if (leftOperand != null) {
	  leftText = leftOperand.getText();
	}

	if (rightOperand != null) {
      rightText = rightOperand.getText();
	}

    return leftText + operatorText + rightText;
  }


}
