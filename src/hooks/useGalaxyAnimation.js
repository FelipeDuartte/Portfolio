import { useEffect } from 'react'
import { initGalaxyAnimation } from '../data/galaxyAnimation'

export default function useGalaxyAnimation() {
  useEffect(() => {
    let instance
    const p = initGalaxyAnimation()
    Promise.resolve(p).then((res) => { instance = res })

    return () => {
      if (instance && typeof instance.destroy === 'function') instance.destroy()
    }
  }, [])
}
