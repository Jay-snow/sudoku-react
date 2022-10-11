import './App.css';
import React from 'react';

import { useState } from 'react'

function App() {

  const sudoku = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]];

  const [grid, setGrid] = useState(sudoku);

  const gridHelper = (index: number) => {

    let can_break: boolean = false;

    if ((index + 1) % 3 === 0) {
      can_break = true;
    }

    let final_html = []

    final_html.push(
      <table>
        <tbody>
          <tr>
            <td>
              {grid[index][0]}
            </td>
            <td>
              {grid[index][1]}
            </td>
            <td>
              {grid[index][2]}
            </td>
          </tr>
          <tr>
            <td>
              {grid[index][3]}
            </td>
            <td>
              {grid[index][4]}
            </td>
            <td>
              {grid[index][5]}
            </td>
          </tr>
          <tr>
            <td>
              {grid[index][6]}
            </td>
            <td>
              {grid[index][7]}
            </td>
            <td>
              {grid[index][8]}
            </td>
          </tr>
        </tbody>
      </table>

    )
    if (can_break) {
      final_html.push(<div className="break"></div>)
    }
    can_break = false;

    return final_html
  }




  return (
    <section className="App">
      {grid.map((array, index) => gridHelper(index))}

    </section>
  );
}

export default App;