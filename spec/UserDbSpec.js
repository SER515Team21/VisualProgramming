/* global describe */
/* global it */
/* global expect */
/* global beforeAll */
/* global afterEach */
/* global afterAll */

/* Imports for test */
const UserDb = require("../src/backend/UserDb.js");

/* Write the test suite */
describe("User DB", () => {
    beforeAll(async () => {
        await UserDb.removeAll();
    });

    afterEach(async () => {
        await UserDb.removeAll();
    });


    it("shall be able to retrieve a user with a correct username and password", async () => {
        const res = await UserDb.addUser("vcedgar", "1234");
        expect(res)
            .toBe(true);

        const result1 = await UserDb.userLogin("vcedgar", "1234");
        const result2 = await UserDb.userLogin("vcedgar", "12345");
        const result3 = await UserDb.userLogin("vcedgar6", "1234");

        expect(result1)
            .toBe(true);
        expect(result2)
            .toBe(false);
        expect(result3)
            .toBe(false);
    });

    it("shall be able to add a user with a new username", async () => {
        const result1 = await UserDb.addUser("zlmonroe", "1234");
        const result1p2 = await UserDb.userLogin("zlmonroe", "1234");

        expect(result1).toBe(true);
        expect(result1p2).toBe(true);

        const result3 = await UserDb.addUser("zlmonroe1", "1234");
        const result3p2 = await UserDb.userLogin("zlmonroe1", "1234");

        expect(result3).toBe(true);
        expect(result3p2).toBe(true);
    });

    it("shall fail at adding a user with an existing username", async () => {
        const result1 = await UserDb.addUser("jebush", "1234");
        const result1p2 = await UserDb.userLogin("jebush", "1234");

        expect(result1).toBe(true);
        expect(result1p2).toBe(true);

        const result2 = await UserDb.addUser("jebush", "12345");
        const result2p2 = await UserDb.userLogin("jebush", "12345");

        expect(result2).toBe(false);
        expect(result2p2).toBe(false);

        const result3 = await UserDb.addUser("jebush1", "1234");
        const result3p2 = await UserDb.userLogin("jebush1", "1234");

        expect(result3).toBe(true);
        expect(result3p2).toBe(true);
    });

    it("shall return count of all students in the db", async () => {
        await UserDb.addUser("test1", "test1");
        await UserDb.addUser("test2", "test2", "student");
        await UserDb.addUser("test3", "test3", "teacher");

        const result1 = await UserDb.getUserCount();
        const result2 = await UserDb.getUserCount("student");

        expect(result1).toBe(2);
        expect(result1).toBe(result2);
    });

    it("shall return selected student in the db", async () => {
        await UserDb.addUser("test1", "test1");
        await UserDb.addUser("test2", "test2", "student");
        await UserDb.addUser("test3", "test3", "teacher");

        const result = await UserDb.getUser("test1");
        expect(result.username === "test1").toBe(true);
    });

    it("shall return all students in the db", async () => {
        await UserDb.addUser("test1", "test2", "student");
        await UserDb.addUser("test2", "test2", "student");
        await UserDb.addUser("test3", "test2", "student");


        const result = await UserDb.getUsers("student");

        expect(result.length).toBe(3);
        expect(result.every(item => item.role === "student"))
            .toBe(true);
    });

    it("shall disable a user", async () => {
        await UserDb.addUser("test5", "test5");

        const disable = await UserDb.disableUser("test5");

        expect(disable).toBe(true);
    });
});
