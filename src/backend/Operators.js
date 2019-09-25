const BinaryOperator = require('./BinaryOperator');

class Addition extends BinaryOperator {

    constructor(left,right) {
        super();
        this.left = left;
        this.right = right;
    }

    get text() {
        return this.left + " + " + this.right;
    }
}

class Subtraction extends BinaryOperator {

    constructor(left,right) {
        super();
        this.left = left;
        this.right = right;
    }

    get text() {
        return this.left + " - " + this.right;
    }
}

class Multiplication extends BinaryOperator {

    constructor(left,right) {
        super();
        this.left = left;
        this.right = right;
    }

    get text() {
        return this.left + " * " + this.right;
    }
}

class Division extends BinaryOperator {

    constructor(left,right) {
        super();
        this.left = left;
        this.right = right;
    }

    get text() {
        return this.left + " / " + this.right;
    }
}



//Test
//const lol = new Addition(3,3);
//console.log(lol.text);
