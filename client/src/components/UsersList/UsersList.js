import React, { useState, useEffect } from 'react';
import axiosGet from '../../utils/axiosGet';
import './UsersList.css';

const UsersList = ({ groupId, socket }) => {

  const [usersArray, setUsersArray] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [update,setUpdate] = useState(false);
  socket.on('update connected users', users => {
    setConnectedUsers(...users);
    setUpdate((update)=>!update);
    console.log(users);
  });

  // const status = userName => {
  //   let classes = 'status';
    
  //   if(connectedUsers){
  //     if (connectedUsers.includes(userName)) classes += ' online';
  //   }

  //   return classes;
  // };

  const getUsers = () => {
    axiosGet(`/users/get/groupid=${groupId}`)
      .then(res => {
        res.data.sort((curr)=>connectedUsers.indexOf(curr))
        setUsersArray(res.data);
      })
      .catch(err => setUsersArray(['Could not fetch users!']));
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (!usersArray.length) return <span>Loading users...</span>;

  return (
    <ul className='users-list'>
      {usersArray.map(user => {
        let status ='status';
        if(connectedUsers.includes(user.user_name))
        status+=' online';
        return (
        <li key={user.user_id} className='user-listing'>
          <img src={user.picture} className='mini-user-pic' />
          <h3 className='user-in-list'>{user.user_name}</h3>
          <div className={status}></div>
        </li>
        )
      })
      
    }
    </ul>
  );
};

export default UsersList;
