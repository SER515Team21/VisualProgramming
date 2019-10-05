const NedDb = require("nedb-promise");
const Path = require("path");

class UserDb {
    constructor() {
        if (!UserDb.instance) {
            const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
            this.programDb = NedDb({ filename: programDbPath, autoload: true });
            UserDb.instance = this;
        }
        return UserDb.instance;
    }

    async userExists(username, password = null) {
        let doc = [];
        if (password !== null) {
            doc = await this.programDb.cfind({ username: username, password: password }).exec();
        } else {
            doc = await this.programDb.cfind({ username: username}).exec();
        }
        return doc.length !== 0;
    }

    async addUser(username, password, role = "student") {
        // Needs to be updated for check but this is for testing
        const doc = await this.programDb.insert({ username: username, password: password, role: role });
        return doc.length !== 0;
    }

    async updateRole(username, role = "student") {
        let doc = [];
        if (this.userExists(username)) {
            doc = await this.programDb.update({ username: username, role: role});
            return doc.length !== 0;
        } else {
            return false;
        }
    }
}

module.exports = new UserDb();
