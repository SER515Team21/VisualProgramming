const Node = require('./Node');

class Addition extends Node {

    constructor(left,right) {
        super();
        this.left = left;
        this.right = right;
    }

    get text() {
        return this.left + " + " + this.right;
    }
}

class Subtraction extends Node {

    constructor(left,right) {
        super();
        this.left = left;
        this.right = right;
    }

    get text() {
        return this.left + " - " + this.right;
    }
}

class Multiplication extends Node {

    constructor(left,right) {
        super();
        this.left = left;
        this.right = right;
    }

    get text() {
        return this.left + " * " + this.right;
    }
}

class Division extends Node {

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
