import styles from './AddPointsContainer.module.css'

interface AddPointsContainerProps {
    game: string | number
}

const AddPointsContainer: React.FC<AddPointsContainerProps> = ({game}) => {
    const renderAddPointsContainer = () => {
        if(typeof game === 'number'){
            return <div className={styles.addPointsContainer}>
                <button>{game}</button>
                <button>{game*2}</button>
                <button>{game*3}</button>
                <button>{game*4}</button>
                <button>{game*5}</button>
                <button>tachar</button>
                <button>cerrar</button>
            </div>
        } else {
            return <div>juego</div>
        }
    }

    return renderAddPointsContainer()
}

export default AddPointsContainer