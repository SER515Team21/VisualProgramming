// Generated from .\Arithmetic.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0011`\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\u000e\u0006\u000eK\n\u000e\r\u000e\u000e\u000e",
    "L\u0003\u000f\u0006\u000fP\n\u000f\r\u000f\u000e\u000fQ\u0003\u000f",
    "\u0003\u000f\u0006\u000fV\n\u000f\r\u000f\u000e\u000fW\u0003\u0010\u0006",
    "\u0010[\n\u0010\r\u0010\u000e\u0010\\\u0003\u0010\u0003\u0010\u0002",
    "\u0002\u0011\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011\u0003\u0002\u0004\u0003\u00022;\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0002c\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0003!\u0003\u0002\u0002\u0002\u0005+\u0003\u0002\u0002\u0002\u0007",
    ".\u0003\u0002\u0002\u0002\t0\u0003\u0002\u0002\u0002\u000b2\u0003\u0002",
    "\u0002\u0002\r7\u0003\u0002\u0002\u0002\u000f;\u0003\u0002\u0002\u0002",
    "\u0011?\u0003\u0002\u0002\u0002\u0013A\u0003\u0002\u0002\u0002\u0015",
    "C\u0003\u0002\u0002\u0002\u0017E\u0003\u0002\u0002\u0002\u0019G\u0003",
    "\u0002\u0002\u0002\u001bJ\u0003\u0002\u0002\u0002\u001dO\u0003\u0002",
    "\u0002\u0002\u001fZ\u0003\u0002\u0002\u0002!\"\u0007h\u0002\u0002\"",
    "#\u0007t\u0002\u0002#$\u0007c\u0002\u0002$%\u0007e\u0002\u0002%&\u0007",
    "v\u0002\u0002&\'\u0007k\u0002\u0002\'(\u0007q\u0002\u0002()\u0007p\u0002",
    "\u0002)*\u0007*\u0002\u0002*\u0004\u0003\u0002\u0002\u0002+,\u0007.",
    "\u0002\u0002,-\u0007\"\u0002\u0002-\u0006\u0003\u0002\u0002\u0002./",
    "\u0007+\u0002\u0002/\b\u0003\u0002\u0002\u000201\u0007*\u0002\u0002",
    "1\n\u0003\u0002\u0002\u000223\u0007n\u0002\u000234\u0007q\u0002\u0002",
    "45\u0007p\u0002\u000256\u0007i\u0002\u00026\f\u0003\u0002\u0002\u0002",
    "78\u0007F\u0002\u000289\u0007k\u0002\u00029:\u0007x\u0002\u0002:\u000e",
    "\u0003\u0002\u0002\u0002;<\u0007O\u0002\u0002<=\u0007w\u0002\u0002=",
    ">\u0007n\u0002\u0002>\u0010\u0003\u0002\u0002\u0002?@\u0007`\u0002\u0002",
    "@\u0012\u0003\u0002\u0002\u0002AB\u0007,\u0002\u0002B\u0014\u0003\u0002",
    "\u0002\u0002CD\u00071\u0002\u0002D\u0016\u0003\u0002\u0002\u0002EF\u0007",
    "-\u0002\u0002F\u0018\u0003\u0002\u0002\u0002GH\u0007/\u0002\u0002H\u001a",
    "\u0003\u0002\u0002\u0002IK\t\u0002\u0002\u0002JI\u0003\u0002\u0002\u0002",
    "KL\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002",
    "\u0002M\u001c\u0003\u0002\u0002\u0002NP\t\u0002\u0002\u0002ON\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002",
    "QR\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002SU\u00070\u0002",
    "\u0002TV\t\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002VW\u0003\u0002",
    "\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X\u001e",
    "\u0003\u0002\u0002\u0002Y[\t\u0003\u0002\u0002ZY\u0003\u0002\u0002\u0002",
    "[\\\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]^\u0003\u0002\u0002\u0002^_\b\u0010\u0002\u0002_ \u0003",
    "\u0002\u0002\u0002\u0007\u0002LQW\\\u0003\b\u0002\u0002"].join("");


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
ArithmeticLexer.T__2 = 3;
ArithmeticLexer.T__3 = 4;
ArithmeticLexer.T__4 = 5;
ArithmeticLexer.T__5 = 6;
ArithmeticLexer.T__6 = 7;
ArithmeticLexer.POW = 8;
ArithmeticLexer.MUL = 9;
ArithmeticLexer.DIV = 10;
ArithmeticLexer.ADD = 11;
ArithmeticLexer.SUB = 12;
ArithmeticLexer.INT = 13;
ArithmeticLexer.DOUBLE = 14;
ArithmeticLexer.WHITESPACE = 15;

ArithmeticLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ArithmeticLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ArithmeticLexer.prototype.literalNames = [ null, "'fraction('", "', '", 
                                           "')'", "'('", "'long'", "'Div'", 
                                           "'Mul'", "'^'", "'*'", "'/'", 
                                           "'+'", "'-'" ];

ArithmeticLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, "POW", "MUL", 
                                            "DIV", "ADD", "SUB", "INT", 
                                            "DOUBLE", "WHITESPACE" ];

ArithmeticLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "POW", "MUL", 
                                        "DIV", "ADD", "SUB", "INT", "DOUBLE", 
                                        "WHITESPACE" ];

ArithmeticLexer.prototype.grammarFileName = "Arithmetic.g4";



exports.ArithmeticLexer = ArithmeticLexer;

