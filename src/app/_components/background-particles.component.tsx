import { Box } from "@mui/material";
import { useCallback, useRef } from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function BackgroundParticles() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const ref = useRef(null);

    return (
        <Box ref={ref}
            position="absolute"
            width="100%"
            height="100vh"
            zIndex={-1}
            top={0}
            left={0}>
            <Particles init={particlesInit}
                container={ref}
                height="1600px"
                options={{
                    fullScreen: {
                        enable: false
                    },
                    fpsLimit: 120,         
                    particles: {
                        color: {
                            value: "#fff",
                        },
                        links: {
                            distance: 200,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 20,
                        },
                        opacity: {
                            value: 0.1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }} />
        </Box>
    )
}