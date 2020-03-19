import React, { useState} from 'react';
import './CreateGroup.css';
import axiosPost from '../../utils/axiosPost';
import { FormHelperText } from '@material-ui/core';
const CreateGroup = ({courseId}) => {
  const [creation,setCreation] = useState(false);
  const [err,setErr] = useState(null);
  const createGroup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    axiosPost('http://localhost:5000/groups/add',{name,description,course:courseId})
    .then(res=>{
      console.log(res);
      setCreation(true)
      console.log(creation);
    })

    .catch(err=>{
      console.log('caught an error!');
      setErr(true);
    })
  };
console.log(`err is ${err}`);
  if(err) 
    return (
      <div className='create-group-container'>
      <span>Oops! an error happen please try a different name!</span>
      <button onClick={()=>setErr(false)} className='send-btn' type='submit' value='Try again'>Try Again!</button>
      </div>
    )
    if(creation){
      return (
        <div className='create-group-container'>
          <span>Group has been created!</span>
      <button onClick={()=>setCreation(false)} className='send-btn' type='submit' value='Close'>Close</button>
        </div>
      )
    }
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
