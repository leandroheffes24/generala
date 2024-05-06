import styles from './AddPointsContainer.module.css'

interface AddPointsContainerProps {
    game: string | number
    close: () => void
    pointsToAdd: (points: number) => void
}

const AddPointsContainer: React.FC<AddPointsContainerProps> = ({game, close, pointsToAdd}) => {
    const handleCloseAddPointsContainer = () => {
        close()
    }

    const handleAddPoints = (points: number) => {
        pointsToAdd(points)
    }

    const renderAddPointsContainer = () => {
        if(typeof game === 'number'){
            return <div className={styles.addPointsContainer}>
                <button onClick={() => handleAddPoints(game)} className={styles.addPointsButton}>{game}</button>
                <button onClick={() => handleAddPoints(game*2)} className={styles.addPointsButton}>{game*2}</button>
                <button onClick={() => handleAddPoints(game*3)} className={styles.addPointsButton}>{game*3}</button>
                <button onClick={() => handleAddPoints(game*4)} className={styles.addPointsButton}>{game*4}</button>
                <button onClick={() => handleAddPoints(game*5)} className={styles.addPointsButton}>{game*5}</button>
                <button onClick={() => handleAddPoints(0)} className={styles.addPointsButton}>tachar</button>
                <button onClick={handleCloseAddPointsContainer} className={styles.addPointsButton}>cerrar</button>
            </div>
        } else if(game === "escalera") {
            return <div className={styles.addPointsContainer}>
            <button onClick={() => handleAddPoints(20)} className={styles.addPointsButton}>{game} armad@</button>
            <button onClick={() => handleAddPoints(25)} className={styles.addPointsButton}>{game} servid@</button>
            <button onClick={() => handleAddPoints(0)} className={styles.addPointsButton}>tachar</button>
            <button className={styles.addPointsButton} onClick={handleCloseAddPointsContainer}>cerrar</button>
        </div>
        } else if(game === "full") {
            return <div className={styles.addPointsContainer}>
            <button onClick={() => handleAddPoints(30)} className={styles.addPointsButton}>{game} armad@</button>
            <button onClick={() => handleAddPoints(35)} className={styles.addPointsButton}>{game} servid@</button>
            <button onClick={() => handleAddPoints(0)} className={styles.addPointsButton}>tachar</button>
            <button className={styles.addPointsButton} onClick={handleCloseAddPointsContainer}>cerrar</button>
        </div>
        } else if(game === "poker") {
            return <div className={styles.addPointsContainer}>
            <button onClick={() => handleAddPoints(40)} className={styles.addPointsButton}>{game} armad@</button>
            <button onClick={() => handleAddPoints(45)} className={styles.addPointsButton}>{game} servid@</button>
            <button onClick={() => handleAddPoints(0)} className={styles.addPointsButton}>tachar</button>
            <button className={styles.addPointsButton} onClick={handleCloseAddPointsContainer}>cerrar</button>
        </div>
        } else if(game === "generala") {
            return <div className={styles.addPointsContainer}>
            <button onClick={() => handleAddPoints(50)} className={styles.addPointsButton}>{game} armad@</button>
            <button onClick={() => handleAddPoints(55)} className={styles.addPointsButton}>{game} servid@</button>
            <button onClick={() => handleAddPoints(0)} className={styles.addPointsButton}>tachar</button>
            <button className={styles.addPointsButton} onClick={handleCloseAddPointsContainer}>cerrar</button>
        </div>
        } else if(game === "doble") {
            return <div className={styles.addPointsContainer}>
            <button onClick={() => handleAddPoints(100)} className={styles.addPointsButton}>{game} armad@</button>
            <button onClick={() => handleAddPoints(105)} className={styles.addPointsButton}>{game} servid@</button>
            <button onClick={() => handleAddPoints(0)} className={styles.addPointsButton}>tachar</button>
            <button className={styles.addPointsButton} onClick={handleCloseAddPointsContainer}>cerrar</button>
        </div>
        }
    }

    return renderAddPointsContainer()
}

export default AddPointsContainer