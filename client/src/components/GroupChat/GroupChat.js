import React, { useEffect, useState } from 'react';
import './GroupChat.css';
import io from 'socket.io-client';

function GroupChat({ group, setGroup ,user}) {

  let apiUrl = 'http://localhost:5000';
  if (process.env.NODE_ENV === 'production') {
    apiUrl = 'https://learnow-be.herokuapp.com';
  }


  const [socket, setSocket] = useState(io.connect(apiUrl));
  const [msgsArray, setMsgsArray] = useState([]);
  useEffect(() => {
    socket.emit('user connected', user.nickname);
  }, []);

  const sendMsg = e => {
    e.preventDefault();
    socket.emit('chat message', e.target.msg.value);
    e.target.msg.value = '';
  };
  socket.on('chat message', function(msg) {
    setMsgsArray([...msgsArray, msg]);
  });

  console.log(group);
  return (
    <div>
      <div className='groupchat-nav'>
        <span className='back-to-groups' onClick={() => setGroup(null)}>
          ⟵ Back to groups
        </span>
        <div className='groupname-container'>
          <span className='chat-groupname' onClick={() => setGroup(null)}>
            {group.name}
          </span>
        </div>
      </div>
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
    </div>
  );
}

export default GroupChat;
