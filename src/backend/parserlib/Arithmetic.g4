grammar Arithmetic;

POW: '^';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
INT: [0-9]+;
DOUBLE : [0-9]+'.'[0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;

input
    : expression
    ;

expression
   : INT                                            # Integer
   | DOUBLE                                         # Double
   | '(' inner=expression ')'                       # Parentheses
   | left=expression operator=POW right=expression  # Power
   | left=expression operator=MUL right=expression  # Multiplication
   | left=expression operator=DIV right=expression  # Division
   | left=expression operator=ADD right=expression  # Addition
   | left=expression operator=SUB right=expression  # Subtraction
   ;

