/* global beforeEach */
/* global describe */
/* global it */
/* global expect */

const ParserFacade = require("../src/backend/parserlib/ParserFacade");

describe("Parser Facade", () => {
    it("shall support addition", () => {
        this.parser = new ParserFacade("1 + 2");
        expect(this.parser.solution).toBe(3);
    });

    it("shall support subtraction", () => {
        this.parser = new ParserFacade("1 - 2");
        expect(this.parser.solution).toBe(-1);
    });

    it("shall support multiplication", () => {
        this.parser = new ParserFacade("3 * 4");
        expect(this.parser.solution).toBe(12);
    });

    it("shall support division", () => {
        this.parser = new ParserFacade("6 / 2");
        expect(this.parser.solution).toBe(3);
    });

    it("shall support decimals", () => {
        this.parser = new ParserFacade("1.23213");
        expect(this.parser.solution).toBe(1.23213);
    });

    it("shall support negative numbers", () => {
        this.parser = new ParserFacade("-10");
        expect(this.parser.solution).toBe(-10);
    });

    it("shall distinguish subtraction and negative signs", () => {
        this.parser = new ParserFacade("-1 - -3");
        expect(this.parser.solution).toBe(2);
    });

    it("shall solve arithmetic expressions with correct order of operations", () => {
        this.parser = new ParserFacade("1 * (2.1 + 3) - 4 / 5");
        expect(this.parser.solution).toBe(4.3);
    });
});
