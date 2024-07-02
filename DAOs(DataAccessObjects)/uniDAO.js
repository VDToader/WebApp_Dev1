const db = require ('../sql/sqlconn')

class uniDAO {
    constructor(){

    }

   async  create(req){
    var query = "insert into university ('_uni_name_', '_location_', '_longitude_', '_latitude_') values (?,?,?,?);"
    var data = Object.values(req.body)
    try{
        var result = await db.run(query,data)
        return{
            "status" : "true", 

        }
    }
    catch(err){
        console.error(err) // Only during developement
        return {
            "status" : "false"
        }
    }
    }
   async retrive(req){

    }
   async retriveByID(req){
            //Admin functionability
    }
   async retriveByName(req){

    }
   async  retriveByType(req){

    }
   async retriveByLocation(req){

    }
   async updateByName(req){

    }
   async deleteByID(req){

    }
}
module.exports = uniDAO