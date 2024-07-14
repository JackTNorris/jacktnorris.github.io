import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export const ConwayBoard = () => {
  const width = window.screen.width * 1.5
  const height = window.screen.height * 1.5
  const gridSize = 20

  const grid: boolean[][] = Array.from(Array((Math.round(width / gridSize))), () => new Array(Math.round(height / gridSize)).fill(false));
  const canvas = useRef<HTMLCanvasElement>(null);

  const resetGrid = () => {
    for (let row = 0; row < grid.length; row++)
    {
        for(let col = 0; col < grid[0].length; col++)
        {
            grid[row][col] = false
        }
    }
  }

  const generateGrid = () => {
    const ctx = canvas.current?.getContext('2d');
    if (ctx) {
      //ctx.strokeStyle = 'black';
      ctx.fillStyle = 'white';
      for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
          ctx.fillRect(row * gridSize, col * gridSize, gridSize, gridSize);
          //ctx.strokeRect(row * gridSize, col * gridSize, gridSize, gridSize);
        }
      }
    }
  }

  const applyConwayRules = () => {
    const originalGrid = []
    for (let i = 0; i < grid.length; i++) {
      originalGrid.push(grid[i].slice(0));
    }

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col <  grid[row].length; col++) {
        if (originalGrid[row][col])
        {
          if (checkUnderPopulation(row, col, originalGrid)) {
            grid[row][col] = false;
          }
          if (checkOverPopulation(row, col, originalGrid)) {
            grid[row][col] = false;
          }
          if (checkWillLive(row, col, originalGrid)) {
            grid[row][col] = true;
          }
        }
        else if(checkComeAlive(row, col, originalGrid)) {
          grid[row][col] = true;
        }
      }
    }
  }

  const getNeighbors = (row: number, col: number, oldGrid: boolean[][]) => {
    const neighbors: boolean[] = [];
    for (let i = row - 1; i < row + 2; i++) {
      for (let j = col - 1; j < col + 2; j++) {
        if (i >= 0 && j >= 0 && i < oldGrid.length && j < oldGrid[i].length)
        {
          if(oldGrid[i][j] && !(i === row && j === col))
          {
            neighbors.push(oldGrid[i][j]);
          }
        }
      }
    }
    return neighbors;
  }

  const checkUnderPopulation = (row: number, col: number, oldGrid: boolean[][]) => {
    return getNeighbors(row, col, oldGrid).length < 2;
  }

  const checkOverPopulation = (row: number, col: number, oldGrid: boolean[][]) => {
    return getNeighbors(row, col, oldGrid).length > 3;
  }

  
  const checkComeAlive = (row: number, col: number, oldGrid: boolean[][]) => {
    return getNeighbors(row, col, oldGrid).length === 3;
  }

  const checkWillLive = (row: number, col: number, oldGrid: boolean[][]) => {
    const numLiveNeighbors = getNeighbors(row, col, oldGrid).length;
    return numLiveNeighbors === 2 || numLiveNeighbors === 3;
  }

  const colorRect = (clickX: number, clickY: number, color: string | CanvasGradient | CanvasPattern, outline?: boolean) => {
    const ctx = canvas.current?.getContext('2d');
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(clickX, clickY, gridSize, gridSize);
    }
  }
  const initBoard = () => {
    resetGrid()
    //have some funkiness here I need to fix
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        grid[row][col] = Math.random() < 0.5;
      }
    }
  }

  useEffect(() => {
    generateGrid();
    initBoard()
    setInterval(initBoard, 10000)
    setInterval(draw, 100);
  })

  const draw = () => {
    generateGrid();
    applyConwayRules();
    for (let row = 0; row <  grid.length; row++) {
      for (let col = 0;  col < grid[row].length; col++) {
        if (grid[row][col]) {
          colorRect(row * gridSize, col * gridSize, "rgba(59, 130, 246, 0.2)");
        }
      }
    }
  }

  return (
    <>
    <div className="fixed flex flex-row justify-center items-center w-screen h-screen -z-10 overflow-clip">
      <canvas height={height} width={width} ref={canvas} className={twMerge('bg-white')} />
    </div>
    </>
  );
}