import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeMode,
  changeQuiz,
  selectMode,
  selectQuiz,
} from './modeSlice';

export function Mode() {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      {mode}
      <button onClick={() => dispatch(changeMode('edit'))}>Change Mode to Edit</button>
    </div>
  );
}
