import './App.css';
import React from 'react';

import { useState } from 'react'

function App() {

  const sudoku = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]];

  const [grid, setGrid] = useState(sudoku);


  const clickHandler = (e: any) => {
    console.log('TEST');
    console.log(e.target.dataset.grid.slice(0, 1));
    let stateCopy = [...grid];
    stateCopy[e.target.dataset.grid.slice(0, 1)][e.target.dataset.grid.slice(-1)] = 10;
    setGrid(stateCopy);

  }

  const gridHelper = (index: number) => {

    let can_break: boolean = false;

    if ((index + 1) % 3 === 0) {
      can_break = true;
    }

    let final_html = []

    final_html.push(
      <table key={"table_" + index}>
        <tbody>
          <tr>
            <td data-grid={index + "0"}>
              {grid[index][0]}
            </td>
            <td data-grid={index + "1"}>
              {grid[index][1]}
            </td>
            <td data-grid={index + "2"}>
              {grid[index][2]}
            </td>
          </tr>
          <tr>
            <td data-grid={index + "3"}>
              {grid[index][3]}
            </td>
            <td data-grid={index + "4"}>
              {grid[index][4]}
            </td>
            <td data-grid={index + "5"}>
              {grid[index][5]}
            </td>
          </tr>
          <tr>
            <td data-grid={index + "6"}>
              {grid[index][6]}
            </td>
            <td data-grid={index + "7"}>
              {grid[index][7]}
            </td>
            <td data-grid={index + "8"}>
              {grid[index][8]}
            </td>
          </tr>
        </tbody>
      </table>

    )
    if (can_break) {
      final_html.push(<div key={"break_" + 1} className="break"></div>)
    }
    can_break = false;

    return final_html
  }


  return (
    <section onClick={clickHandler} className="App">
      {grid.map((array, index) => gridHelper(index))}

    </section>
  );
}

export default App;