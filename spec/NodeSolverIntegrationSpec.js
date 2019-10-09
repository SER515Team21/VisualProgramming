/* global beforeEach */
/* global describe */
/* global it */
/* global expect */

const Addition = require("../src/backend/Operators").Addition;
const Subtraction = require("../src/backend/Operators").Subtraction;
const Division = require("../src/backend/Operators").Division;
const Multiplication = require("../src/backend/Operators").Multiplication;
const NumberNode = require("../src/backend/NumberNode");

describe("Node Reduction", () => {
    it("shall produce text solvable by the ParserFacade", () => {
        const left = new Subtraction(new NumberNode(2), new NumberNode(3));
        const right = new Multiplication(new NumberNode(5), new NumberNode(9));
        const root = new Addition(left, right);

        expect(root.reduce()).toBe(44);
    });
});
