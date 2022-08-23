import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from 'react'

const ParticlesComponent = () => {
    
    const options = useMemo(() => {
        return {
            
            
            fullScreen:{
                enable: true,
                zIndex: -2,
            },
            interactivity:{
                events:{
                    onClick:{
                        enable: true,
                        mode:"",
                    },
                    onHover:{
                        enable: true,
                        mode:"grab",
                    }
                }
            },
            particles: {
                links: {
                    enable: false,
                },
                move: {
                    enable: true,
                    
                },
                size: {
                    value: { min: 1, max: 3 }
                },
                opacity: {
                    value: { min: 1, max: 0}
                }
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        loadFull(engine);
    }, [])

    return <Particles init={particlesInit} options={options} />
}

export default ParticlesComponent