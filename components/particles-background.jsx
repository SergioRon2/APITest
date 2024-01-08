import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particlesConfig from "./config/particles-config"
 


const ParticlesBackground = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, [])

  return (
    <Particles
      particlesLoaded = 'particlesLoaded'
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    >
    </Particles>
  )

  
} 

export default ParticlesBackground