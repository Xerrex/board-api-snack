const mongoose = require("mongoose");
require('dotenv/config');


const dbuser = process.env.DB_USER
const dbpass = process.env.DB_PASS
const dbhost = process.env.DB_HOST
const dbport = process.env.DB_PORT
const dbname = process.env.DB_NAME

const options = {
    authSource:"admin"
}
mongoose.connect(`mongodb://${dbuser}:${dbpass}@${dbhost}:${dbport}/${dbname}`,
    options,
    (err, _db) =>{
        if (err){
            console.log(`DB error:${err}`)
        }
        console.log(`Connected to Db:${_db}`)
    }
);

module.exports = mongoose