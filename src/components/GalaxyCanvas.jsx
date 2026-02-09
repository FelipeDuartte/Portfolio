import React, { useEffect } from 'react'
import { initGalaxyAnimation } from '../data/galaxyAnimation'

export default function GalaxyCanvas() {
  useEffect(() => {
    const instancePromise = initGalaxyAnimation()
    // initGalaxyAnimation returns an object with destroy when ready
    let instance
    Promise.resolve(instancePromise).then((res) => {
      instance = res
    })

    return () => {
      if (instance && typeof instance.destroy === 'function') instance.destroy()
    }
  }, [])

  return <canvas id="galaxyCanvas"></canvas>
}
