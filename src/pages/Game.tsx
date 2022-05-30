import React, {useState, useCallback, useRef} from 'react';
import { Square, Button, Title } from '../components/atoms/index'
import { Page } from '../components/organisms/index'
import { InstructionList } from '../components/molecules/index'
import { createEmptyGrid } from '../utils/index'
import { createRandomItems } from '../utils/index'
import { rows, cols, operations, items } from '../utils/settings'
import produce from 'immer';

const Game = () => {
  const [start, setStart] = useState(false)

  const [grid, setGrid] = useState(() => {
    return createEmptyGrid(rows, cols)
  })

  const runRef = useRef(start);
  runRef.current = start;

  const runSimulation = useCallback(() => {
    if(!runRef.current) {
      return;
    }

    // aggiorno il valore/stato della griglia
    setGrid(currentGrid => {

      // ritorna una nuova griglia
      return produce(currentGrid, copy => {

        // simulo elementi
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {

            // calcolo il numero di vicini
            let vicini = 0;
            operations.map(([num1, num2]) => {
              const i2 = i + num1;
              const j2 = j +  num2;

              // verifico i limiti
              if (i2 >= 0 && i2 < rows && j2 >= 0 && j2 < cols) {
                vicini += currentGrid[i2][j2]
              }
            });

            // condizioni che determinano la vita di una cella
            vicini < 2 || vicini > 3 ? 
              (copy[i][j] = 0) : 
                (currentGrid[i][j] === 0 && vicini === 3) && 
                  (copy[i][j] = 1)
          }
        }
      })
    })

    setTimeout(runSimulation, 500); // chiamo la fun ogni mezzo secondo
  }, [])

  return (
    <Page>
      <Title label='GAME OF LIFE' path='/' />
      <div className="flex flex-wrap mx-5">
        <div className='grid md:w-3/4' style={{ gridTemplateColumns: `repeat(${cols}, 20px)` }}>
          {grid.map((rows, i) => rows.map((col, idx) => <Square key={`${i}-${idx}`} setGrid={setGrid} grid={grid} i1={i} i2={idx} />))}
        </div>
        <div className='flex flex-wrap items-start justify-center md:w-1/4'>
          <Button label={start ? 'stop' : 'start'} onClick={() => {
            setStart(!start)
            if(!start) {
              runRef.current = true
              runSimulation()
            }
            }} start={start} />
            <Button label='clear' onClick={() => setGrid(createEmptyGrid(rows, cols))} />
            <Button label='random' onClick={() => createRandomItems(setGrid, rows, cols)} />
            <div className='text-white'>
              <p className='text-left font-semibold py-2 text-blue-400'>How to play:</p>
               <InstructionList items={items} />
            </div>
        </div>
      </div>
    </Page>
  )
}

export default Game