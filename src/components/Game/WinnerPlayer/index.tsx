import styles from './WinnerPlayer.module.css'
import { players } from '../../../interfaces/Players'

interface WinnerPlayerProps {
    player: number
    restartGame: () => void
}

const WinnerPlayer: React.FC<WinnerPlayerProps> = ({player, restartGame}) => {
    const handleRestartGame = () => {
        restartGame()
    }

    return (
        <div className={styles.winnerPlayerContainer}>
            <p className={styles.title}>¡¡¡{players[player].name} se durmiooo!!!</p>
            <button onClick={handleRestartGame} className={styles.restartButton}>Reiniciar partida</button>
        </div>
    )
}

export default WinnerPlayer