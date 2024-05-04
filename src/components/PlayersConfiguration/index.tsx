import { useState } from 'react'
import { Player, players } from '../../interfaces/Players'
import styles from './PlayersConfiguration.module.css'

interface PlayersConfigurationProps {
    changeComponent: (value: boolean) => void
}

const PlayersConfiguration: React.FC<PlayersConfigurationProps> = ({changeComponent}) => {
    const [playerName, setPlayerName] = useState('')

    const handlePlayersConfigurationComponent = () => {
        changeComponent(true)
    }

    const handleAddPlayer = () => {
        if(playerName.trim() !== ''){
            const newPlayer: Player = {
                name: playerName,
                points: {
                    uno: undefined,
                    dos: undefined,
                    tres: undefined,
                    cuatro: undefined,
                    cinco: undefined,
                    seis: undefined,
                    escalera: undefined,
                    full: undefined,
                    poker: undefined,
                    generala: undefined,
                    doble: undefined,
                },
                total: undefined
            }

            players.push(newPlayer)
            setPlayerName('')
        }
    }

    const handleDeletePlayer = (playerName: string) => {
        
    }

    const renderPlayers = () => {
        if(players.length <= 0){
            return <p className={styles.noPlayersText}>Agregue hasta 8 jugadores</p>
        } else {
            return <ul className={styles.playerList}>
                {players.map(player => (
                    <li className={styles.playerItem} key={player.name}>
                        <span className={styles.playerNameSpan}>
                            {player.name}
                        </span>

                        <button className={styles.deletePlayerButton} onClick={handleDeletePlayer(player.name)}>
                            <svg viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className={styles.removePlayerIcon}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h16" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /><path d="M10 12l4 4m0 -4l-4 4" /></svg>
                        </button>
                    </li>
                ))}
            </ul>
        }
    }

    return (
        <section className={styles.playersConfigSection}>
            <div className={styles.playersListContainerAndTitle}>
                <h2 className={styles.title}>LISTA DE JUGADORES</h2>

                <div className={styles.playersListContainer}>
                    {renderPlayers()}
                </div>
            </div>

            <div className={styles.addPlayersContainer}>
                <p className={styles.addPlayersParagraph}>Nombre del jugador/a</p>

                <input
                    value={playerName}
                    type="text"
                    placeholder='Nombre'
                    onChange={e => setPlayerName(e.target.value)}
                />

                <button className={styles.addPlayerButton} onClick={handleAddPlayer}>+</button>
            </div>

            <div className={styles.buttonPlayContainer}>
                <button onClick={handlePlayersConfigurationComponent} className={styles.buttonPlay}>COMENZAR</button>
            </div>
        </section>
    )
}

export default PlayersConfiguration