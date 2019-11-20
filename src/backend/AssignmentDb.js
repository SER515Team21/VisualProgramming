const NedDb = require("nedb-promise");
const Path = require("path");

class AssignmentDb {
    constructor() {
        if (AssignmentDb.instance === undefined) {
            const programDbPath = Path.relative(process.cwd(), "./data/AssignDb.db");
            this.programDb = NedDb({ filename: programDbPath, autoload: true });
            AssignmentDb.instance = this;
        }
        return AssignmentDb.instance;
    }

    async loadCurrentAssignments() {
        const doc = await this.programDb.find({ role: "Assignment" });
        return doc; // doc.filter(assign => assign.dueDate > new Date());
    }

    async loadAssignment(id) {
        const doc = await this.programDb.find({ role: "Assignment", _id: id });
        return doc;
    }

    async saveAssignment(name, description, course, assignment, dueDate) {
        const doc = await this.programDb.insert({ name, description, course, assignment, dueDate, role: "Assignment", submissions: [] });
        return doc._id;
    }

    async submitAssignment(assignmentId, studentId, answers) {
        const doc = await this.programDb.update({ _id: assignmentId },
            { $push: { submissions: { studentId, answers } } });
        return doc._id;
    }

    async assignmentExists(id) {
        const doc = await this.programDb.find({ _id: id });
        return doc.length !== 0;
    }

    async updateAssignment(name, description, course, assignment, dueDate, id) {
        if (this.assignmentExists(id)) {
            await this.programDb.update({ role: "Assignment", _id: id }, { name, description, course, assignment });
            return true;
        }
        return false;
    }

    async removeAll() {
        // THIS CODE IS WRONG. It will remove the users as well. This is only test code for testing
        // the UI. It is NOTE DONE and NOT TESTED.
        await this.programDb.remove({}, { multi: true });
    }
}

module.exports = new AssignmentDb();
