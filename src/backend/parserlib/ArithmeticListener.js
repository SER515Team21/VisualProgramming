// Generated from .\Arithmetic.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ArithmeticParser.
function ArithmeticListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ArithmeticListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ArithmeticListener.prototype.constructor = ArithmeticListener;

// Enter a parse tree produced by ArithmeticParser#input.
ArithmeticListener.prototype.enterInput = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#input.
ArithmeticListener.prototype.exitInput = function(ctx) {
};


// Enter a parse tree produced by ArithmeticParser#Integer.
ArithmeticListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#Integer.
ArithmeticListener.prototype.exitInteger = function(ctx) {
};


// Enter a parse tree produced by ArithmeticParser#Multiplication.
ArithmeticListener.prototype.enterMultiplication = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#Multiplication.
ArithmeticListener.prototype.exitMultiplication = function(ctx) {
};


// Enter a parse tree produced by ArithmeticParser#Addition.
ArithmeticListener.prototype.enterAddition = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#Addition.
ArithmeticListener.prototype.exitAddition = function(ctx) {
};


// Enter a parse tree produced by ArithmeticParser#Subtraction.
ArithmeticListener.prototype.enterSubtraction = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#Subtraction.
ArithmeticListener.prototype.exitSubtraction = function(ctx) {
};


// Enter a parse tree produced by ArithmeticParser#Division.
ArithmeticListener.prototype.enterDivision = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#Division.
ArithmeticListener.prototype.exitDivision = function(ctx) {
};


// Enter a parse tree produced by ArithmeticParser#Double.
ArithmeticListener.prototype.enterDouble = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#Double.
ArithmeticListener.prototype.exitDouble = function(ctx) {
};


// Enter a parse tree produced by ArithmeticParser#Parentheses.
ArithmeticListener.prototype.enterParentheses = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#Parentheses.
ArithmeticListener.prototype.exitParentheses = function(ctx) {
};


// Enter a parse tree produced by ArithmeticParser#Power.
ArithmeticListener.prototype.enterPower = function(ctx) {
};

// Exit a parse tree produced by ArithmeticParser#Power.
ArithmeticListener.prototype.exitPower = function(ctx) {
};



exports.ArithmeticListener = ArithmeticListener;