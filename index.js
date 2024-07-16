const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const PORT_NUMBER = 5000
const UniController = require('./Controllers/UniController')
//const bodyparser = require('body-parser')
app.use(express.urlencoded({extended :true}))
app.use(express.json())

app.get('/', (req, res) =>{
    //res.json(data)
    //Task 1: Send the data to the client
})

app.post('/registerdata', (req, res) =>{
    
    this.unicontroller = new UniController()
    var result = this.unicontroller.uniController_create(req)
    res.json(result)
})

app.listen(PORT_NUMBER, (err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log('Application Started')
    }
})

