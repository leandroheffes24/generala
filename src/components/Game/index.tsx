import styles from './Game.module.css'
import { players } from "../../interfaces/Players"
import { useState } from 'react'
import AddPointsContainer from './AddPointsContainer'

const Game = () => {
    let width: number = 0
    if(players.length === 1){
        width = 48
    } else if(players.length === 2){
        width = 32
    } else if(players.length === 3){
        width = 23
    } else if(players.length === 4){
        width = 18
    } else if(players.length === 5){
        width = 14
    } else if(players.length === 6){
        width = 12
    } else if(players.length === 7){
        width = 10
    } else if(players.length === 8){
        width = 9
    }

    const [showAddPointsContainer, setShowAddPointsContainer] = useState(false)
    const [gameToAddPoints, setGameToAddPoints] = useState<number|string>('')

    const handleAddPoints = (game: string | number): void => {
        setGameToAddPoints(game)
        setShowAddPointsContainer(!showAddPointsContainer)
    }

    const renderPlayersPoints = () => {
        return players.map(player => (
            <div className={styles.juegosContainer} style={{width: `${width}%`}} key={player.id}>
                <div className={styles.juegoContainer}>{player.name}</div>
                <button onClick={() => handleAddPoints(1)} className={styles.juegoContainer}>{player.points.uno === undefined ? '-' : player.points.uno}</button>
                <button onClick={() => handleAddPoints(2)} className={styles.juegoContainer}>{player.points.dos === undefined ? '-' : player.points.dos}</button>
                <button onClick={() => handleAddPoints(3)} className={styles.juegoContainer}>{player.points.tres === undefined ? '-' : player.points.tres}</button>
                <button onClick={() => handleAddPoints(4)} className={styles.juegoContainer}>{player.points.cuatro === undefined ? '-' : player.points.cuatro}</button>
                <button onClick={() => handleAddPoints(5)} className={styles.juegoContainer}>{player.points.cinco === undefined ? '-' : player.points.cinco}</button>
                <button onClick={() => handleAddPoints(6)} className={styles.juegoContainer}>{player.points.seis === undefined ? '-' : player.points.seis}</button>
                <button onClick={() => handleAddPoints('escalera')} className={styles.juegoContainer}>{player.points.escalera === undefined ? '-' : player.points.escalera}</button>
                <button onClick={() => handleAddPoints('full')} className={styles.juegoContainer}>{player.points.full === undefined ? '-' : player.points.full}</button>
                <button onClick={() => handleAddPoints('poker')} className={styles.juegoContainer}>{player.points.poker === undefined ? '-' : player.points.poker}</button>
                <button onClick={() => handleAddPoints('generala')} className={styles.juegoContainer}>{player.points.generala === undefined ? '-' : player.points.generala}</button>
                <button onClick={() => handleAddPoints('doble')} className={styles.juegoContainer}>{player.points.doble === undefined ? '-' : player.points.doble}</button>
                <button className={styles.juegoContainer}>{player.total === undefined ? '-' : player.total}</button>
            </div>
        ))
    }

    return (
        <section className={styles.gameSection}>
            <div className={styles.juegosContainer} style={{width: `${width}%`}}>
                <div className={styles.juegoContainerRef}>-</div>
                <div className={styles.juegoContainerRef}>1</div>
                <div className={styles.juegoContainerRef}>2</div>
                <div className={styles.juegoContainerRef}>3</div>
                <div className={styles.juegoContainerRef}>4</div>
                <div className={styles.juegoContainerRef}>5</div>
                <div className={styles.juegoContainerRef}>6</div>
                <div className={styles.juegoContainerRef}>Escalera</div>
                <div className={styles.juegoContainerRef}>Full</div>
                <div className={styles.juegoContainerRef}>Poker</div>
                <div className={styles.juegoContainerRef}>Generala</div>
                <div className={styles.juegoContainerRef}>Doble</div>
                <div className={styles.juegoContainerRef}>Total</div>
            </div>

            {renderPlayersPoints()}

            {showAddPointsContainer && <AddPointsContainer game={gameToAddPoints}/>}
        </section>
    )
}

export default Game