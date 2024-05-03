import { useState } from "react"
// import { Player } from "./types"

import './App.css'
import Start from "./components/Start"
import PlayersConfiguration from "./components/PlayersConfiguration"
// import Game from "./components/Game"

const App = () => {
    // const handlePlay = (value: boolean, players: Player[]) => {
    //     if(value === true){
    //         setCurrentComponent(<Game playersList={players}/>)
    //     }
    // }

    const handleComponentChange = (value: boolean) => {
        if (value === true) {
            // return setCurrentComponent(<PlayersConfiguration changeComponent={handlePlay}/>)
            return setCurrentComponent(<PlayersConfiguration/>)
        }
    }

    const [currentComponent, setCurrentComponent] = useState(<Start changeComponent={handleComponentChange}/>)

    return currentComponent
}

export default App