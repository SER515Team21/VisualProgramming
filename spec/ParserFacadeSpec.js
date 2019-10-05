/* global beforeEach */
/* global describe */
/* global it */
/* global expect */

/* Imports for test */
const ParserFacade = require("../src/backend/parserlib/ParserFacade");

/* Write the test suite */
describe("Parser Facade", () => {
    /* A setup function */
    beforeEach(() => {
        this.parser = new ParserFacade("1 * (2.1 + 3) - 4 / 5");
    });

    /* A specification */
    it("shall solve arithmetic expressions containing addition, subtraction, " +
        "multiplication, and division with respect to correct order of operations.", () => {
        expect(this.parser.solution).toBe(4.3);
    });
});
