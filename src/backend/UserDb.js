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

    async addUser(un, pw) {
        let exists = await this.userExists(un);
        if(exists){
            return false;
        }
        await this.programDb.insert({ username: un, password: pw });
        return true;
    }
}

module.exports = new UserDb();
