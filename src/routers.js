const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const session = require('express-session');

const config = require('./config.js');

// Decleration of controller 
const qtest = require('./controllers/qtest.js')

// App Releated Sapce
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
    // session({
    //   secret: 'secret',
    //   resave: true,
    //   saveUninitialized: true
    // })
)

// Root Path
app.get('/', (request, response) => {
    response.json({ info: 'Santhosh Ambekar' })
})

// Test
app.get('/getProjects', qtest.getProjects);
app.get('/getUsers', qtest.getUsers);
app.get('/getModules', qtest.getModules);
app.get('/createModules', qtest.createModules);

module.exports = app;