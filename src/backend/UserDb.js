const NedDb = require("nedb-promise");
const Path = require("path");

class UserDb {
    constructor() {
        const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
        this.programDb = NedDb({ filename: programDbPath, autoload: true });
        UserDb.instance = this;
        return UserDb.instance;
    }

    async userLogin(username, password) {
        const doc = await this.programDb.find({ username, password });
        if (doc.find(item => item.enabled === 1)) {
            return true;
        }
        return false;
    }

    async userExists(un) {
        const doc = await this.programDb.find({ username: un });
        if (doc.find(item => item.enabled === 1)) {
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
    async removeAll() {
        await this.programDb.remove({}, { multi: true });
    }

    async getUserCount(role = "student") {
        const doc = await this.programDb.count({ role });
        return doc;
    }

    async getUser(username) {
        let doc = await this.programDb.find({ username });
        doc = doc.find(item => item.username === username);
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
