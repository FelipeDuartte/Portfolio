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

  return (
  <canvas
    id="galaxyCanvas"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
    }}
  />
)
}
