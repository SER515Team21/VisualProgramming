const antlr4 = require("antlr4");

const ArithmeticLexer = require("./ArithmeticLexer").ArithmeticLexer;
const ArithmeticParser = require("./ArithmeticParser").ArithmeticParser;
const ListenerSolver = require("./ListenerSolver");

/**
 * @class ParserFacade
 *
 * @description Wraps the parser generate by antlr to reduce to only needing
 * to pass a string in to construct it and simply getting the solution attribute.
 */
class ParserFacade {
    constructor(expressionString) {
        this._expressionString = expressionString;
        this._chars = new antlr4.InputStream(this._expressionString);
        this._lexer = new ArithmeticLexer(this._chars);
        this._tokens = new antlr4.CommonTokenStream(this._lexer);
        this._parser = new ArithmeticParser(this._tokens);
        this._tree = this._parser.input();
    }

    get solution() {
        const solver = new ListenerSolver();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(solver, this._tree);
        return solver.solution;
    }
}

module.exports = ParserFacade;
