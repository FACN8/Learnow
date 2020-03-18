import React , {useEffect,useState} from 'react';
import './GroupChat.css';
import io from 'socket.io-client';

function GroupChat() {
const [socket,setSocket] = useState(io.connect('http://localhost:5000'));
socket.emit("user connected", 'Najwan');
socket.emit('chat message','plz work');

const sendMsg = (e)=>{
  e.preventDefault();
  socket.emit('chat message',e.target.msg.value);
  e.target.msg.value ='';
  }
  return (
    <div>
        <ul id="messages"></ul>
        <form onSubmit={sendMsg}>
          <label htmlFor='msg'>
        <input type="text" name='msg' id="m" autoComplete="off" />
        </label>
        <button type="submit" value="Send">Send</button>
        </form>
      </div>
  );
}

export default GroupChat;
