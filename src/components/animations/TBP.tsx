// used this as a ref: https://vergenet.net/~conrad/boids/pseudocode.html
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import _, { random } from 'lodash'



type Body = {
  mass: number;
  position: {x: number, y: number};
  velocity: {x: number, y: number};
  path: {x: number, y: number}[];
}

const PI = 3.1415;
const G = 5;
export const TBP = () => {
  const width = window.screen.width * 1.2
  const height = window.screen.height * 1.2
  const canvas = useRef<HTMLCanvasElement>(null);
  const bodies: Body[] = _.range(3).map(b => {return {mass: 1, path: [], position: {x: random(width), y: random(height)}, theta: random(360), velocity: {x: random(-0.1, 0.1, true), y: random(-0.1, 0.1, true)}}})
  const fov = 100

  const draw = () => {
    const ctx = canvas.current?.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, width, height)
      bodies.forEach(b => {
        drawCircle({...b.position, radius: 20, ctx, color: 'blue'})
      })
    }
    requestAnimationFrame(draw)
  }

  const drawCircle = (params: {x: number, y: number, radius: number, ctx: CanvasRenderingContext2D, color: string | CanvasGradient | CanvasPattern}) => {
    const {x, y, radius, ctx, color} = params
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(59, 130, 246, 0.2)";
    ctx.fill();
    ctx.stroke();
  }

  const applyNewton = () => {
    const new_bodies = [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}]
    for(let i = 0; i < bodies.length; i++)
    {
      for(let j = 0; j < bodies.length; j++)
      {
        if(i !== j)
        {
          new_bodies[i].x +=  G * bodies[j].mass * bodies[i].mass * (bodies[j].position.x - bodies[i].position.x)**2;
          new_bodies[i].y +=  G * bodies[j].mass * bodies[i].mass * (bodies[j].position.y - bodies[i].position.y)**2;
        }
      }
    }
    
  }


  useEffect(() => {
    requestAnimationFrame(draw)
  })

  return (
    <>
    <div className="fixed flex flex-row w-screen h-screen -z-10 overflow-clip justify-center items-center">
      <canvas height={height} width={width} ref={canvas} className={twMerge('bg-white')} />
    </div>
    </>
  );
}