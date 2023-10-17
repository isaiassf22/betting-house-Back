import betsRepository from "@/repository/betsRepository"
import betsService, { createBetServ } from "../../service/betsService"
import participantsRepository from "@/repository/participantsRepository"
import dayjs from "dayjs"
import { searchGameRepo } from "@/repository/games-repository"
import gamesService from "@/service/gamesService"



describe('it should validate the service betss rules', () => {
    it('should validate the bet creation', async () => {
        const bet = {
            homeTeamScore: 2,
            awayTeamScore: 3,
            amountBet: 400,
            gameId: 1,
            participantId: 1
        }
    })

    jest.spyOn(participantsRepository, "findUser").mockImplementation((): any => {
        return {
            id: 1,
            createdAt: dayjs().format(),
            updatedAt: dayjs().format(),
            name: "naruto",
            balance: 3000
        }
    })

    jest.spyOn(gamesService,"searchGameServ").mockImplementation((): any => {
        return {
            id: 1,
            createdAt: dayjs().format(),
            updatedAt: dayjs().format(),
            homeTeamName: "Vasco",
            awayTeamName: "Palmeiras",
            homeTeamScore: 0, // inicialmente 0
            awayTeamScore: 0 ,// inicialmente 0
            isFinished: false  // inicialmente false
        }
    })



})