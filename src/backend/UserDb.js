const NedDb = require("nedb-promise");
const Path = require("path");

class UserDb {
    constructor() {
        if (UserDb.instance === undefined) {
            const programDbPath = Path.relative(process.cwd(), "./data/UserDB.db");
            this.programDb = NedDb({ filename: programDbPath, autoload: true });
            UserDb.instance = this;
        }
        return UserDb.instance;
    }

    createInitialAdmin() {
        this.programDb.find({ role: "admin" }).then((doc) => {
            if (doc.length === 0) {
                this.addUser("admin", "password", "admin");
            }
        });
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

    async addUser(username, password, role = "student", enabled = 1, firstname = "NA", lastname = "NA") {
        const exists = await this.userExists(username);
        if (exists) {
            return false;
        }
        await this.programDb.insert({ username, password, role, enabled, firstname, lastname });
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

    async getUserWithId(id) {
        const doc = await this.programDb.find({ _id: id });
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

    async updateUser(id, username, password, role, enabled, firstname, lastname) {
        await this.programDb.update({ _id: id },
            { username, password, role, enabled, firstname, lastname },
            {});
        return true;
    }
}

const UserDbInstance = new UserDb();
UserDbInstance.createInitialAdmin();
module.exports = UserDbInstance;
