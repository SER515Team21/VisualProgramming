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

    async userExists(un, pw) {
        const doc = await this.programDb.cfind({ username: un, password: pw })
            .exec();
        return doc.length !== 0;
    }

    async addUser(un, pw, pw2) {
        // Needs to be updated for check but this is for testing
        const doc = await this.programDb.insert({ username: un, password: pw });
        return null;
    }
}

module.exports = new UserDb();
