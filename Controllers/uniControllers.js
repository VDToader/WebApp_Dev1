const uniDAO = require('../DAOs(DataAccessObjects)/uniDAO')

class UniController{
    constructor(){
        this.unidao = new uniDAO()
    }
    async uniController_create (req)
    {
        if(Object.values(req.body).length === 4){
            this.unidao.create(req)
        }
    }
}

module.exports = UniController