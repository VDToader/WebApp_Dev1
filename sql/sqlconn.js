const sql = require ('sqlite3');
const db = new sql.Database('../../db', (err)=>{
    if (err) {
        console.error(err);
    }
    else {
        console.log("Connection Succesfully Made");
    }
})

module.exports = db;