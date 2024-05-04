import { useState } from "react"

import './App.css'
import Start from "./components/Start"
import PlayersConfiguration from "./components/PlayersConfiguration"
import Game from "./components/Game"

const App = () => {
    const handlePlay = (value: boolean) => {
        if(value === true){
            setCurrentComponent(<Game/>)
        }
    }

    const handleComponentChange = (value: boolean) => {
        if (value === true) {
            return setCurrentComponent(<PlayersConfiguration changeComponent={handlePlay}/>)
        }
    }

    const [currentComponent, setCurrentComponent] = useState(<Start changeComponent={handleComponentChange}/>)

    return currentComponent
}

export default App