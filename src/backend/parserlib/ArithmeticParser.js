// Generated from .\Arithmetic.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArithmeticListener = require('./ArithmeticListener').ArithmeticListener;
var grammarFileName = "Arithmetic.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f&\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0010\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003!\n\u0003\f\u0003\u000e\u0003$\u000b\u0003\u0003",
    "\u0003\u0002\u0003\u0004\u0004\u0002\u0004\u0002\u0002\u0002*\u0002",
    "\u0006\u0003\u0002\u0002\u0002\u0004\u000f\u0003\u0002\u0002\u0002\u0006",
    "\u0007\u0005\u0004\u0003\u0002\u0007\u0003\u0003\u0002\u0002\u0002\b",
    "\t\b\u0003\u0001\u0002\t\u0010\u0007\n\u0002\u0002\n\u0010\u0007\u000b",
    "\u0002\u0002\u000b\f\u0007\u0003\u0002\u0002\f\r\u0005\u0004\u0003\u0002",
    "\r\u000e\u0007\u0004\u0002\u0002\u000e\u0010\u0003\u0002\u0002\u0002",
    "\u000f\b\u0003\u0002\u0002\u0002\u000f\n\u0003\u0002\u0002\u0002\u000f",
    "\u000b\u0003\u0002\u0002\u0002\u0010\"\u0003\u0002\u0002\u0002\u0011",
    "\u0012\f\u0007\u0002\u0002\u0012\u0013\u0007\u0005\u0002\u0002\u0013",
    "!\u0005\u0004\u0003\b\u0014\u0015\f\u0006\u0002\u0002\u0015\u0016\u0007",
    "\u0006\u0002\u0002\u0016!\u0005\u0004\u0003\u0007\u0017\u0018\f\u0005",
    "\u0002\u0002\u0018\u0019\u0007\u0007\u0002\u0002\u0019!\u0005\u0004",
    "\u0003\u0006\u001a\u001b\f\u0004\u0002\u0002\u001b\u001c\u0007\b\u0002",
    "\u0002\u001c!\u0005\u0004\u0003\u0005\u001d\u001e\f\u0003\u0002\u0002",
    "\u001e\u001f\u0007\t\u0002\u0002\u001f!\u0005\u0004\u0003\u0004 \u0011",
    "\u0003\u0002\u0002\u0002 \u0014\u0003\u0002\u0002\u0002 \u0017\u0003",
    "\u0002\u0002\u0002 \u001a\u0003\u0002\u0002\u0002 \u001d\u0003\u0002",
    "\u0002\u0002!$\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"",
    "#\u0003\u0002\u0002\u0002#\u0005\u0003\u0002\u0002\u0002$\"\u0003\u0002",
    "\u0002\u0002\u0005\u000f \""].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'^'", "'*'", "'/'", "'+'", "'-'" ];

var symbolicNames = [ null, null, null, "POW", "MUL", "DIV", "ADD", "SUB", 
                      "INT", "DOUBLE", "WHITESPACE" ];

var ruleNames =  [ "input", "expression" ];

function ArithmeticParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ArithmeticParser.prototype = Object.create(antlr4.Parser.prototype);
ArithmeticParser.prototype.constructor = ArithmeticParser;

Object.defineProperty(ArithmeticParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ArithmeticParser.EOF = antlr4.Token.EOF;
ArithmeticParser.T__0 = 1;
ArithmeticParser.T__1 = 2;
ArithmeticParser.POW = 3;
ArithmeticParser.MUL = 4;
ArithmeticParser.DIV = 5;
ArithmeticParser.ADD = 6;
ArithmeticParser.SUB = 7;
ArithmeticParser.INT = 8;
ArithmeticParser.DOUBLE = 9;
ArithmeticParser.WHITESPACE = 10;

ArithmeticParser.RULE_input = 0;
ArithmeticParser.RULE_expression = 1;


function InputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_input;
    return this;
}

InputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputContext.prototype.constructor = InputContext;

InputContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InputContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterInput(this);
	}
};

InputContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitInput(this);
	}
};




ArithmeticParser.InputContext = InputContext;

ArithmeticParser.prototype.input = function() {

    var localctx = new InputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ArithmeticParser.RULE_input);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArithmeticParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function IntegerContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntegerContext.prototype = Object.create(ExpressionContext.prototype);
IntegerContext.prototype.constructor = IntegerContext;

ArithmeticParser.IntegerContext = IntegerContext;

IntegerContext.prototype.INT = function() {
    return this.getToken(ArithmeticParser.INT, 0);
};
IntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterInteger(this);
	}
};

IntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitInteger(this);
	}
};


function MultiplicationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationContext.prototype = Object.create(ExpressionContext.prototype);
MultiplicationContext.prototype.constructor = MultiplicationContext;

ArithmeticParser.MultiplicationContext = MultiplicationContext;

MultiplicationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MultiplicationContext.prototype.MUL = function() {
    return this.getToken(ArithmeticParser.MUL, 0);
};
MultiplicationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterMultiplication(this);
	}
};

MultiplicationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitMultiplication(this);
	}
};


function AdditionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditionContext.prototype = Object.create(ExpressionContext.prototype);
AdditionContext.prototype.constructor = AdditionContext;

ArithmeticParser.AdditionContext = AdditionContext;

AdditionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AdditionContext.prototype.ADD = function() {
    return this.getToken(ArithmeticParser.ADD, 0);
};
AdditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterAddition(this);
	}
};

AdditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitAddition(this);
	}
};


function SubtractionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubtractionContext.prototype = Object.create(ExpressionContext.prototype);
SubtractionContext.prototype.constructor = SubtractionContext;

ArithmeticParser.SubtractionContext = SubtractionContext;

SubtractionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SubtractionContext.prototype.SUB = function() {
    return this.getToken(ArithmeticParser.SUB, 0);
};
SubtractionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterSubtraction(this);
	}
};

SubtractionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitSubtraction(this);
	}
};


function DivisionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivisionContext.prototype = Object.create(ExpressionContext.prototype);
DivisionContext.prototype.constructor = DivisionContext;

ArithmeticParser.DivisionContext = DivisionContext;

DivisionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

DivisionContext.prototype.DIV = function() {
    return this.getToken(ArithmeticParser.DIV, 0);
};
DivisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterDivision(this);
	}
};

DivisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitDivision(this);
	}
};


function DoubleContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoubleContext.prototype = Object.create(ExpressionContext.prototype);
DoubleContext.prototype.constructor = DoubleContext;

ArithmeticParser.DoubleContext = DoubleContext;

DoubleContext.prototype.DOUBLE = function() {
    return this.getToken(ArithmeticParser.DOUBLE, 0);
};
DoubleContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterDouble(this);
	}
};

DoubleContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitDouble(this);
	}
};


function ParenthesesContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.inner = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesesContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesesContext.prototype.constructor = ParenthesesContext;

ArithmeticParser.ParenthesesContext = ParenthesesContext;

ParenthesesContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterParentheses(this);
	}
};

ParenthesesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitParentheses(this);
	}
};


function PowerContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerContext.prototype = Object.create(ExpressionContext.prototype);
PowerContext.prototype.constructor = PowerContext;

ArithmeticParser.PowerContext = PowerContext;

PowerContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PowerContext.prototype.POW = function() {
    return this.getToken(ArithmeticParser.POW, 0);
};
PowerContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterPower(this);
	}
};

PowerContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitPower(this);
	}
};



ArithmeticParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ArithmeticParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ArithmeticParser.INT:
            localctx = new IntegerContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 7;
            this.match(ArithmeticParser.INT);
            break;
        case ArithmeticParser.DOUBLE:
            localctx = new DoubleContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 8;
            this.match(ArithmeticParser.DOUBLE);
            break;
        case ArithmeticParser.T__0:
            localctx = new ParenthesesContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 9;
            this.match(ArithmeticParser.T__0);
            this.state = 10;
            localctx.inner = this.expression(0);
            this.state = 11;
            this.match(ArithmeticParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 32;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 30;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 15;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 16;
                    localctx.operator = this.match(ArithmeticParser.POW);
                    this.state = 17;
                    localctx.right = this.expression(6);
                    break;

                case 2:
                    localctx = new MultiplicationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 18;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 19;
                    localctx.operator = this.match(ArithmeticParser.MUL);
                    this.state = 20;
                    localctx.right = this.expression(5);
                    break;

                case 3:
                    localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 21;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 22;
                    localctx.operator = this.match(ArithmeticParser.DIV);
                    this.state = 23;
                    localctx.right = this.expression(4);
                    break;

                case 4:
                    localctx = new AdditionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 24;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 25;
                    localctx.operator = this.match(ArithmeticParser.ADD);
                    this.state = 26;
                    localctx.right = this.expression(3);
                    break;

                case 5:
                    localctx = new SubtractionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 27;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 28;
                    localctx.operator = this.match(ArithmeticParser.SUB);
                    this.state = 29;
                    localctx.right = this.expression(2);
                    break;

                } 
            }
            this.state = 34;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


ArithmeticParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ArithmeticParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ArithmeticParser = ArithmeticParser;
