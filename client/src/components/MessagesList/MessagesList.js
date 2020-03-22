import React, { useState, useEffect } from 'react';
import axiosGet from '../../utils/axiosGet';

const MessagesList = ({ groupId, msgsArray, setMsgsArray }) => {

  const getMessages = () => {
    axiosGet(`/messages/get/${groupId}`)
      .then(result => {
        setMsgsArray(
          result.data.map(msgData => ({
            userName: msgData.user_name,
            picture: msgData.picture,
            message: msgData.message,
            updatedAt: msgData.updated_at,
          })),
        );
      })
      .catch(console.log);
  };

  useEffect(() => {
    getMessages();
  }, []);
  if (!msgsArray.length)
  return (
    <ul className='messages'>
      <li className='message-listing'>
          <h2 className='sent-msg'>Loading messaages . .  .</h2>
        </li>
    </ul>
  )


  return (
    <ul className='messages'>
    {msgsArray.map(msgData => (
      <li key={msgData.id} className='message-listing'>
        <img src={msgData.picture} className='mini-user-pic' />
        <div className='sent-msg-container'>
          <h4>{msgData.userName}</h4>
          <span className='sent-msg'>{msgData.message}</span>
        </div>
      </li>
    ))}
  </ul>
  );
};

export default MessagesList;
