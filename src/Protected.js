import React from 'react';
import {Navigate} from 'react-router-dom'

function Protected (props) {
  let Cmp = props.Cmp

  if(!localStorage.getItem('user-info')) {
    return <Navigate to="/sign-in" replace />;
  }

  else{
    return <Cmp />;
  }

}

export default Protected;
