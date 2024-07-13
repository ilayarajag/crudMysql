const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors= require('cors');

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());

app.use(cors());
const { _, moment } = require('./config/common-includes');

app.get("/", (req, res) => {
      res.json({ message: "Welcome to bezkoder application." });
    });
    app.response.sendOk = function(message) {
      return this.status(200).json(message);
    };
    
    app.response.invalidRequest = function(message) {
      return this.status(400).json(message);
    };
    
    app.response.serverError = function(message) {
      return this.status(500).json(message);
    };


    
    app.use('/v3/core',require("./routes/api-routes"));

    const port = process.env.PORT ||3001;
    app.set('port',port);
    const server = http.createServer(app);
    server.listen(port,()=>console.log(`Server running at port ${port}`))
    
    
    module.exports = app;