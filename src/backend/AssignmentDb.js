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
        const doc = await this.programDb.find();
        return doc; // doc.filter(assign => assign.dueDate > new Date());
    }

    async loadAssignment(id) {
        const doc = await this.programDb.find({_id: id });
        return doc;
    }

    async saveAssignment(name, description, course, teacher, assignment, dueDate, points) {
        if(!this.assignmentNameExists(name,course, teacher)) {
            const doc = await this.programDb.insert({name, description, course, teacher, assignment, dueDate, points});
            return doc._id;
        }
        return null;
    }

    async assignmentExists(id) {
        const doc = await this.programDb.find({ _id: id });
        return doc.length !== 0;
    }

    async assignmentNameExists(name, course, teacher) {
        const doc = await this.programDb.find({name, course, teacher});
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
        await this.programDb.remove({}, { multi: true });
    }
}

module.exports = new AssignmentDb();
