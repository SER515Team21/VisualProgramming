const UnaryOperator = require("./UnaryOperator");
const BinaryOperator = require("./BinaryOperator");
const TertiaryOperator = require("./TertiaryOperator");

class Addition extends BinaryOperator {

    constructor(leftOperand = null, rightOperand = null) {
        super("+", leftOperand, rightOperand);
    }

}

class Subtraction extends BinaryOperator {

    constructor(leftOperand = null, rightOperand = null) {
        super("-", leftOperand, rightOperand);
    }

}

class Multiplication extends BinaryOperator {

    constructor(leftOperand = null, rightOperand = null) {
        super("*", leftOperand, rightOperand);
    }

}

class Division extends BinaryOperator {

    constructor(leftOperand = null, rightOperand = null) {
        super("/", leftOperand, rightOperand);
    }

}

class LongMultiplication extends BinaryOperator {

    constructor(leftOperand = null, rightOperand = null) {
        super("*", leftOperand, rightOperand);
    }

    getText() {
        let leftText = "?";
        let rightText = "?";

        if (this.leftOperand != null) {
            leftText = this.leftOperand.getText();
        }

        if (this.rightOperand != null) {
            rightText = this.rightOperand.getText();
        }

        return `longMul(${leftText}, ${rightText})`;
    }
}

class LongDivision extends BinaryOperator {

    constructor(leftOperand = null, rightOperand = null) {
        super("/", leftOperand, rightOperand);
    }

    getText() {
        let leftText = "?";
        let rightText = "?";

        if (this.leftOperand != null) {
            leftText = this.leftOperand.getText();
        }

        if (this.rightOperand != null) {
            rightText = this.rightOperand.getText();
        }

        return `longDiv(${rightText}, ${leftText})`;
    }
}

class MixedFraction extends TertiaryOperator {

    constructor(firstOperand = null, secondOperand = null, thirdOperand = null) {
        super("fraction", firstOperand, secondOperand, thirdOperand);
    }

    getText() {
        return `fraction${super.getText()}`;
    }
}

class ImproperFraction extends BinaryOperator {

    constructor(leftOperand = null, rightOperand = null) {
        super("/", leftOperand, rightOperand);
    }

    getText() {
        let leftText = "?";
        let rightText = "?";

        if (this.leftOperand != null) {
            leftText = this.leftOperand.getText();
        }

        if (this.rightOperand != null) {
            rightText = this.rightOperand.getText();
        }

        return `fraction(${leftText}, ${rightText})`;
    }
}

class Parentheses extends UnaryOperator {

    constructor(operand = null) {
        super("", operand);
    }

    getText() {
        return `(${this.operand.getText()})`;
    }
}

module.exports = {
    Addition,
    Subtraction,
    Multiplication,
    Division,
    LongMultiplication,
    LongDivision,
    MixedFraction,
    ImproperFraction,
    Parentheses
};
