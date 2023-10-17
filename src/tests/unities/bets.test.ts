import betsRepository from "../../repository/betsRepository"
import participantsRepository from "../../repository/participantsRepository"
import dayjs from "dayjs"
import { searchGameRepo } from "../../repository/games-repository"
import gamesService from "../../service/gamesService"
import betsService, { createBetServ } from "../../service/betsService"



describe('it should validate the service betss rules', () => {
    it(' should respond error without a valid gameId',async()=>{
        const bet = {
            homeTeamScore: 2,
            awayTeamScore: 3,
            amountBet: 400,
            gameId: 1,
            participantId: 1
        }
        const create = createBetServ(bet)
        await expect(create).rejects.toEqual(new Error("Game not found!"))
        

    })





   /* it('should validate the bet creation', async () => {
        const bet = {
            homeTeamScore: 2,
            awayTeamScore: 3,
            amountBet: 400,
            gameId: 1,
            participantId: 1
        }

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
    
        const test = await createBetServ(bet)

        expect(test.amountBet).toBe(400)
    
    



    })*/

    



})