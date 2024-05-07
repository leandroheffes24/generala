import { Id } from "../types/Types"

export interface Player {
    id: Id
    name: string
    points: {
        [key: string]: number | undefined
        uno: number | undefined
        dos: number | undefined
        tres: number | undefined
        cuatro: number | undefined
        cinco: number | undefined
        seis: number | undefined
        escalera: number | undefined
        full: number | undefined
        poker: number | undefined
        generala: number | undefined
        doble: number | undefined
    }
    total: number
}

export const players: Player[] = [];