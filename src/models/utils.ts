import { number } from "joi"
import { type } from "os"




export type usertype = {
    id?: number,
    username?: string,
    balance: number
}

export type endGameTyoe = {
    id?: number
    homeTeamScore: number,
    awayTeamScore: number

}

export type betType = {
    homeTeamScore: number,
    awayTeamScore: number,
    amountBet: number,
    gameId: number,
    participantId: number,
    amountWon?: number
}

export type updtBetType = {
    id: number
    status: string,
    amountWon: number,
}

 export type fndUser ={
    data:string | number
 }
