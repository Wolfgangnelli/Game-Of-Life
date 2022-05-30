
export const createEmptyGrid = (rows: number, cols: number) => {
    const _rows = []
    for (let i = 0; i < rows; i++) {
      _rows.push(Array.from(Array(cols), () => 0))
    }
    return _rows
}


export const createRandomItems = (setGrid: ([]) => void, rows: number, cols: number) => {
    const _rows = []
    for (let i = 0; i < rows; i++) {
      _rows.push(Array.from(Array(cols), () => Math.random() > 0.6 ? 1 : 0))
    }
    setGrid(_rows)
}
