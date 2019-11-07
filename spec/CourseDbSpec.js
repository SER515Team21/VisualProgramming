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
        const course = await CourseDb.createCourse("SER515", 5,
            "");
        expect(course)
            .toBe(true);
    });

    it("shall not be able to create a course with the same name as another", async () => {
        await CourseDb.createCourse("SER515", 5,
            "");
        const course = await CourseDb.createCourse("SER515", 5,
            "");

        expect(course)
            .toBe(false);
    });

    it("shall be able to return a course id based on course name", async () => {
        const course = await CourseDb.createCourse("SER515", 5,
            "");

        const result = await CourseDb.getCourseId("SER515");
        expect(result)
            .not
            .toBe(null);
    });

    it("shall be able to return students in a course with a correct courseId", async () => {
        await UserDb.addUser("test", "test");
        await UserDb.addUser("test2", "test2");

        const students = await UserDb.getUsers();
        const studentIds = students.map(student => student._id);

        await CourseDb.createCourse("SER515", 5,
            "", studentIds);

        const courseId = await CourseDb.getCourseId("SER515");
        const result = await CourseDb.getStudents(courseId);

        expect(result)
            .toEqual(studentIds);
    });

    it("shall be able to add a student to an existing course", async () => {
        await CourseDb.createCourse("SER515", 5,
            "");
        const courseId = await CourseDb.getCourseId("SER515");
        let student = {};

        if (await UserDb.addUser("test", "test")) {
            student = await UserDb.getUser("test");
        }

        let result = false;
        const studentId = student._id;
        if (studentId !== undefined) {
            result = await CourseDb.addStudent(courseId, studentId);
        }

        expect(result)
            .toBe(true);
    });

    it("shall be able to add an array of students to an existing course", async () => {
        await CourseDb.createCourse("SER515", 5,
            "");
        await UserDb.addUser("test", "test");
        await UserDb.addUser("test2", "test2");
        await UserDb.addUser("test3", "test3");


        const students = await UserDb.getUsers();

        const studentIds = students.map(student => student._id);

        const courseId = await CourseDb.getCourseId("SER515");

        const result = await CourseDb.addStudents(courseId, studentIds);

        expect(result)
            .toBe(true);
    });
});
