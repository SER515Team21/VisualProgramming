/* global describe */
/* global it */
/* global expect */
/* global beforeAll */
/* global afterEach */
/* global afterAll */

/* Imports for test */
const AssignmentDb = require("../src/backend/AssignmentDb.js");

/* Write the test suite */
describe("Assignment DB", () => {
    beforeAll(async () => {
        await AssignmentDb.removeAll();
    });

    afterEach(async () => {
        await AssignmentDb.removeAll();
    });

    it("shall be able to add an assignment with a new name in the same course with the same teacher", async () => {
        const result1 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course1", "teacher1",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);
        const result1p2 = await AssignmentDb.saveAssignment("Assignment 2", "This is the description",
            "course1", "teacher1",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);

        expect(result1).toBeTruthy();
        expect(result1p2).toBeTruthy();

        const result2 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course2", "teacher1",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);
        const result2p2 = await AssignmentDb.saveAssignment("Assignment 2", "This is the description",
            "course2", "teacher1",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);

        expect(result2).toBeTruthy();
        expect(result2p2).toBeTruthy();

        const result3 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course2", "teacher2",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);
        const result3p2 = await AssignmentDb.saveAssignment("Assignment 2", "This is the description",
            "course2", "teacher2",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);

        expect(result3).toBeTruthy();
        expect(result3p2).toBeTruthy();
    });

    it("shall not be able to add an assignment with a new name in the same course with the same teacher", async () => {
        const result1 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course1", "teacher1",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);
        const result1p2 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course1", "teacher1",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);

        expect(result1).toBeTruthy();
        expect(result1p2).not.toBeTruthy();

        const result2 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course2", "teacher1",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);
        const result2p2 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course2", "teacher1",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);

        expect(result2).toBeTruthy();
        expect(result2p2).not.toBeTruthy();

        const result3 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course2", "teacher2",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);
        const result3p2 = await AssignmentDb.saveAssignment("Assignment 1", "This is the description",
            "course2", "teacher2",  ["What is four added to four?", "What is four added to three?"],
            "Nov 3, 2019", 10);

        expect(result3).toBeTruthy();
        expect(result3p2).not.toBeTruthy();
    });
});
