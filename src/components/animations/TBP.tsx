// used this as a ref: https://vergenet.net/~conrad/boids/pseudocode.html
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import _, { random } from 'lodash'



type Vector2D = {
  x: number;
  y: number;
}
type Body = {
  mass: number;
  position: Vector2D;
  velocity: Vector2D;
  path: {x: number, y: number}[];
}


const PI = 3.1415;
const G = 5;
export const TBP = () => {
  const width = window.screen.width * 1
  const height = window.screen.height * 1
  const canvas = useRef<HTMLCanvasElement>(null);
  const bodies: Body[] = _.range(1).map(b => {return {mass: 1, path: [], position: {x: 1000, y: height - 600}, theta: random(360), velocity: {x: random(-0.1, 0.1, true), y: -10}}})
  const fov = 100

  const draw = () => {
    const ctx = canvas.current?.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'blue';
      applyNewton();
      drawPath(bodies[0].path, ctx, 'green');
      bodies.forEach(b => {
        drawCircle({...b.position, radius: 20, ctx, color: 'blue'})
      })
    }
    requestAnimationFrame(draw)
  }

  const drawPath = (path: {x: number, y:number}[], ctx: CanvasRenderingContext2D, color: string | CanvasGradient | CanvasPattern) => {
    ctx.strokeStyle = 'green'
    for(let i = 0; i < path.length; i++)
    {
      if (i == 0)
      {
        ctx.moveTo(path[i].x, path[i].y)
      }
      else 
      {
        ctx.lineTo(path[i].x, path[i].y);
        ctx.moveTo(path[i].x, path[i].y)
      }
    }
    ctx.stroke();
  }
  
  const drawCircle = (params: {x: number, y: number, radius: number, ctx: CanvasRenderingContext2D, color: string | CanvasGradient | CanvasPattern}) => {
    const {x, y, radius, ctx, color} = params
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(59, 130, 246, 0.2)";
    ctx.fill();
  }

  const getUnitVector = (v: Vector2D): Vector2D => {
    const mag = Math.sqrt(v.x**2 + v.y**2)
    return {x: v.x/mag, y: v.y/mag}
  }

  const getDiffVector = (v1: Vector2D, v2: Vector2D): Vector2D => {
    return {x: v1.x - v2.x, y: v1.y - v2.y}
  }

  const newton = (pos1: Vector2D, pos2: Vector2D, m1: number, m2: number) => {
    const distance = (pos1.x - pos2.x)**2 + (pos1.y - pos2.y)**2
    return G * m1 * m2 / (distance)
  }

  const applyNewton = () => {
    //going to start with just applying force of downward gravity on earth
    if (bodies[0].position.y >= height - 300)
    {
      return;
    }
    const gravity = 0.3;
    bodies[0].path.push({x: bodies[0].position.x, y: bodies[0].position.y});
    bodies[0].position.x += 3;
    bodies[0].position.y += bodies[0].velocity.y + gravity; 
    bodies[0].velocity.y += gravity
    
    // now newton's law:
    let temp_vs: Vector2D[] = bodies.map(b => JSON.parse(JSON.stringify(b.velocity)) as Vector2D)
    for(let i = 0; i < bodies.length - 1; i++)
    {
      for(let j = 0; j < bodies.length; j++)
      {
        if(i != j)
        {
          const get_f = newton(bodies[i].position, bodies[j].position, bodies[i].mass, bodies[j].mass);
          const get_a = get_f / bodies[i].mass;
          const diff_vec = getDiffVector(bodies[i].position, bodies[j].position);
          const unit_vec = getUnitVector(diff_vec);
          const adder =  {x: unit_vec.x * get_a, y: unit_vec.y * get_a}
          temp_vs[i].x += adder.x;
          temp_vs[i].y += adder.y;
          temp_vs[j].x += adder.x;
          temp_vs[0].y += adder.y;
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
      <canvas height={height} width={width} ref={canvas} className={twMerge('bg-green border border-green-600')} />
    </div>
    </>
  );
}