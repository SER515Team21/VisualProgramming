const NedDb = require('nedb-promise');
const Path = require('path');
class UserDb {
    static instance;
    constructor(){
        if(!UserDb.instance) {
            let programDbPath = Path.relative(process.cwd(), "/data/ProgramDb.db");
            this.programDb = NedDb({filename: programDbPath, autoload: true});
            UserDb.instance = this;
        }
        return UserDb.instance;
    }
    async userExists(un, pw) {
        console.log("exists here");
        let doc = await this.programDb.cfind({username:un, password: pw}).exec();
        console.log("exists here2");
        console.log(doc)
        return doc.length != 0;
    }
}

module.exports = new UserDb();