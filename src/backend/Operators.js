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

module.exports = {
    Addition,
    Subtraction,
    Multiplication,
    Division
};
