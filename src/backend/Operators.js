const BinaryOperator = require("./BinaryOperator");

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

module.exports = {
    Addition,
    Subtraction,
    Multiplication,
    Division,
    LongMultiplication,
    LongDivision
};
