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

    async addUser(un, pw) {
        let doc = await this.programDb.cfind({ username: un}).exec()
        if(doc.length !== 0){
            return false;
        }
        await this.programDb.insert({ username: un, password: pw });
        return true;
    }
}

module.exports = new UserDb();
