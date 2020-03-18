const app = require('./app/app');
const port = process.env.PORT || 5000;

const http = require("http").createServer(app);
const io = require("socket.io")(http);
const connectedUsers = []

http.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

io.on("connection", socket => {
  var userName = "";
  console.log("User Connected");
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
    io.emit("update connected users", connectedUsers);
  });
});
