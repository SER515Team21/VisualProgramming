const ArithmeticListener = require("./ArithmeticListener").ArithmeticListener;

class ListenerSolver extends ArithmeticListener {
    constructor() {
        super();
        this._stack = [];
        this.DEBUG = true;
    }

    exitInteger(ctx) {
        const number = parseInt(ctx.INT(), 10);
        this._stack.push(number);
        if (this.DEBUG) {
            console.log("Parsed integer", number);
        }
    }

    exitNegativeInteger(ctx) {
        const number = -1 * parseInt(ctx.INT(), 10);
        this._stack.push(number);
        if (this.DEBUG) {
            console.log("Parsed integer", number);
        }
    }

    exitDouble(ctx) {
        const number = parseFloat(ctx.DOUBLE());
        this._stack.push(number);
        if (this.DEBUG) {
            console.log("Parsed double", number);
        }
    }

    exitNegativeDouble(ctx) {
        const number = -1 * parseFloat(ctx.DOUBLE());
        this._stack.push(number);
        if (this.DEBUG) {
            console.log("Parsed double", number);
        }
    }

    exitMultiplicative(ctx) {
        const right = this._stack.pop();
        const left = this._stack.pop();
        let result;
        if (ctx.getChild(1).getText() === "*") {
            result = left * right;
        }
        else {
            result = left / right;
        }
        this._stack.push(result);
        if (this.DEBUG) {
            console.log(left, ctx.getChild(1).getText(), right);
        }
    }

    exitAdditive(ctx) {
        const right = this._stack.pop();
        const left = this._stack.pop();
        let result;
        if (ctx.getChild(1).getText() === "+") {
            result = left + right;
        }
        else {
            result = left - right;
        }

        this._stack.push(result);
        if (this.DEBUG) {
            console.log(left, ctx.getChild(1).getText(), right);
        }
    }

    get solution() {
        return this._stack.pop();
    }
}

module.exports = ListenerSolver;
