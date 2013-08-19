var connect = require('connect');
var ga = require('node-ga');
var config = require('./config.json');
connect()
  .use(connect.cookieParser())
  .use(ga(config.ga))
  .use(connect.static(config.static))
  .listen(config.listen)
