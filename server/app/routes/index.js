const app = module.exports = require ('express')();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('../middlewares/middlewares');


app.use(morgan('common'));

app.use(helmet());

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.get('/', (req, res) => {
  res.send('Welcome home');
});

app.use('/auth',require('./auth '));
app.use('/users',require('./users'));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.all('*',(req,res)=>{
  res.status(404).send({message:'Are you even more lost? not found 404'});
});