const NedDb = require('nedb-promise');
const Path = require('path');
class UserDb {
    static instance;
    constructor(){
        console.log(process.cwd());
        if(!UserDb.instance) {
            let programDbPath = Path.relative(process.cwd(), "./data/ProgramDb.db");
            console.log(programDbPath);
            this.programDb = NedDb({filename: programDbPath, autoload: true});
            UserDb.instance = this;
        }
        return UserDb.instance;
    }
    async userExists(un, pw) {
        let doc = await this.programDb.cfind({username:un, password: pw}).exec();
        return doc.length != 0;
    }
}

module.exports = new UserDb();