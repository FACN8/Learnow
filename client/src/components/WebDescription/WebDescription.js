import './WebDescription.css';
import React from 'react';
import Link from '@material-ui/core/Link';



const WebDescription = () => (
    <div className='container'>
      <div className='description'>
        <div className='bg-image'></div>
        <div className='content'>
          <h1>Your journey for learning</h1>
          <p>Build new skills with groups of self learners, join a group and be part of the community</p>
        </div>
        <Link href="Register" variant="body2">
                <div className="joinForFree">Join for free</div>
        </Link>
        <div className='description-under-header' >
          <h1>Find a suitable course for the subject you want, join a group and learn together!</h1>
          <div className='speration-line'></div>
        </div>
      </div>
    </div>
);


export default WebDescription;
