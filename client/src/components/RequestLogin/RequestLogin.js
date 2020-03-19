import React, { useState } from 'react';
import './RequestLogin.css';
import { useAuth0 } from '../../react-auth0-spa';

const RequestLogin = ({setErr}) =>{
const {loginWithPopup,isAuthenticated,loading} = useAuth0();
if(loading) return <span>Logging in ..</span>
if(isAuthenticated) setErr((err)=>err=false)
  return (
    <div>
    <span>This action requires you to be logged in!</span>
    <button onClick={()=>loginWithPopup({})}>Click here to login</button>
    </div>
  )


}

export default RequestLogin;