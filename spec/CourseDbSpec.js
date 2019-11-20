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
        await UserDb.addUser("teacher", "password", "teacher", 1);
        const teach = await UserDb.getUser("teacher");

        const course = await CourseDb.createCourse("SER516", 5,
            teach._id);
        expect(course)
            .toBeTruthy();
    });

    it("shall not be able to create a course with the same name as another", async () => {
        await UserDb.addUser("teacher", "password", "teacher", 1);
        const teach = await UserDb.getUser("teacher");

        await CourseDb.createCourse("SER515", 5,
            teach._id);
        const course = await CourseDb.createCourse("SER515", 5,
            teach._id);

        expect(course).not.toBeTruthy();
    });

    it("shall be able to return a course id based on course name", async () => {
        await UserDb.addUser("teacher", "password", "teacher", 1);
        const teach = await UserDb.getUser("teacher");

        await CourseDb.createCourse("SER515", 5,
            teach._id);

        const result = await CourseDb.getCourseId("SER515");
        expect(result)
            .not
            .toBe(null);
    });

    it("shall be able to return students in a course with a correct courseId", async () => {
        await UserDb.addUser("teacher", "password", "teacher", 1);
        const teach = await UserDb.getUser("teacher");

        await UserDb.addUser("test", "test");
        await UserDb.addUser("test2", "test2");

        const students = await UserDb.getUsers("student");
        const studentIds = students.map(student => student._id);

        const course = await CourseDb.createCourse("SER515", 5,
            teach._id, studentIds);

        const courseId = await CourseDb.getCourseId("SER515");
        const result = await CourseDb.getStudents(courseId);

        expect(result)
            .toEqual(studentIds);
    });

    it("shall be able to add a student to an existing course", async () => {
        await UserDb.addUser("teacher", "password", "teacher", 1);
        const teach = await UserDb.getUser("teacher");

        await CourseDb.createCourse("SER515", 5,
            teach._id);
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
        await UserDb.addUser("teacher", "password", "teacher", 1);
        const teach = await UserDb.getUser("teacher");

        await CourseDb.createCourse("SER515", 5,
            teach._id);
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

    it("shall be able to return all course names", async () => {
        await UserDb.addUser("teacher", "password", "teacher", 1);
        const teach = await UserDb.getUser("teacher");

        await CourseDb.createCourse("SER515", 5,
            teach._id);
        await CourseDb.createCourse("SER500", 5,
            teach._id);

        const result = await CourseDb.getCourses();
        expect(result.includes("SER515")).toBe(true);
        expect(result.includes("SER500")).toBe(true);
        expect(result.length).toBe(2);
    });

    it("shall return all courses with the given student id in the db", async () => {
        await UserDb.addUser("test1", "test2", "student");
        const students = await UserDb.getUsers();

        const studentIds = students.map(student => student._id);
        await UserDb.addUser("teacher", "password", "teacher", 1);
        const teach = await UserDb.getUser("teacher");

        await CourseDb.createCourse("Course1", 5, teach._id, studentIds);

        const studentCourses = await CourseDb.getStudentCourses(studentIds[0]);

        expect(studentCourses.includes("Course1")).toBe(true);
        expect(studentCourses.length).toBe(1);
    });

    it("shall be able to return course names based on teacher id", async () => {
        await UserDb.addUser("teacher", "password", "teacher", 1);

        const teach = await UserDb.getUser("teacher");

        await CourseDb.createCourse("SER515", 5,
            teach._id);

        const result = await CourseDb.getCourses(teach._id);

        expect(result)
            .toEqual(["SER515"]);
    });
});
