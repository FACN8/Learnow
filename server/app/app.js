const app = module.exports = require ('express')();

const {morgan,helmet,cors} = require ('./middlewares/standard');
const {notFound,errorHandler} = require('./middlewares/middlewares');

const router = require('./routes/index');

require ('dotenv').config();

var whitelist = ['http://localhost:3000', 'https://learnow.netlify.com','https://learnow-be.herokuapp.com'];
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
  cors(corsOptions)
);

app.use('/',router);


app.use(notFound);
app.use(errorHandler);

app.all('*',(req,res)=>{
  res.status(404).send({message:'Are you even more lost? not found 404'});
});