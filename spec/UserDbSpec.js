/* global describe */
/* global it */
/* global expect */

/* Imports for test */
const UserDb = require("../src/backend/UserDb.js");

/* Write the test suite */
describe("User DB", () => {
    /* A setup function
    beforeEach(() => {
    });
    */

    /* A specification */
    it("shall be able to retrieve a user with a correct username and password", async function() {
        let res = await UserDb.addUser("vcedgar", "1234");
        expect(res).toBe(true);

        let result1 = await UserDb.userLogin("vcedgar", "1234");
        let result2 = await UserDb.userLogin("vcedgar", "12345");
        let result3 = await UserDb.userLogin("vcedgar6", "1234");
        expect(result1).toBe(true);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });

    /* A specification */
    it("shall be able to add a user with a new username", async function() {
        let result1 = await UserDb.addUser("zlmonroe", "1234");
        let result1p2 = await UserDb.userLogin("zlmonroe", "1234");

        expect(result1 && result1p2).toBe(true);

        let result3 = await UserDb.addUser("zlmonroe1", "1234");
        let result3p2 = await UserDb.userLogin("zlmonroe1", "1234");
        expect(result3 && result3p2).toBe(true);
    });

    /* A specification */
    it("shall fail at adding a user with an existing username", async function() {
        let result1 = await UserDb.addUser("jebush", "1234");
        let result1p2 = await UserDb.userLogin("jebush", "1234");

        expect(result1 && result1p2).toBe(true);

        let result2 = await UserDb.addUser("jebush", "12345");
        let result2p2 = await UserDb.userLogin("jebush", "12345");
        expect(result2).toBe(false);
        expect(result2p2).toBe(false);

        let result3 = await UserDb.addUser("jebush1", "1234");
        let result3p2 = await UserDb.userLogin("jebush1", "1234");
        expect(result3 && result3p2).toBe(true);
    });

    afterAll(() => {
        UserDb.removeAll();
    });
});
