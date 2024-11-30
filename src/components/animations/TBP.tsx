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
const G = 6.67408 * Math.pow(10, -11);
export const TBP = () => {
  const width = window.screen.width * 1
  const height = window.screen.height * 1
  const canvas = useRef<HTMLCanvasElement>(null);
  //const bodies: Body[] = _.range(3).map((b, index) => {return {mass: 1, path: [], position: {x: random(200, 1500, true), y: random(height - 1000, height - 200)}, theta: random(360), velocity: {x: random(0, 0, true), y: random(0, 0, true)}}})
  
  const bodies: Body[] = [
    {
      mass: 1,
      position: { x: width / 2 - width / 4 + random(3), y: height / 2 + random(20) }, // Body 1
      velocity: { x: random(-3, 3), y: random(-3, 3) },
      path: []
    },
    {
      mass: 1,
      position: { x: width / 2 + width / 4 + random(3), y: height / 2 + random(20) }, // Body 2
      velocity: { x: random(-3, 3), y: random(-3, 3) },
      path: []
    },
    {
      mass: 1,
      position: { x: width / 2 + random(3), y: height / 2 + random(20) }, // Body 3
      velocity: { x: random(-3, 3), y: random(-3, 3) },
      path: []
    }
  ];
  

  const fov = 100

  const draw = () => {
    const ctx = canvas.current?.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'blue';
      applyNewton(0.01);
      bodies.forEach(b => {
        drawPath(b.path, ctx, 'green');
        drawCircle({...b.position, radius: 20, ctx, color: 'blue'})
      })
    }
    requestAnimationFrame(draw)
  }

  const drawPath = (path: {x: number, y:number}[], ctx: CanvasRenderingContext2D, color: string | CanvasGradient | CanvasPattern) => {
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'
    
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
    ctx.fillStyle = "rgba(182, 209, 252)";
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
    return G * m1 * m2 / (distance + 0.02) // softening factor to prevent "explosion"
  }

  const applyNewton = (timestep: number) => {
    //going to start with just applying force of downward gravity on earth
    /*
    const gravity = 0.3;
    bodies[0].path.push({x: bodies[0].position.x, y: bodies[0].position.y});
    bodies[0].position.x += 3;
    bodies[0].position.y += bodies[0].velocity.y + gravity; 
    bodies[0].velocity.y += gravity
    */
    // now newton's law:
    let temp_vs: Vector2D[] = bodies.map(b => JSON.parse(JSON.stringify(b.velocity)) as Vector2D)
    for(let i = 0; i < bodies.length - 1; i++)
    {
      for(let j = i; j < bodies.length; j++)
      {
        if(i != j)
        {
          const get_f = newton(bodies[i].position, bodies[j].position, bodies[i].mass, bodies[j].mass);
          const get_dvi = get_f / bodies[i].mass;
          const get_dvj = get_f / bodies[j].mass;

          const dvi_vector_dir = getUnitVector(getDiffVector(bodies[i].position, bodies[j].position));
          const dvj_vector_dir = getUnitVector(getDiffVector(bodies[j].position, bodies[i].position));

          temp_vs[i].x -= dvi_vector_dir.x * timestep;
          temp_vs[i].y -= dvi_vector_dir.y * timestep;
          temp_vs[j].x -= dvj_vector_dir.x * timestep;
          temp_vs[j].y -= dvj_vector_dir.y * timestep;
        }
      }
    }
    for(let i = 0; i < temp_vs.length; i++)
    {
      if (bodies[i].position.y >= height - 40 || bodies[i].position.y <= 40)
      {
        if (bodies[i].position.y >= height - 40)
        {
          bodies[i].position.y = height - 45;
        }
        else if (bodies[i].position.y <= 40)
        {
          bodies[i].position.y = 45;
        }
        bodies[i].velocity.y *= -1;
      }
      else if (bodies[i].position.x >= width - 20 || bodies[i].position.x <= 20)
        {
          if (bodies[i].position.x >= width - 20)
          {
            bodies[i].position.x = width - 25;
          }
          else if (bodies[i].position.x <= 20)
          {
            bodies[i].position.x = 25;
          }
          bodies[i].velocity.x *= -1;
        }
      else
      {
        bodies[i].path.push({x: bodies[i].position.x, y: bodies[i].position.y})
        bodies[i].position.x += bodies[i].velocity.x;
        bodies[i].position.y += bodies[i].velocity.y;
        bodies[i].velocity = temp_vs[i];
      }
      
    }

  }


  useEffect(() => {
    requestAnimationFrame(draw)
  })

  return (
    <>
    <div className="fixed flex flex-row w-screen h-screen -z-10 overflow-clip justify-center items-center">
      <canvas height={height} width={width} ref={canvas} className={twMerge('bg-green')} />
    </div>
    </>
  );
}