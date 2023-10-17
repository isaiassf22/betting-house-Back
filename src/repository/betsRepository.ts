import prisma from "../database/database";
import { betType, updtBetType } from "../models/utils";
import dayjs from "dayjs";
import { updateValueRepo } from "./participantsRepository";
import { error } from "console";

async function createBetRepo(data:betType,newBalance:number) {
    const {participantId}=data
    
    const discount = await updateValueRepo(participantId,newBalance)

    if(discount){
         const create= await prisma.bet.create({
        data:{
            createdAt: dayjs().format(),
            updetedAt:dayjs().format(),
            homeTeamScore: data.homeTeamScore,
            awayTeamScore: data.awayTeamScore,
            amountBet:data.amountBet,
            gameId:data.gameId,
            participantId: data.participantId,
            status:"PENDING",
           
        } 
    })
    return create
    }
   throw new Error ('Bet was not approved. something went wrong!')

    
}

async function searchBet(gameId:number) {
    return await prisma.bet.findFirst({
        where:{
            gameId
        }
    })
}

async function updatingBetRepo(id:number,status:string,amountWon:number) {
    return await prisma.bet.update({
        where: {id},
        data: {
            updetedAt:dayjs().format(),
            amountWon,
            status
        }
    })
    
}


export {createBetRepo,updatingBetRepo,searchBet}

export default {createBetRepo,updatingBetRepo,searchBet}
