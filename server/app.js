const express = require('express');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(helmet())

//const routes = require('./routes/routes');
//const helpers = require('./views/helpers/uppercase')

// const data = require('../src/views')

app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname,'app','routes','GroupChat')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session(
    {
       user:null,
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }
))
app.set('port', process.env.PORT || 5000);
//app.use(routes);

module.exports = app;