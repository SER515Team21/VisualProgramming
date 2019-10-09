// Generated from .\Arithmetic.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\f<\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0006\t\'\n\t\r\t\u000e\t(\u0003\n\u0006\n,\n\n\r\n",
    "\u000e\n-\u0003\n\u0003\n\u0006\n2\n\n\r\n\u000e\n3\u0003\u000b\u0006",
    "\u000b7\n\u000b\r\u000b\u000e\u000b8\u0003\u000b\u0003\u000b\u0002\u0002",
    "\f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0003\u0002\u0004\u0003\u00022;\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002?\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002",
    "\u0002\u0005\u0019\u0003\u0002\u0002\u0002\u0007\u001b\u0003\u0002\u0002",
    "\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b\u001f\u0003\u0002\u0002",
    "\u0002\r!\u0003\u0002\u0002\u0002\u000f#\u0003\u0002\u0002\u0002\u0011",
    "&\u0003\u0002\u0002\u0002\u0013+\u0003\u0002\u0002\u0002\u00156\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0007*\u0002\u0002\u0018\u0004\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0007+\u0002\u0002\u001a\u0006\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0007`\u0002\u0002\u001c\b\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0007,\u0002\u0002\u001e\n\u0003\u0002\u0002",
    "\u0002\u001f \u00071\u0002\u0002 \f\u0003\u0002\u0002\u0002!\"\u0007",
    "-\u0002\u0002\"\u000e\u0003\u0002\u0002\u0002#$\u0007/\u0002\u0002$",
    "\u0010\u0003\u0002\u0002\u0002%\'\t\u0002\u0002\u0002&%\u0003\u0002",
    "\u0002\u0002\'(\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002()",
    "\u0003\u0002\u0002\u0002)\u0012\u0003\u0002\u0002\u0002*,\t\u0002\u0002",
    "\u0002+*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-+\u0003\u0002",
    "\u0002\u0002-.\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/1\u0007",
    "0\u0002\u000202\t\u0002\u0002\u000210\u0003\u0002\u0002\u000223\u0003",
    "\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u0002",
    "4\u0014\u0003\u0002\u0002\u000257\t\u0003\u0002\u000265\u0003\u0002",
    "\u0002\u000278\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003",
    "\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:;\b\u000b\u0002\u0002;",
    "\u0016\u0003\u0002\u0002\u0002\u0007\u0002(-38\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ArithmeticLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ArithmeticLexer.prototype = Object.create(antlr4.Lexer.prototype);
ArithmeticLexer.prototype.constructor = ArithmeticLexer;

Object.defineProperty(ArithmeticLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ArithmeticLexer.EOF = antlr4.Token.EOF;
ArithmeticLexer.T__0 = 1;
ArithmeticLexer.T__1 = 2;
ArithmeticLexer.POW = 3;
ArithmeticLexer.MUL = 4;
ArithmeticLexer.DIV = 5;
ArithmeticLexer.ADD = 6;
ArithmeticLexer.SUB = 7;
ArithmeticLexer.INT = 8;
ArithmeticLexer.DOUBLE = 9;
ArithmeticLexer.WHITESPACE = 10;

ArithmeticLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ArithmeticLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ArithmeticLexer.prototype.literalNames = [ null, "'('", "')'", "'^'", "'*'", 
                                           "'/'", "'+'", "'-'" ];

ArithmeticLexer.prototype.symbolicNames = [ null, null, null, "POW", "MUL", 
                                            "DIV", "ADD", "SUB", "INT", 
                                            "DOUBLE", "WHITESPACE" ];

ArithmeticLexer.prototype.ruleNames = [ "T__0", "T__1", "POW", "MUL", "DIV", 
                                        "ADD", "SUB", "INT", "DOUBLE", "WHITESPACE" ];

ArithmeticLexer.prototype.grammarFileName = "Arithmetic.g4";



exports.ArithmeticLexer = ArithmeticLexer;

