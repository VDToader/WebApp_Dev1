const UniDAO = require('../DAOs/UniDAO')


class UniController{
    
    constructor(){
        this.unidao = new UniDAO()
    }

    async uniController_create(req)
    {
          var result = await this.unidao.create(req)
          return result
    }

}

module.exports = UniController