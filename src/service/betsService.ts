
import { betType, endGameTyoe, updtBetType } from "../models/utils";
import { createBetRepo, searchBet, updatingBetRepo } from "../repository/betsRepository";
import { findUser, updateValueRepo } from "../repository/participantsRepository";
import { searchGameServ } from "./gamesService";
import { updateValueServ } from "./participants-service";

async function createBetServ(data: betType) {
    const {participantId,amountBet,gameId}=data
    const user = await findUser(participantId)
    const gameStatus =await searchGameServ(gameId)

    const {balance}=user
    const {isFinished}=gameStatus
    const newBalance = balance - amountBet

    if(newBalance<0) throw new Error ("bet amount bigger than your current balance");
    if(isFinished==true) throw new Error ('the game is over!');


    return await createBetRepo(data,newBalance)
}



async function updatingBetServ(id:number,homeTeamScore:number, awayTeamScore:number) {
    const bet= await searchBet(id)
    
    if(bet){
         const {amountBet,participantId}=bet
    let status = null
    let amountWon=0
    const participant= await findUser(participantId)
    if(homeTeamScore===bet.homeTeamScore && awayTeamScore===bet.awayTeamScore){
        status="WON"
        amountWon=amountBet
        const newBalance = participant.balance+Math.round((amountBet*2)*0.7)
        await updateValueServ(participantId,newBalance)
    }else{
        status="LOST"
        amountWon=-amountBet
    }


    return await updatingBetRepo(bet.id,status,amountWon)
    }
   
}


export { createBetServ, updatingBetServ }
export default { createBetServ, updatingBetServ }