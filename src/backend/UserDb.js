const NedDb = require("nedb-promise");
const Path = require("path");
const fs = require("fs");

class UserDb {
    constructor(env) {
        if (env === null) {
            const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
            this.programDb = NedDb({ filename: programDbPath, autoload: true });
            UserDb.instance = this;
        }
        else {
            const programDbPath = Path.relative(process.cwd(), "./data/TesDb.db");
            this.programDb = NedDb({ filename: programDbPath, autoload: true });
            UserDb.instance = this;
        }
        return UserDb.instance;
    }

    async userLogin(un, pw) {
        const doc = await this.programDb.find({ username: un, password: pw });
        if (doc.some(item => item.enabled === 1)) {
            return true;
        }
        return false;
    }

    async userExists(un) {
        const doc = await this.programDb.find({ username: un });
        if (doc.some(item => item.enabled === 1)) {
            return true;
        }
        return false;
    }

    async addUser(username, password, role = "student", enabled = 1) {
        const exists = await this.userExists(username);
        if (exists) {
            return false;
        }
        await this.programDb.insert({ username, password, role, enabled });
        return true;
    }

    async updateRole(username, role = "student") {
        const exists = await this.userExists(username);
        if (exists) {
            await this.programDb.update({ username }, { role });
            return true;
        }
        return false;
    }

    // eslint-disable-next-line class-methods-use-this
    removeAll() {
        const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
        fs.unlinkSync(programDbPath);
    }

    async getUserCount(role = "student") {
        const doc = await this.programDb.count({ role });
        return doc;
    }

    async getUser(username) {
        const doc = await this.programDb.find({ username });
        return doc;
    }

    async getUsers(role = "student") {
        const doc = await this.programDb.find({ role });
        return doc;
    }

    async disableUser(username) {
        const exists = await this.userExists(username);
        if (exists) {
            await this.programDb.update({ username }, { enabled: 0 });
            return true;
        }
        return false;
    }
}

module.exports = new UserDb();
