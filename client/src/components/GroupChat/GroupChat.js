import React from 'react';
import './GroupChat.css';

import { Link, useHistory } from 'react-router-dom';

function GroupChat() {
  return (
    <div>
        <ul id="messages"></ul>
        <form action="">
        <input id="m" autoComplete="off" /><button>Send</button>
        </form>
      </div>
  );
}

export default GroupChat;
