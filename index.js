const express = require ('express')
const app = express()
const PORT_NUMBER = 5000
const db = require("./sql/sqlconn")
const bodyparser = require('body-parser')

app.use(express.urlencoded({extended : true })) // Required to post 
app.use(express.json())

// JSON object creation
let data = [
    {
        "fn" : "Vlad",
        "sn" : "Toader",
        "address" : "10 Wellacre Road"
    },
    {
        "fn" : "Irina",
        "sn" : "Buburuz",
        "address" : "10 Wellacre Road"
    },
]


// Routes creation
app.get('/', (req, res) => {
    res.json(data)  //Converts the object to a JSON 
})

app.post('/registerdata', (req, res) => {
    console.log(Object.values(req.body));
    res.status(200).send('Data received');
});


app.listen(PORT_NUMBER, (err)=> {
    if (err){
        console.log(err)
    }
    else {
        console.log("Application Started")
    }
} )