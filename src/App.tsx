import './App.css';
import React from 'react';

import { useState } from 'react'

function App() {

  const sudoku = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]];

  const [grid, setGrid] = useState(sudoku);


  const drawGrid = () => {
    let final_html: any = [];
    let can_break: boolean = false;
    //Begin looping over the sudoku array
    for (let i = 1; i < grid.length + 1; i++) {
      //We need to break every 3 rows to form our sudoku square..
      if (i % 3 === 0) {
        can_break = true;
      } else {
        can_break = false;
      }
      //Build the JSX/HTML
      final_html.push(
        <div key={"grid_" + i} className="grid-1">
          <div className="first-row">
            <span className="cell">
              <span className="text">{grid[i - 1][0]}</span>
            </span>
            <span className="cell">
              <span className="text">{grid[i - 1][1]}</span>
            </span>
            <span className="cell">
              <span className="text">{grid[i - 1][2]} </span>
            </span>
          </div>
          <div className="second-row">
            <span className="cell">
              <span className="text">{grid[i - 1][3]}</span>
            </span>
            <span className="cell">
              <span className="text">{grid[i - 1][4]}</span>
            </span>
            <span className="cell">
              <span className="text">{grid[i - 1][5]}</span>
            </span>
          </div>
          <div className="third-row">
            <span className="cell">
              <span className="text">{grid[i - 1][6]}</span>
            </span>
            <span className="cell">
              <span className="text">{grid[i - 1][7]}</span>
            </span>
            <span className="cell">
              <span className="text">{grid[i - 1][8]}</span>
            </span>
          </div>
        </div>
      )

      //IF we can break, break.
      if (can_break) {
        final_html.push(<div key={"break_" + i} className="break"></div>)
      }
      //Always reset.
      can_break = false;
    }
    return final_html;
  }

  return (
    <section className="App">
      {/* <span className="grid-1">
        <div className="first-row">
          <span>
            {grid[0][0]}
          </span>
          <span>
            {grid[0][1]}
          </span>
          <span>
            {grid[0][2]}
          </span>
        </div>
        <div className="second-row">
          <span>
            {grid[0][3]}
          </span>
          <span>
            {grid[0][4]}
          </span>
          <span>
            {grid[0][5]}
          </span>
        </div>
        <div className="third-row">
          <span>
            {grid[0][6]}
          </span>
          <span>
            {grid[0][7]}
          </span>
          <span>
            {grid[0][8]}
          </span>
        </div>

      </span> */}
      {/* <span className="grid-1">
        <div className="first-row">
          <span>
            1
          </span>
          <span>
            2
          </span>
          <span>
            3
          </span>
        </div>
        <div className="second-row">
          <span>
            4
          </span>
          <span>
            5
          </span>
          <span>
            6
          </span>
        </div>
        <div className="third-row">
          <span>
            7
          </span>
          <span>
            8
          </span>
          <span>
            9
          </span>
        </div>

      </span> */}

      {drawGrid()}


      <p className={"text-3xl font-bold underline"}>

      </p>
    </section>
  );
}

export default App;