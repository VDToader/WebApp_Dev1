const sql = require('sqlite3')
const db = new sql.Database('./uni_rating.db', (err)=>{
    if(err)
        {
            console.error(err)
        }
        else{
            console.log("Connection successful")
        }
})

module.exports = db