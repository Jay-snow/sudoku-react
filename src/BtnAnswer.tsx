import './App.css';
import React from 'react';

import { useState } from 'react';

function BtnAnswer(props: any) {

  const getActiveState = () => {
    if (props.active) {
      return 'active answer'
    } else {
      return 'answer'
    }
  }

  return (

    <span className={getActiveState()} data-choice={props.choice}>
      {props.choice}
    </span>

  );
}

export default BtnAnswer;