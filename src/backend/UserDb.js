const NedDb = require("nedb-promise");
const Path = require("path");
const fs = require("fs");

class UserDb {
    constructor() {
        if (UserDb.instance === undefined) {
            const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
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

    // eslint-disable-next-line class-methods-use-this
    async removeAll() {
        const programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
        fs.unlinkSync(programDbPath);
    }
}

const UserDbInstance = new UserDb();
UserDbInstance.createInitialAdmin();
module.exports = UserDbInstance;
