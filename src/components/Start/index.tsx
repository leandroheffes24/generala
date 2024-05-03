import styles from './Start.module.css'

interface StartProps {
    changeComponent: (value: boolean) => void
}

const Start: React.FC<StartProps> = ({changeComponent}) => {
    const handlePlayersConfigurationComponent = () => {
        changeComponent(true)
    }

    return(
        <section className={styles.startSection}>
            <div className={styles.startContainer}>
                <h1 className={styles.title}>ANOTADOR GENERALA</h1>
                <p className={styles.developedByText}>Desarrollado por <a className={styles.developedByLink} href="https://leandroheffesportfolio.vercel.app/">Leandro Heffes</a></p>
            </div>

            <div className={styles.startButtonContainer}>
                <button onClick={handlePlayersConfigurationComponent} className={styles.startButton}>
                    JUGAR
                </button>
            </div>
        </section>
    )
}

export default Start