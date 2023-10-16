import { endGameTyoe } from "@/models/utils"
import { createGameRepo, endGameRepo, searchGameRepo } from "@/repository/games-repository"





 async function createGameServ(homeTeamName:string,awayTeamName:string) {
    
    const newGame = await createGameRepo(homeTeamName,awayTeamName)

    return newGame
 }

 async function searchGameServ(id:number) {
   const search = await searchGameRepo(id)
   if (!search) throw new Error('Game not found!')
   return search
 } 
async function endGameServ(id:number,data:endGameTyoe) {
   
const {homeTeamScore,awayTeamScore}= data
   return await endGameRepo(id,homeTeamScore,awayTeamScore)
}

 export {createGameServ,searchGameServ,endGameServ}