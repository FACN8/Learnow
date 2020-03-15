const app = module.exports = require ('express')();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('../middlewares/middlewares');
//const app = require("./app");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const connectedUsers = [];


app.use(morgan('common'));

app.use(helmet());

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

io.on("connection", socket => {
  var userName = "";
  console.log("ENTERRRRRRRRRRRRRRRRRRRRRRRRR");
  socket.on("user connected", newUser => {
    console.log("New user connected to backend", newUser);
    userName = newUser;
    connectedUsers.push(userName);
    console.log(`${userName} has joind the game`);
    console.log(`Connected users :`);
    console.table(connectedUsers);
    io.emit("update connected users", connectedUsers);


    socket.on("chat message", function(msg) {
      console.log(msg);
      io.emit("chat message", userName + " :" + msg);
    });
  });

  socket.on("disconnect", () => {
    console.log(`${userName} has left`);
    const userIndex = connectedUsers.indexOf(userName);
    connectedUsers.splice(userIndex, 1);
    console.log(`Connected users :`);
    console.table(connectedUsers);
    if(connectedUsers.length<2){
      gameStatus=gamePhases.ended;
      io.emit("round end",['Game canceled no']);
    }
    io.emit("update connected users", connectedUsers);
  });
});


app.get('/', (req, res) => {
  res.send('Welcome home');
});

app.get('/GroupChat', function(req, res){
  res.sendFile(__dirname +'/GroupChat/GroupChat.html');
});

app.get('/getcourses/*',require('../actions/getCourses'));



app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.all('*',(req,res)=>{
  res.status(404).send({message:'Are you even more lost? not found 404'});
});