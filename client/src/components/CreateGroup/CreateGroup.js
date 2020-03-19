import React, { useRef } from 'react';
import './CreateGroup.css';

const CreateGroup = ({courseId}) => {
  const createGroup = (e) => {
    e.preventDefault();
  };
  return (
    <div className='create-group-container'>
      <form className='info-form' onSubmit={createGroup}>
      <span>Group name</span>
        <label htmlFor='name'>
          <input type='text' name='name' autoComplete='off' />
        </label>
      <span>Group description</span>
        <label htmlFor='description'>
          <input type='text' name='description' autoComplete='off' />
        </label>
        <button className='send-btn' type='submit' value='Send'>
          Create group!
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
