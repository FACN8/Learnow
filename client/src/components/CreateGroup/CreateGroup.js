import React, { useRef } from 'react';
import './CreateGroup.css';

const CreateGroup = ({courseId}) => {
  const createGroup = (e) => {
    e.preventDefault();
  };
  console.log(courseId);
  return (
    <div className='create-group-container'>
      <form onSubmit={createGroup}>
      <span>Group name</span>
        <label htmlFor='name'>
          <input type='text' name='name' autoComplete='off' />
        </label>
      <span>Group description</span>
        <label htmlFor='description'>
          <input type='text' name='description' autoComplete='off' />
        </label>
        <button type='submit' value='Send'>
          Create group!
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
