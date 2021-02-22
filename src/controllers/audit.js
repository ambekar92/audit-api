const config = require('../config.js');
const axios = require('axios').default;
const https = require('https');
const path = require('path');
const rootCas = require('ssl-root-cas').create();
const _ = require('underscore');

var routes = function() {};

module.exports = routes;

console.log('Check PATH --',__dirname);

routes.prototype.testing = async(req, res) => {
    try {
        // let testUrl = "https://qtest.tulip.nxp.com/api/v3/projects";
        let users = "/api/v3/projects/55/users"
        //let resData = await qtestGetMethod(users);
          console.log('Working  --',users);
        res.json(users);
    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }
}


/* Get Default Project ID */
async function getProjectID() {
    try {
        let projAPI = "/api/v3/projects"
        let resData = await qtestGetMethod(projAPI); //qtest GET Method
        let result = _.where(resData.data, { name: config.qtest.project_name }); // project name configured in config.js
        return result;


    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }
}

