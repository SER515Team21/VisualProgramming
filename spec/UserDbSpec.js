/* global describe */
/* global it */
/* global expect */

const UserDB = require("../src/backend/UserDb.js");

/* Write the test suite */
describe("User Db", () => {
    /* A setup function
       beforeEach(() => {
       });
       */

    /* A specification */
    it("shall be able to create a default user with role: student", async function() {
        const userDb = UserDB;
        userDb.addUser("test", "test");
        const foundUser = await userDb.userExists("test", null);
        expect(foundUser).toBe(true)
    });
});
