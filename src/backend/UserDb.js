const NedDb = require("nedb-promise");
const Path = require("path");

class UserDb {
    constructor() {
        const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
        this.programDb = NedDb({ filename: programDbPath, autoload: true });
        UserDb.instance = this;
        return UserDb.instance;
    }

    async userLogin(un, pw) {
        const doc = await this.programDb.find({ username: un, password: pw });
        return doc.length !== 0;
    }
    async userExists(un) {
        const doc = await this.programDb.find({ username: un });
        return doc.length !== 0;
    }

    async addUser(username, password, role = "student") {
        const exists = await this.userExists(username);
        if (exists) {
            return false;
        }
        await this.programDb.insert({ username, password, role });
        return true;
    }

    async updateRole(username, role = "student") {
        if (this.userExists(username)) {
            const doc = await this.programDb.update({ username, role });
            return true;
        }
        return false;
    }
}

module.exports = new UserDb();
