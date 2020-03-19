import React, { useRef } from 'react';
import './CreateGroup.css';

const CreateGroup = ({courseId}) => {
  const createGroup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    // A post request will be added here, once merged with the frontend-to-db branch
  };
  return (
    <div className='create-group-container'>
      <form className='info-form' onSubmit={createGroup}>
      <span>Group name</span>
        <label htmlFor='name'>
          <input type='text' name='name' autoComplete='off' required/>
        </label>
      <span>Group description</span>
        <label htmlFor='description'>
          <input type='text' name='description' autoComplete='off' required/>
        </label>
        <button className='send-btn' type='submit' value='Send'>
          Create group!
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
