const express = require ('express')
const app = express()
const PORT_NUMBER = 5000
const db = require("./sql/sqlconn")
const bodyparser = require('body-parser')
const UniController = require('./Controllers/uniControllers')

app.use(express.urlencoded({extended : true })) // Required to post 
app.use(express.json())



// Routes creation
app.get('/', (req, res) => {
    res.json(data)  //Converts the object to a JSON 
})

app.post('/registerdata', (req, res) => {
    this.UniController = new UniController()
    this.UniController.uniController_create(req)
});


app.listen(PORT_NUMBER, (err)=> {
    if (err){
        console.log(err)
    }
    else {
        console.log("Application Started")
    }
} )