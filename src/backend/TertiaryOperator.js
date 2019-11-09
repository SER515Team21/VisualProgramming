/**
 * This is an implementation of a Tertiary Operator node, which represents an operator
 * with three operands.
 *
 * @date 11/6/2019
 */

const Node = require("./Node.js");

class TertiaryOperator extends Node {

    constructor(operatorText, firstOperand = null, secondOperand = null, thirdOperand = null) {
        super();
        this.firstOperand = firstOperand;
        this.secondOperand = secondOperand;
        this.thirdOperand = thirdOperand;
        if (this.constructor === TertiaryOperator) {
            throw new TypeError("Abstract class 'TertiaryOperator' cannot be instantiated");
        }
    }

    setFirstOperand(firstOperand) {
        if (firstOperand instanceof Node) {
            this.firstOperand = firstOperand;
        }
        else {
            this.firstOperand = null;
        }
    }

    setSecondOperand(secondOperand) {
        if (secondOperand instanceof Node) {
            this.secondOperand = secondOperand;
        }
        else {
            this.secondOperand = secondOperand;
        }
    }

    setThirdOperand(thirdOperand) {
        if (thirdOperand instanceof Node) {
            this.secondOperand = thirdOperand;
        }
        else {
            this.secondOperand = thirdOperand;
        }
    }

    getText() {
        let firstText = "?";
        let secondText = "?";
        let thirdText = "?";

        if (this.firstOperand != null) {
            firstText = this.firstOperand.getText();
        }

        if (this.secondOperand != null) {
            secondText = this.secondOperand.getText();
        }

        if (this.thirdOperand != null) {
            thirdText = this.thirdOperand.getText();
        }

        return `(${firstText}, ${secondText}, ${thirdText})`;
    }

}

module.exports = TertiaryOperator;
