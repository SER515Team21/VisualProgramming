/* global describe */
/* global it */
/* global expect */
/* global beforeAll */
/* global afterEach */
/* global afterAll */

/* Imports for test */
const CourseDb = require("../src/backend/CourseDb.js");
const UserDb = require("../src/backend/UserDb.js");

/* Write the test suite */
describe("Course DB", () => {
    beforeAll(async () => {
        await CourseDb.removeAll();
        await UserDb.removeAll();
    });

    afterEach(async () => {
        await CourseDb.removeAll();
        await UserDb.removeAll();
    });

    it("shall be able to create a course with a correct name and description", async () => {
        const course = await CourseDb.createCourse("SER515", "Foundations of SE",
            "", "");
        expect(course)
            .toBe(true);
    });

    it("shall not be able to create a course with the same name as another", async () => {
        await CourseDb.createCourse("SER515", "Foundations of SE",
            "", "");
        const course = await CourseDb.createCourse("SER515", "Foundations of SE",
            "", "");

        expect(course)
            .toBe(false);
    });

    it("shall be able to return a course id based on course name", async () => {
        const course = await CourseDb.createCourse("SER515", "Foundations of SE",
            "", "", "test");

        const result = await CourseDb.getCourseId("SER515");
        expect(result).not.toBe(null);
    });

    it("shall be able to return students in a course with a correct courseId", async () => {
        await UserDb.addUser("test", "test");
        await UserDb.addUser("test2", "test2");

        const students = await UserDb.getUsers();

        await CourseDb.createCourse("SER515", "Foundations of SE",
            "", students);

        const courseId = await CourseDb.getCourseId("SER515");
        const result = await CourseDb.getStudents(courseId);

        expect(result).toEqual(students);
    });

    it("shall be able to add a student to an existing course", async () => {
        await CourseDb.createCourse("SER515", "Foundations of SE",
            "", "");
        const courseId = await CourseDb.getCourseId("SER515");
        await UserDb.addUser("test", "test");
        const studentId = await UserDb.getUser("test")._id;
        const result = await CourseDb.addStudent(courseId, studentId);

        expect(result).toBe(true);
    });

    it("shall be able to add an array of students to an existing course", async () => {
        await CourseDb.createCourse("SER515", "Foundations of SE",
            "", "");
        await UserDb.addUser("test", "test");
        await UserDb.addUser("test2", "test2");

        const students = await UserDb.getUsers();

        const courseId = await CourseDb.getCourseId("SER515");

        const result = await CourseDb.addStudents(courseId, students);

        expect(result).toBe(true);
    });
});
