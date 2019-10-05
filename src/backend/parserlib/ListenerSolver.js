const ArithmeticListener = require("./ArithmeticListener").ArithmeticListener;

class ListenerSolver extends ArithmeticListener {
    constructor() {
        super();
        this._stack = [];
    }

    exitInteger(ctx) {
        const number = parseInt(ctx.INT(), 10);
        this._stack.push(number);
    }

    exitDouble(ctx) {
        const number = parseFloat(ctx.DOUBLE());
        this._stack.push(number);
    }

    exitMultiplication(ctx) {
        const right = this._stack.pop();
        const left = this._stack.pop();
        const result = left * right;

        this._stack.push(result);
    }

    exitDivision(ctx) {
        const right = this._stack.pop();
        const left = this._stack.pop();
        const result = left / right;

        this._stack.push(result);
    }

    exitAddition(ctx) {
        const right = this._stack.pop();
        const left = this._stack.pop();
        const result = left + right;

        this._stack.push(result);
    }

    exitSubtraction(ctx) {
        const right = this._stack.pop();
        const left = this._stack.pop();
        const result = left - right;

        this._stack.push(result);
    }

    get solution() {
        return this._stack.pop();
    }
}

module.exports = ListenerSolver;
