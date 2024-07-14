import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import _, { random } from 'lodash'
type Boid = {
  x: number;
  y: number;
  theta: number;
}

export const Boids = () => {
  const width = window.screen.width * 3
  const height = window.screen.height * 1.5
  const canvas = useRef<HTMLCanvasElement>(null);
  const numBoids = 100
  const boids: Boid[] = _.range(numBoids).map(boid => {return {x: random(width), y: random(height), theta: random(360)}})

  const initBackground = () => {
    const ctx = canvas.current?.getContext('2d');
    if (ctx) {
      boids.forEach(boid => {
        ctx.fillStyle = 'blue'
        ctx.fillRect(boid.x, boid.y, 10, 10)
      })

    }
  }

  const separation = () => {

  }

  const alignment = () => {

  }

  const cohesion = () => {
    
  }

  useEffect(() => {
    initBackground()
  })

  return (
    <>
    <div className="fixed flex flex-row w-screen h-screen -z-10 overflow-clip">
      <canvas height={height} width={width} ref={canvas} className={twMerge('bg-white')} />
    </div>
    </>
  );
}