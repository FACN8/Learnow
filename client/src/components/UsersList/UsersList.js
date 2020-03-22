import React, { useState, useEffect } from 'react';
import axiosGet from '../../utils/axiosGet';

const UsersList = ({groupId}) => {

  const [usersArray, setUsersArray] = useState([]);

  const getUsers = () => {
    axiosGet(`/users/get/groupid=${groupId}`)
      .then(res => {
        setUsersArray(res.data);
      })
      .catch(err => setUsersArray(['Could not fetch users!']));
  };

  useEffect(() => {
    getUsers();
  }, []);
if(!usersArray.length) return (<span>Loading users...</span>)
  return (
    <ul className='users-container'>
      {usersArray.map(user => (
        <li className='user-listing'>
          <img src={user.picture} className='mini-user-pic' />
          <h3 className='user-in-list'>{user.user_name}</h3>
        </li>
      ))}
    </ul>
  );
};


export default UsersList;