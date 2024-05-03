import styles from './CreatePlayers.module.css'
import PlayerItem from './PlayerItem'
import { useState } from 'react'
import { Player } from '../../../types'

const CreatePlayers = ({playersList}) => {
    const [playerInput, setPlayerInput] = useState<string>('')
    const [players, setPlayers] = useState<Player[]>([])

    const handleInputChange = (event) => {        
        setPlayerInput(event.target.value)
    }

    const handleAddPlayer = () => {
        if(players.length === 8){
            return null
        }

        const newPlayer: Player = {
            name: playerInput,
            points: {
                uno: 0,
                dos: 0,
                tres: 0,
                cuatro: 0,
                cinco: 0,
                seis: 0,
                escalera: 0,
                full: 0,
                poker: 0,
                generala: 0,
                doble: 0,
            },
            total: 0,
        }

        const newPlayersArray: Player[] = [...players, newPlayer]
        setPlayers(newPlayersArray)
        playersList(newPlayersArray)
    }

    const handleDeletePlayer = (playerName: string) => {
        const newPlayers = players.filter(player => player.name !== playerName)

        setPlayers(newPlayers)
        playersList(newPlayers)
    }

    const renderPlayers = () => {
        if(players.length <= 0){
            return (
                <p className={styles.addPlayersText}>Comience a agregar jugadores!</p>
            )
        }

        return players.map((player) => (
            <PlayerItem
                key={player.name}
                playerInfo={player}
                deletePlayer={handleDeletePlayer}
            />
        ))
    }

    return (
        <div className={styles.createPlayersContainer}>
            <div className={styles.playersListContainer}>
                {renderPlayers()}
            </div>

            <div className={styles.addPlayersContainer}>
                <p className={styles.addPlayersTitle}>Nombre del nuevo jugador/a</p>

                <input className={styles.playerInput}
                    placeholder='Nombre del jugador/a'
                    onChange={handleInputChange}
                    min={1}
                />

                <button onClick={handleAddPlayer} className={styles.addPlayerButton}>+</button>
            </div>
        </div>
    )
}

export default CreatePlayers