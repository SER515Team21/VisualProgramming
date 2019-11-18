const NedDb = require("nedb-promise");
const pathLib = require("path");

class CourseDb {
    constructor() {
        if (CourseDb.instance === undefined) {
            const programDbPath = pathLib.relative(process.cwd(), "./data/CourseDb.db");
            this.programDb = NedDb({ filename: programDbPath, autoload: true });
            CourseDb.instance = this;
        }
        return CourseDb.instance;
    }

    async courseExists(name) {
        const doc = await this.programDb.find({ course: name });
        if (doc.find(item => item._id !== null)) {
            return true;
        }
        return false;
    }

    async createCourse(course, gradeLevel, teacherId, students = []) {
        if (course === undefined || gradeLevel === undefined || teacherId === undefined) {
            return false;
        }
        const exists = await this.courseExists(course);
        if (exists) {
            return false;
        }
        await this.programDb.insert({ course, gradeLevel, teacherId, students });
        return true;
    }

    async getCourseId(course) {
        let doc = await this.programDb.find({ course });
        doc = doc.find(item => item._id !== null);
        return doc._id;
    }

    async addStudent(courseId, studentId) {
        const existingStudents = await this.getStudents(courseId);
        if (existingStudents.includes(studentId)) {
            return false;
        }

        existingStudents.push(studentId);
        const doc = await this.programDb.update({ _id: courseId }, {
            $set: { students: existingStudents }
        }, { multi: false });
        return true;
    }

    async addStudents(courseId, newStudents = []) {
        const existingStudents = await this.getStudents(courseId);

        if (existingStudents.includes(newStudents)) {
            return false;
        }

        newStudents.forEach((student) => {
            existingStudents.push(student);
        });

        const doc = await this.programDb.update({ _id: courseId }, {
            $set: { students: existingStudents }
        }, { multi: false });
        return true;
    }

    async getStudents(courseId) {
        let doc = await this.programDb.find({ _id: courseId });
        doc = doc.find(item => item._id !== null);
        if (doc.students === "") {
            doc.students = [];
        }
        return doc.students;
    }

    async getCourses(teacherId = undefined) {
        let courses = [];
        if (teacherId === undefined) {
            const doc = await this.programDb.find({});
            courses = doc.map(course => course.course);

            return courses;
        }
        const doc = await this.programDb.find({ teacherId });
        courses = doc.map(course => course.course);
        return courses;
    }

    async removeAll() {
        await this.programDb.remove({}, { multi: true });
    }
}

module.exports = new CourseDb();
