// Generated from .\Arithmetic.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArithmeticListener = require('./ArithmeticListener').ArithmeticListener;
var grammarFileName = "Arithmetic.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f$\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u0014\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u001f\n\u0003\f\u0003\u000e\u0003\"\u000b\u0003\u0003\u0003\u0002\u0003",
    "\u0004\u0004\u0002\u0004\u0002\u0004\u0003\u0002\u0006\u0007\u0003\u0002",
    "\b\t\u0002(\u0002\u0006\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002",
    "\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007\u0003\u0003\u0002",
    "\u0002\u0002\b\t\b\u0003\u0001\u0002\t\u0014\u0007\n\u0002\u0002\n\u000b",
    "\u0007\t\u0002\u0002\u000b\u0014\u0007\n\u0002\u0002\f\u0014\u0007\u000b",
    "\u0002\u0002\r\u000e\u0007\t\u0002\u0002\u000e\u0014\u0007\u000b\u0002",
    "\u0002\u000f\u0010\u0007\u0003\u0002\u0002\u0010\u0011\u0005\u0004\u0003",
    "\u0002\u0011\u0012\u0007\u0004\u0002\u0002\u0012\u0014\u0003\u0002\u0002",
    "\u0002\u0013\b\u0003\u0002\u0002\u0002\u0013\n\u0003\u0002\u0002\u0002",
    "\u0013\f\u0003\u0002\u0002\u0002\u0013\r\u0003\u0002\u0002\u0002\u0013",
    "\u000f\u0003\u0002\u0002\u0002\u0014 \u0003\u0002\u0002\u0002\u0015",
    "\u0016\f\u0005\u0002\u0002\u0016\u0017\u0007\u0005\u0002\u0002\u0017",
    "\u001f\u0005\u0004\u0003\u0006\u0018\u0019\f\u0004\u0002\u0002\u0019",
    "\u001a\t\u0002\u0002\u0002\u001a\u001f\u0005\u0004\u0003\u0005\u001b",
    "\u001c\f\u0003\u0002\u0002\u001c\u001d\t\u0003\u0002\u0002\u001d\u001f",
    "\u0005\u0004\u0003\u0004\u001e\u0015\u0003\u0002\u0002\u0002\u001e\u0018",
    "\u0003\u0002\u0002\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001f\"",
    "\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002",
    "\u0002\u0002!\u0005\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "\u0005\u0013\u001e "].join("");


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


function MultiplicativeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeContext.prototype = Object.create(ExpressionContext.prototype);
MultiplicativeContext.prototype.constructor = MultiplicativeContext;

ArithmeticParser.MultiplicativeContext = MultiplicativeContext;

MultiplicativeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MultiplicativeContext.prototype.MUL = function() {
    return this.getToken(ArithmeticParser.MUL, 0);
};

MultiplicativeContext.prototype.DIV = function() {
    return this.getToken(ArithmeticParser.DIV, 0);
};
MultiplicativeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterMultiplicative(this);
	}
};

MultiplicativeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitMultiplicative(this);
	}
};


function AdditiveContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveContext.prototype = Object.create(ExpressionContext.prototype);
AdditiveContext.prototype.constructor = AdditiveContext;

ArithmeticParser.AdditiveContext = AdditiveContext;

AdditiveContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AdditiveContext.prototype.ADD = function() {
    return this.getToken(ArithmeticParser.ADD, 0);
};

AdditiveContext.prototype.SUB = function() {
    return this.getToken(ArithmeticParser.SUB, 0);
};
AdditiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterAdditive(this);
	}
};

AdditiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitAdditive(this);
	}
};


function NegativeIntegerContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegativeIntegerContext.prototype = Object.create(ExpressionContext.prototype);
NegativeIntegerContext.prototype.constructor = NegativeIntegerContext;

ArithmeticParser.NegativeIntegerContext = NegativeIntegerContext;

NegativeIntegerContext.prototype.SUB = function() {
    return this.getToken(ArithmeticParser.SUB, 0);
};

NegativeIntegerContext.prototype.INT = function() {
    return this.getToken(ArithmeticParser.INT, 0);
};
NegativeIntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterNegativeInteger(this);
	}
};

NegativeIntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitNegativeInteger(this);
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


function NegativeDoubleContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegativeDoubleContext.prototype = Object.create(ExpressionContext.prototype);
NegativeDoubleContext.prototype.constructor = NegativeDoubleContext;

ArithmeticParser.NegativeDoubleContext = NegativeDoubleContext;

NegativeDoubleContext.prototype.SUB = function() {
    return this.getToken(ArithmeticParser.SUB, 0);
};

NegativeDoubleContext.prototype.DOUBLE = function() {
    return this.getToken(ArithmeticParser.DOUBLE, 0);
};
NegativeDoubleContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.enterNegativeDouble(this);
	}
};

NegativeDoubleContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArithmeticListener ) {
        listener.exitNegativeDouble(this);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IntegerContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 7;
            this.match(ArithmeticParser.INT);
            break;

        case 2:
            localctx = new NegativeIntegerContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 8;
            this.match(ArithmeticParser.SUB);
            this.state = 9;
            this.match(ArithmeticParser.INT);
            break;

        case 3:
            localctx = new DoubleContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 10;
            this.match(ArithmeticParser.DOUBLE);
            break;

        case 4:
            localctx = new NegativeDoubleContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 11;
            this.match(ArithmeticParser.SUB);
            this.state = 12;
            this.match(ArithmeticParser.DOUBLE);
            break;

        case 5:
            localctx = new ParenthesesContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 13;
            this.match(ArithmeticParser.T__0);
            this.state = 14;
            localctx.inner = this.expression(0);
            this.state = 15;
            this.match(ArithmeticParser.T__1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 30;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 28;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 19;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 20;
                    localctx.operator = this.match(ArithmeticParser.POW);
                    this.state = 21;
                    localctx.right = this.expression(4);
                    break;

                case 2:
                    localctx = new MultiplicativeContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 22;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 23;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ArithmeticParser.MUL || _la===ArithmeticParser.DIV)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 24;
                    localctx.right = this.expression(3);
                    break;

                case 3:
                    localctx = new AdditiveContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ArithmeticParser.RULE_expression);
                    this.state = 25;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 26;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ArithmeticParser.ADD || _la===ArithmeticParser.SUB)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 27;
                    localctx.right = this.expression(2);
                    break;

                } 
            }
            this.state = 32;
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
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ArithmeticParser = ArithmeticParser;
