const app = module.exports = require ('express')();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('../middlewares/middlewares');
 


var whitelist = ['http://localhost:3000', 'https://learnow.netlify.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(morgan('common'));

app.use(helmet());

app.use(
  cors(corsOptions),
);

app.get('/', (req, res) => {
  res.send('Welcome home');
});

app.get('/getcourses/*',require('../actions/getCourses'));



app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.all('*',(req,res)=>{
  res.status(404).send({message:'Are you even more lost? not found 404'});
});