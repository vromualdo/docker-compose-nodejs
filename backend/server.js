const express = require('express');
const restful = require('node-restful');
const bodyParser = require('body-parser')
const server = express();
const mongoose = restful.mongoose;

//database
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://dbvagner/mydb');

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.get("/", (req, res)=>{

    let result = {result:'passou', contend:{id:12, name:'XXX'}};

    res.send(result);
});

server.listen(3000);