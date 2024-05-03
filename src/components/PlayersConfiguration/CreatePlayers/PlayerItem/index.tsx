import styles from './PlayerItem.module.css'

const PlayerItem = ({playerInfo, deletePlayer}) => {
    const handleDeletePlayer = () => {
        deletePlayer(playerInfo.name)
    }

    return (
        <div className={styles.playersContainer}>
            <p className={styles.playerName}>{playerInfo.name}</p>

            <button onClick={handleDeletePlayer} className={styles.deletePlayerButton}>
                <i className={`${'fa-solid fa-trash-can'} ${styles.deletePlayerIcon}`}></i>
            </button>
        </div>
    )
}

export default PlayerItem