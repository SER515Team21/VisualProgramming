const NedDb = require("nedb-promise");
const Path = require("path");
const fs = require("fs");

class UserDb {
    constructor() {
        const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
        this.programDb = NedDb({ filename: programDbPath, autoload: true });
        UserDb.instance = this;
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

    async addUser(username, password, role = "student") {
        const exists = await this.userExists(username);
        if (exists) {
            return false;
        }
        await this.programDb.insert({ username, password, role, enabled: 1 });
        return true;
    }

    async updateRole(username, role = "student") {
        if (this.userExists(username)) {
            const doc = await this.programDb.update({ username, role });
            return true;
        }
        return false;
    }

    // eslint-disable-next-line class-methods-use-this
    async removeAll() {
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
}

module.exports = new UserDb();
