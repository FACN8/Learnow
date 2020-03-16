import React from 'react';
import get from '../../utils/axiosGet';

function GroupChat(){
    const URL = `http://localhost:5000/GroupChat`;
    get(URL)
        .then(res => {
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);
        });
}

export default GroupChat;