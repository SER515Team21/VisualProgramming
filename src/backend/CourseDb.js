const NedDb = require("nedb-promise");
const pathLib = require("path");

class CourseDb {
    constructor() {
        if (CourseDb.instance === undefined) {
            const programDbPath = pathLib.relative(process.cwd(), "./data/CourseDb.db");
            this.courseDb = NedDb({ filename: programDbPath, autoload: true });
            CourseDb.instance = this;
        }
        return CourseDb.instance;
    }

    async courseExists(name) {
        const doc = await this.courseDb.find({ course: name });
        if (doc.find(item => item._id !== null)) {
            return true;
        }
        return false;
    }

    async createCourse(course, gradeLevel, teacherId, students = []) {
        if (course === undefined || gradeLevel === undefined || teacherId === undefined) {
            return undefined;
        }
        const exists = await this.courseExists(course);
        if (exists) {
            return undefined;
        }
        return this.courseDb.insert({ course, gradeLevel, teacherId, students });
    }

    async getCourseId(course) {
        let doc = await this.courseDb.find({ course });
        doc = doc.find(item => item._id !== null);
        if (doc === undefined) {
            return doc;
        }
        return doc._id;
    }

    async getCourseGrade(course) {
        let doc = await this.courseDb.find({ course });
        doc = doc.find(item => item.gradeLevel !== null);
        return doc.gradeLevel;
    }

    async addStudent(courseId, studentId) {
        const existingStudents = await this.getStudents(courseId);
        if (existingStudents.includes(studentId)) {
            return false;
        }

        existingStudents.push(studentId);
        const doc = await this.courseDb.update({ _id: courseId }, {
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

        const doc = await this.courseDb.update({ _id: courseId }, {
            $set: { students: existingStudents }
        }, { multi: false });
        return true;
    }

    async getStudents(courseId) {
        let doc = await this.courseDb.find({ _id: courseId });
        doc = doc.find(item => item._id !== null);
        let students = [];
        if (doc !== undefined && doc !== null && doc.students !== "") {
            students = doc.students;
        }
        return students;
    }

    async getCourses(teacherId = undefined) {
        let courses = [];
        if (teacherId === undefined) {
            const doc = await this.courseDb.find({});
            courses = doc.map(course => course.course);

            return courses;
        }
        const doc = await this.courseDb.find({ teacherId });
        courses = doc.map(course => course.course);
        return courses;
    }

    async getStudentCourses(studentId) {
        const doc = await this.courseDb.find({ students: studentId });
        const studentCourses = doc.map(course => course.course);
        return studentCourses;
    }

    async removeAll() {
        await this.courseDb.remove({}, { multi: true });
    }
}

const CourseDbInstance = new CourseDb();
module.exports = CourseDbInstance;
