const NedDb = require("nedb-promise");
const Path = require("path");

class AssignmentDb {
    constructor() {
        if (AssignmentDb.instance === undefined) {
            const programDbPath = Path.relative(process.cwd(), "./data/AssignDb.db");
            this.assignmentDb = NedDb({ filename: programDbPath, autoload: true });
            AssignmentDb.instance = this;
        }
        return AssignmentDb.instance;
    }

    async deleteAssignment(id) {
        this.assignmentDb.remove({ _id: id });
    }

    async getAssignmentsByCourse(course) {
        const doc = await this.assignmentDb.find({ course });
        return doc;
    }

    async getAssignmentById(assignId) {
        const doc = await this.assignmentDb.find({ _id: assignId});
        return doc[0];
    }

    async getSubmissions(assignId) {
        const doc = await this.getAssignmentById(assignId);
        return doc.submissions;
    }

    async loadCurrentAssignments() {
        const doc = await this.assignmentDb.find({});
        return doc; // doc.filter(assign => assign.dueDate > new Date());
    }

    async loadAssignment(id) {
        const doc = await this.assignmentDb.find({ _id: id });
        return doc[0];
    }

    async submitAssignment(assignmentId, studentId, answers) {
        const doc = await this.assignmentDb.update({ _id: assignmentId },
            { $push: { submissions: { studentId, answers } } });
        return doc._id;
    }

    async saveAssignment(name, description, course, teacher, questions, dueDate, points) {
        const exists = await this.assignmentNameExists(name, course, teacher);
        if (!exists) {
            const doc = await this.assignmentDb.insert({
                name, description, course, teacher, questions, dueDate, points });

            return doc._id;
        }
        return null;
    }

    async assignmentExists(id) {
        const doc = await this.assignmentDb.find({ _id: id });
        return doc.length !== 0;
    }

    async assignmentNameExists(name, course, teacher) {
        const doc = await this.assignmentDb.find({ name, course, teacher });
        return doc.length !== 0;
    }

    async updateAssignment(name, description, course, assignment, dueDate, id) {
        if (this.assignmentExists(id)) {
            await this.assignmentDb.update({ _id: id }, { name, description, course, assignment });
            return true;
        }
        return false;
    }

    async gradeSubmission(assignmentId, studentId, grade, comment = "") {
        const assignments = await this.assignmentDb.find({ _id: assignmentId });
        if (assignments !== undefined && assignments.length === 1) {
            const subs = assignments[0].submissions;
            for (let i = 0; i < subs.length; ++i) {
                if (subs[i].studentId === studentId) {
                    subs[i].grade = grade;
                    subs[i].comment = comment;
                    this.assignmentDb.update(
                        { _id: assignmentId }, { $set: { submissions: subs } });
                    break;
                }
            }
        }
    }

    async removeAll() {
        await this.assignmentDb.remove({}, { multi: true });
    }
}

module.exports = new AssignmentDb();
