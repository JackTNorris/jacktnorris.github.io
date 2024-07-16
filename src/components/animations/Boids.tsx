// used this as a ref: https://vergenet.net/~conrad/boids/pseudocode.html
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import _, { random } from 'lodash'
import { average } from "firebase/firestore";

type Boid = {
  position: {x: number, y: number};
  velocity: {x: number, y: number};
  theta: number;
}

export const Boids = () => {
  const width = window.screen.width * 1.2
  const height = window.screen.height * 1.2
  const canvas = useRef<HTMLCanvasElement>(null);
  const numBoids = 200
  const boids: Boid[] = _.range(numBoids).map(boid => {return {position: {x: random(width), y: random(height)}, theta: random(360), velocity: {x: random(-0.1, 0.1, true), y: random(-0.1, 0.1, true)}}})
  const fov = 100

  const draw = () => {
    const ctx = canvas.current?.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, width, height)
      boids.forEach(boid => {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.4)'
        ctx.fillRect(boid.position.x, boid.position.y, 5, 5)
      })
    }
    updateBoids()
    requestAnimationFrame(draw)
  }


  const calcDistance = (boid1: Boid, boid2: Boid) => {
    return Math.sqrt((boid1.position.x - boid2.position.x)**2 + (boid1.position.y - boid2.position.y)**2)
  }

  const getNearbyBoids = (boid: Boid, fov: number) => {
    const nearbyBoids: Boid[] = []
    boids.forEach(b => {
      if (b !== boid)
      {
        if (calcDistance(boid, b) < fov)
        {
          nearbyBoids.push(b)
        }
      }
    })
    return nearbyBoids
  }

  const separation = (boid: Boid) => {
    const vectorOperation = {x: 0, y: 0}
    boids.forEach(b => {
      if (b !== boid)
      {
        if (calcDistance(b, boid) < 50)
        {
          vectorOperation.x -= b.position.x - boid.position.x
          vectorOperation.y -= b.position.y - boid.position.y
        }
      }
    })
    vectorOperation.x /= 500
    vectorOperation.y /= 500
    return vectorOperation
  }

  const alignment = (boid: Boid) => {
    const vectorOperation = {x: 0, y: 0}
    boids.forEach(b => {
      if (b !== boid)
      {
        vectorOperation.x += b.velocity.x
        vectorOperation.y += b.velocity.y
      }
    })
    vectorOperation.x /= boids.length - 1
    vectorOperation.y /= boids.length - 1
    vectorOperation.x = (vectorOperation.x - boid.velocity.x) / 300
    vectorOperation.y = (vectorOperation.y - boid.velocity.y) / 300
    return vectorOperation
  }

  const cohesion = (boid: Boid) => {
    const averagePos = {x: 0, y: 0}
    boids.forEach(b => {
      if (b !== boid)
      {
        averagePos.x += b.position.x
        averagePos.y += b.position.y
      }
    })
    averagePos.x = averagePos.x / (boids.length - 1)
    averagePos.y = averagePos.y / (boids.length - 1)
    return {x: (averagePos.x - boid.position.x) / 10000, y: (averagePos.y - boid.position.y) / 10000}

  }

  const updateBoids = () => {
    boids.forEach(boid => {
      const rule1 = cohesion(boid)
      const rule2 = alignment(boid)
      let rule3 = separation(boid)
      const bVelocity = {x:( boid.velocity.x +  rule1.x + rule2.x + rule3.x), y: (boid.velocity.y + rule1.y + rule2.y + rule3.y)}
      boid.velocity = bVelocity
      if (boid.position.x + boid.velocity.x > width || boid.position.x + boid.velocity.x < 0)
      {
        boid.velocity.x *= -0.5
      }
      if (boid.position.y + boid.velocity.y > height || boid.position.y + boid.velocity.y < 0)
        {
          boid.velocity.y *= -0.5
        }
      boid.position = {x: boid.position.x + boid.velocity.x, y: boid.position.y + boid.velocity.y}
    })
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