import './App.css';
import React from 'react';
import BtnAnswer from './BtnAnswer';

import { useState } from 'react';

function App() {

  const sudoku = [[1, 2, null, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]];
  const [grid, setGrid] = useState(sudoku);

  const [selectedAnswer, setselectedAnswer] = useState(null);

  const [answerGrid, setanswerGrid] = useState(generateAnswerGrid())


  function generateAnswerGrid() {
    let finalArray = [];
    for (let i = 1; i < 10; i++) {
      finalArray.push({
        "number": i,
        "active": false,
      })

    }
    return finalArray
  }

  const clickHandler = (e: any) => {

    let gridCopy = [...answerGrid]
    // If there is no selected answer and they clicked a datachoice, assign it.
    if (selectedAnswer == null && e.target.dataset.choice) {
      console.log(e);
      setselectedAnswer(e.target.dataset.choice)
      gridCopy[e.target.dataset.choice - 1].active = true;
      setanswerGrid(gridCopy);

    }

    //If there is an answer and they select a new data choice, select it.
    if (selectedAnswer && e.target.dataset.choice) {
      setselectedAnswer(e.target.dataset.choice)
    }


    if (selectedAnswer && e.target.dataset.grid) {
      let stateCopy: any;
      stateCopy = [...grid];
      stateCopy[e.target.dataset.grid.slice(0, 1)][e.target.dataset.grid.slice(-1)] = selectedAnswer;
      gridCopy[selectedAnswer - 1].active = false;
      setanswerGrid(gridCopy);
      setGrid(stateCopy);
      setselectedAnswer(null);
      e.target.classList = "gone";

    }
    // let stateCopy: any;
    // stateCopy = [...grid];
    // stateCopy[e.target.dataset.grid.slice(0, 1)][e.target.dataset.grid.slice(-1)] = "10";
    // setGrid(stateCopy);

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
            <td className="text-xl" data-grid={index + "0"}>
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

  interface BtnProps {
    choice: number
  }

  return (
    <section onClick={clickHandler} className="App">
      {grid.map((array, index) => gridHelper(index))}
      <div>
        {answerGrid.map((answer) => <BtnAnswer key={answer.number} choice={answer.number} active={answer.active} />)}
      </div>
    </section>
  );
}

export default App;