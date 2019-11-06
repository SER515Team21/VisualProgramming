const NedDb = require("nedb-promise");
const Path = require("path");

class CourseDb {
    constructor() {
        if (CourseDb.instance === undefined) {
            const programDbPath = Path.relative(process.cwd(), "./data/CourseDB.db");
            this.programDb = NedDb({ filename: programDbPath, autoload: true });
            CourseDb.instance = this;
        }
        return CourseDb.instance;
    }

    async courseExists(un) {
        const doc = await this.programDb.find({ coursename: un });
        if (doc.find(item => item.enabled === 1)) {
            return true;
        }
        return false;
    }

    async addCourse(coursename, password, role = "student", enabled = 1) {
        const exists = await this.courseExists(coursename);
        if (exists) {
            return false;
        }
        await this.programDb.insert({ coursename, password, role, enabled });
        return true;
    }

    // eslint-disable-next-line class-methods-use-this
    async removeAll() {
        await this.programDb.remove({}, { multi: true });
    }
    async getCourse(coursename) {
        let doc = await this.programDb.find({ coursename });
        doc = doc.find(item => item.coursename === coursename);
        return doc;
    }
}

const CourseDbInstance = new CourseDb();
module.exports = CourseDbInstance;
