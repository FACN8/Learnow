import React, { useEffect, useState } from 'react';
import './GroupChat.css';
import io from 'socket.io-client';
import { useAuth0 } from '@auth0/auth0-spa-js';
function GroupChat() {
  let apiUrl = 'http://localhost:5000';
  if (process.env.NODE_ENV === 'production') {
    apiUrl = 'https://learnow-be.herokuapp.com';
  }
  const [socket, setSocket] = useState(io.connect(apiUrl));
  const [msgsArray, setMsgsArray] = useState([]);
  useEffect(() => {
    socket.emit('user connected', 'Aysam1');
  }, []);

  const sendMsg = e => {
    e.preventDefault();
    socket.emit('chat message', e.target.msg.value);
    e.target.msg.value = '';
  };
  socket.on('chat message', function(msg) {
    setMsgsArray([...msgsArray, msg]);
  });
  return (
    <div className='chat-container'>
      <div className='users-and-msgs-container'>
        <ul className='users-container'></ul>
        <div className='message-box'>
          <ul className='messages'>
            {msgsArray.map(message => (
              <li>{message}</li>
            ))}
          </ul>
          <form className='chat-from' onSubmit={sendMsg}>
            <label className='input-label' htmlFor='msg'>
              <input type='text' name='msg' id='m' autoComplete='off' />
            </label>
            <button type='submit' value='Send'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GroupChat;
