import React , {useEffect,useState} from 'react';
import ReactDOM from 'react-dom'
import './GroupChat.css';
import io from 'socket.io-client';

function GroupChat() {
const [socket,setSocket] = useState(io.connect('http://localhost:5000'));
const [msgsArray, setMsgsArray] = useState([])
useEffect(()=>{
  socket.emit("user connected", 'Aysam1');
},[])

const sendMsg = (e)=>{
  e.preventDefault();
  socket.emit('chat message',e.target.msg.value);
  e.target.msg.value ='';
  }
  socket.on("chat message", function(msg) {
    setMsgsArray([ ...msgsArray, msg ])
  });
  return (
    <div>
        <ul id="messages"></ul>
        {msgsArray.map(message => (
          <li>{message}</li>
        ))}
        <form className='chat-from' onSubmit={sendMsg}>
          <label htmlFor='msg'>
        <input type="text" name='msg' id="m" autoComplete="off" />
        </label>
        <button type="submit" value="Send">Send</button>
        </form>
      </div>
  );
}

export default GroupChat;