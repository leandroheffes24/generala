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
    const [gameName, setGameName] = useState<string>('')
    const [playerToChangePoints, setPlayerToChangePoints] = useState<number>(100)

    const handleAddPoints = (game: number | string, juegoName: string, playerPosition: number): void => {
        setPlayerToChangePoints(playerPosition)
        setGameName(juegoName)
        setGameToAddPoints(game)
        setShowAddPointsContainer(!showAddPointsContainer)
    }

    const renderPlayersPoints = () => {
        return players.map((player, i) => (
            <div className={styles.juegosContainer} style={{width: `${width}%`}} key={player.id}>
                <div className={styles.juegoContainer}>{player.name}</div>
                <button onClick={() => handleAddPoints(1, 'uno', i)} className={styles.juegoContainer}>{player.points.uno === undefined ? '-' : player.points.uno}</button>
                <button onClick={() => handleAddPoints(2, 'dos', i)} className={styles.juegoContainer}>{player.points.dos === undefined ? '-' : player.points.dos}</button>
                <button onClick={() => handleAddPoints(3, 'tres', i)} className={styles.juegoContainer}>{player.points.tres === undefined ? '-' : player.points.tres}</button>
                <button onClick={() => handleAddPoints(4, 'cuatro', i)} className={styles.juegoContainer}>{player.points.cuatro === undefined ? '-' : player.points.cuatro}</button>
                <button onClick={() => handleAddPoints(5, 'cinco', i)} className={styles.juegoContainer}>{player.points.cinco === undefined ? '-' : player.points.cinco}</button>
                <button onClick={() => handleAddPoints(6, 'seis', i)} className={styles.juegoContainer}>{player.points.seis === undefined ? '-' : player.points.seis}</button>
                <button onClick={() => handleAddPoints('escalera', 'escalera', i)} className={styles.juegoContainer}>{player.points.escalera === undefined ? '-' : player.points.escalera}</button>
                <button onClick={() => handleAddPoints('full', 'full', i)} className={styles.juegoContainer}>{player.points.full === undefined ? '-' : player.points.full}</button>
                <button onClick={() => handleAddPoints('poker', 'poker', i)} className={styles.juegoContainer}>{player.points.poker === undefined ? '-' : player.points.poker}</button>
                <button onClick={() => handleAddPoints('generala', 'generala', i)} className={styles.juegoContainer}>{player.points.generala === undefined ? '-' : player.points.generala}</button>
                <button onClick={() => handleAddPoints('doble', 'doble', i)} className={styles.juegoContainer}>{player.points.doble === undefined ? '-' : player.points.doble}</button>
                <button className={styles.juegoContainer}>{player.total}</button>
            </div>
        ))
    }

    const closeAddPointsContainer = () => {
        setShowAddPointsContainer(false)
    }

    const addPoints = (points: number) => {
        const game = players[playerToChangePoints].points[gameName]
        if(typeof game !== "undefined"){
            players[playerToChangePoints].total -= players[playerToChangePoints].points[gameName]
            players[playerToChangePoints].points[gameName] = points
            players[playerToChangePoints].total += points
            setShowAddPointsContainer(false)

        } else {
            players[playerToChangePoints].points[gameName] = points
            players[playerToChangePoints].total += points
            setShowAddPointsContainer(false)
        }
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

            {showAddPointsContainer && <AddPointsContainer game={gameToAddPoints} close={closeAddPointsContainer} pointsToAdd={addPoints}/>}
        </section>
    )
}

export default Game