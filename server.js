import app from './app.js'
import debugg from 'debug'
import http from 'http'

var debug = debugg('myapp:server');

var port = 3000
app.set('port', port);


var server = http.createServer(app);
server.listen(port);
