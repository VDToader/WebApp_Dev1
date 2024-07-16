const db = require('../sql/sqlconn')

class UniDAO{

    constructor(){

    }
    async create(req){
       var query = "insert into university (`_uni_name_`, `_location_`, `_longitude_`, `_latitude_`)" +
       "values (?, ?, ?, ?)"
       var data = Object.values(req.body)
       console.log(data)
       try{
            var result = await db.run(query, data)
            return{
                "status": "true"
            }
       }
       catch(err)
       {
            console.error(err)//Only during develppment
            return{
                "status": "false"
            }
       }

    }
    async retrieveByID(req){

    }
    async retrieveByName(req){

    }
    async retrieveByType(req){

    }
    async retrieveByLocation(req){

    }
    async updateByID(req){

    }
    async deleteByID()
    {

    }
}
module.exports = UniDAO