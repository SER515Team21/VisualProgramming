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
   : INT                                                    # Integer
   | '-' INT                                                # NegativeInteger
   | DOUBLE                                                 # Double
   | '-' DOUBLE                                             # NegativeDouble
   | '(' inner=expression ')'                               # Parentheses
   | left=expression operator=POW right=expression          # Power
   | left=expression operator=(MUL | DIV) right=expression  # Multiplicative
   | left=expression operator=(ADD | SUB) right=expression  # Additive
   ;
