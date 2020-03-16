// helper middleware packages morgan to log, helmet and cors for extra security
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


module.exports = {
  morgan,
  helmet,
  cors
}