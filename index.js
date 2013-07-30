var config = require('./config');
var connect = require('connect');
connect()
  .use(connect.cookieParser())
  .use(require('node-ga')(config.ga))
  .use(connect.static(config.static))
  .listen(config.port)
