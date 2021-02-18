const app = require('./src/routers.js');
const config = require('./src/config.js');

const port = config.app.port;

// app.listen(port, () => {
//     console.log('App running on port', port);
//     console.log('App running on port', port);
// })

var server = app.listen(config.app.port, function() {
    console.info('Application listening at http://localhost:' + config.app.port);
});