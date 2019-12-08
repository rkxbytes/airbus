const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require("cors");
const routes = require('./route');
const config = require("./config.json");

const app = express();

app.use(cors());
app.use(bodyParser({ limit: "50mb",extended:true, parameterLimit:1000000 }));
app.use(bodyParser.urlencoded({limit:"50mb"}));
app.use('/',express.static(path.join(__dirname,'www')));
app.use(routes);



app.use((req,res,next)=>{
    console.log(req.path)
    res.sendFile(__dirname + '/www/index.html');
})

app.use((req,res,next)=>{
    console.log(req.path);
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(process.env.PORT || config.PORT,()=>{
   console.log("\nServer started listening at: " + config.HOST + ":" + config.PORT + "/\n")
});
