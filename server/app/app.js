const app = module.exports = require ('express')();

const {morgan,helmet,cors} = require ('./middlewares/standard');
const {notFound,errorHandler} = require('./middlewares/middlewares');

const router = require('./routes/index');

require ('dotenv').config();


app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use('/',router);


app.use(notFound);
app.use(errorHandler);

app.all('*',(req,res)=>{
  res.status(404).send({message:'Are you even more lost? not found 404'});
});