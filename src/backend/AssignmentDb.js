const NedDb = require("nedb-promise");
const Path = require("path");
const fs = require("fs");

class AssignmentDb {
    constructor() {
        if (AssignmentDb.instance === undefined) {
            const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
            this.programDb = NedDb({ filename: programDbPath, autoload: true });
            AssignmentDb.instance = this;
        }
        return AssignmentDb.instance;
    }

    async loadAssignment(id) {
        const doc = await this.programDb.find({ role: "Assignment", _id: id });
        return doc;
    }

    async saveAssignment(name, description, course, assignment) {
        const doc = await this.programDb.insert({ name, description, course, assignment, role: "Assignment" });
        return doc._id;
    }

    async assignmentExists(id) {
        const doc = await this.programDb.find({ _id: id });
        return doc.length !== 0;
    }

    async updateAssignment(name, description, course, assignemnt, id) {
        if (this.assignmentExists(id)) {
            await this.programDb.update({ role: "Assignment", _id: id }, { name, description, course, assignemnt });
            return true;
        }
        return false;
    }

    // eslint-disable-next-line class-methods-use-this
    async removeAll() {
        await this.programDb.remove({}, { multi: true });
    }
}

module.exports = new AssignmentDb();
