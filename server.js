const app = require('./src/routers.js');
const config = require('./src/config.js');

const port = config.app.port;

// app.listen(port, () => {
//     console.log('App running on port', port);
//     console.log('App running on port', port);
// })

var server = app.listen(config.app.port,config.app.host function() {
    console.log("Server started.......");
    console.info('Application listening at http://'+config.app.host+':'+ config.app.port);
});