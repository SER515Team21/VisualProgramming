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
            this.programDb.insert({username: "vcedgar", password: "12345"}, function (err, newDoc){
                console.log(newDoc);

            });
        }
        return UserDb.instance;
    }
    async userExists(un, pw) {
        let doc = await this.programDb.find({username:un, password: pw});
        return doc.length != 0;
    }
}

module.exports = new UserDb();