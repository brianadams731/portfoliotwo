import { useEffect, useState } from "react";
import styles from "../styles/GlitchedText.module.scss";

interface Props {
    text: string;
}

enum GlitchState {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

const GlitchedText = ({ text }: Props): JSX.Element => {
    const [glitchState, setGlitchState] = useState<GlitchState[]>([GlitchState.CENTER, GlitchState.CENTER, GlitchState.CENTER]);
    useEffect(() => {
        const determineNewState = setInterval(() => {
            const newGlitchState = glitchState.map(() => {
                const rand = Math.random();               
                if (rand < .90) {
                    return GlitchState.CENTER
                } else if (rand < .95) {
                    return GlitchState.LEFT
                } else {                    
                    return GlitchState.RIGHT
                }
            })            
            setGlitchState(newGlitchState);            
        }, 300)

        return () => clearInterval(determineNewState);
        // eslint-disable-next-line
    }, [])
    return (
        <div className={styles.wrapper}>
            <h1 className={`${styles.text} ${styles.one}`} data-glitch={glitchState[0]}>{text}</h1>
            <h1 className={`${styles.text} ${styles.two}`} data-glitch={glitchState[1]}>{text}</h1>
            <h1 className={`${styles.text} ${styles.three}`} data-glitch={glitchState[2]}>{text}</h1>
        </div>
    )
}

export { GlitchedText };