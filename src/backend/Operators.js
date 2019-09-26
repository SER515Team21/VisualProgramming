const BinaryOperator = require('./BinaryOperator');

class Addition extends BinaryOperator {

    constructor(left,right) {
        super(left,right);
        this.left = left;
        this.right = right;
    }

}

class Subtraction extends BinaryOperator {

    constructor(left,right) {
        super(left,right);
        this.left = left;
        this.right = right;
    }

}

class Multiplication extends BinaryOperator {

    constructor(left,right) {
        super(left,right);
        this.left = left;
        this.right = right;
    }

}

class Division extends BinaryOperator {

     constructor(left,right) {
         super(left,right);
         this.left = left;
         this.right = right;
     }

}



//Test
//const lol = new Addition(3,3);
//console.log(lol.text);
