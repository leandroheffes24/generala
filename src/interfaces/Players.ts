export interface Player {
    name: string
    points: {
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
    total: number | undefined
}

export const players: Player[] = [];