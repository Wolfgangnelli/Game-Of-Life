import React from 'react'
import produce from 'immer'

interface Props {
    i1: number
    i2: number
    grid: number[][]
    setGrid: React.Dispatch<React.SetStateAction<number[][]>>
}

const Square = (props: Props) => {
    const {i1, i2, grid, setGrid = () => null} = props

  return (
    <div 
    onClick={() => {
        const newGrid = produce(grid, copy => {
            copy[i1][i2] = copy[i1][i2] ? 0 : 1;
        });
        setGrid(newGrid);
    }} 
    className={grid[i1][i2] ? "w-5 h-5 border border-black bg-green-500" : "w-5 h-5 border border-black bg-white"}>
    </div>
  )
}

export default Square