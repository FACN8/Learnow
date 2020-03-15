const app = module.exports = require ('express')();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('../middlewares/middlewares');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');
require ('dotenv').config();
var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: `https://${process.env.AUTH0_AUDIENCE}/`,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
});



app.use(morgan('common'));

app.use(helmet());

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});


app.get('/', (req, res) => {
  res.send('Welcome home');
});


app.get('/getcourses/*',require('../actions/getCourses'));



app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.all('*',(req,res)=>{
  res.status(404).send({message:'Are you even more lost? not found 404'});
});