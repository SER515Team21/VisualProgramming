const Datastore = require('nedb');
const Path = require('path');
class UserDb {
    static instance;
    constructor(){
        if(!UserDb.instance) {
            let programDbPath = Path.relative(process.cwd(), "/data/ProgramDb.db");
            this.programDb = new Datastore({filename: programDbPath});
            this.programDb.loadDatabase(function (err) {
                console.log(err);
            });
            UserDb.instance = this;
        }
        return UserDb.instance;
    }
    queryUser(username, password) {
        return false;
    }
}

module.exports = new UserDb();