import './App.css';
import React from 'react';

import { useState } from 'react'

function App() {

  let sudoku = [[0, 0, 0, 0, 0, 0, 0, 0, 0]]

  const [grid, setGrid] = useState(sudoku)


  const drawGrid = () => {
    console.log(grid);
  }


  return (
    <div className="App">
      <p className={"text-3xl font-bold underline"}>
        {/* {drawGrid()} */}
      </p>
    </div>
  );
}

export default App;
