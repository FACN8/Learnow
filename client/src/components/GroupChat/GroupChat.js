import React, { useEffect, useState } from 'react';
import './GroupChat.css';
import io from 'socket.io-client';
import axiosGet from '../../utils/axiosGet';
function GroupChat({ group, setGroup, user }) {
  let apiUrl = 'http://localhost:5000';
  if (process.env.NODE_ENV === 'production') {
    apiUrl = 'https://learnow-be.herokuapp.com';
  }

  const [socket, setSocket] = useState(io.connect(apiUrl));
  const [msgsArray, setMsgsArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);

  const getUsers = ()=>{
    axiosGet(`/users/get/groupid=${group.id}`)
    .then(res=>{
      setUsersArray(res.data);
      console.log(res.data);
    })
    .catch(err=>setUsersArray(['Could not fetch users!']))
  }


  useEffect(() => {
    socket.emit('user connected', user.nickname);
    getUsers();
  }, []);


  const sendMsg = e => {
    e.preventDefault();
    let msg = e.target.msg.value.trim();
    e.target.msg.value = '';
    if(!msg.length) return;
    socket.emit('chat message', msg);
  };
  socket.on('chat message', function(msg) {
    setMsgsArray([...msgsArray, msg]);
  });

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
          <ul className='users-container'>
          {usersArray.map(user => (
                <li className='user-listing'>
                  <img src={user.picture} className='mini-user-pic' />
                    <h3 className='user-in-list'>{user.user_name}</h3>
                </li>
              ))}
          </ul>
          <div className='message-box'>
            <ul className='messages'>
              {msgsArray.map(message => (
                <li className='message-listing'>
                  <img src={user.picture} className='mini-user-pic' />
                  <div className='sent-msg-container'>
                    <h4>{user.nickname}</h4>
                    <span className='sent-msg'>{message.split(':')[1]}</span>
                  </div>
                </li>
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
