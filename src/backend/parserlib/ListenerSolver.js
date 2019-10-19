const ArithmeticListener = require("./ArithmeticListener").ArithmeticListener;


/**
 * @class ListenerSolver
 *
 * @description Uses Antlr4's listener interface to iterate through
 * the tree in order and solve it
 */
class ListenerSolver extends ArithmeticListener {
    constructor() {
        super();
        this._stack = [];
        this.DEBUG = true;
    }

    /**
     * When the integer finishes parsing, add it to a stack
     * @param ctx
     */
    exitInteger(ctx) {
        const number = parseInt(ctx.INT(), 10);
        this._stack.push(number);
        if (this.DEBUG) {
            // eslint-disable-next-line no-console
            console.log("Parsed integer", number);
        }
    }

    /**
     * When a negative integer finishes parsing add it to a stack
     * @param ctx
     */
    exitNegativeInteger(ctx) {
        const number = -1 * parseInt(ctx.INT(), 10);
        this._stack.push(number);
        if (this.DEBUG) {
            // eslint-disable-next-line no-console
            console.log("Parsed integer", number);
        }
    }

    /**
     * When a double finishes parsing add it to the stack
     * @param ctx
     */
    exitDouble(ctx) {
        const number = parseFloat(ctx.DOUBLE());
        this._stack.push(number);
        if (this.DEBUG) {
            // eslint-disable-next-line no-console
            console.log("Parsed double", number);
        }
    }

    /**
     * When a negative double finishes parsing add it to the stack
     * @param ctx
     */
    exitNegativeDouble(ctx) {
        const number = -1 * parseFloat(ctx.DOUBLE());
        this._stack.push(number);
        if (this.DEBUG) {
            // eslint-disable-next-line no-console
            console.log("Parsed double", number);
        }
    }

    /**
     * When a multiplicative expression finishes parsing check the operator
     * and then apply it the left and right operands (top two from the stack)
     * @param ctx
     */
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
            // eslint-disable-next-line no-console
            console.log(left, ctx.getChild(1).getText(), right);
        }
    }

    /**
     * When an additive expression finishes parsing check the operator
     * and then apply it the left and right operands (top two from the stack)
     * @param ctx
     */
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
            // eslint-disable-next-line no-console
            console.log(left, ctx.getChild(1).getText(), right);
        }
    }

    /**
     * After the tree finishes, the value left on the stack is the solution
     * @returns {double} solution
     */
    get solution() {
        return this._stack.pop();
    }
}

module.exports = ListenerSolver;
