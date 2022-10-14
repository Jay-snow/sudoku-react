import './App.css';
import React from 'react';

import { useState } from 'react';

function BtnAnswer(props: any) {

  const getActiveState = () => {
    if (props.active) {
      return 'active'
    } else {
      return ''
    }
  }

  return (

    <p className={getActiveState()} data-choice={props.choice}>
      {props.choice}
    </p>

  );
}

export default BtnAnswer;