const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

//database
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://dbvagner/mydb');

server.get("/", (req, res)=>{
    res.send("{result:'passou'}");
});

server.listen(3000);