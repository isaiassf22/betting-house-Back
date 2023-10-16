import { Request, Response } from "express";
import { createGameServ, endGameServ, searchGameServ } from "@/service/games-service";
import { availiableGamesRepo, searchGameRepo } from "@/repository/games-repository";
import httpStatus from "http-status";



async function createGame(req: Request, res: Response) {

    const {homeTeamName,awayTeamName}= req.body


    const newGame= await createGameServ(homeTeamName,awayTeamName)
    
    return res.send(newGame).status(httpStatus.CREATED)
}

async function availableGames(req: Request, res: Response) {
  const games= await availiableGamesRepo()

  return res.send(games).status(httpStatus.FOUND)
}

async function searchGame(req: Request, res: Response) {
    const id = Number(req.params.id)
    console.log(id)
    const search =await searchGameServ(id)
    return res.send(search).status(httpStatus.FOUND)
}

async function endGame(req: Request, res: Response) {
    const id=Number(req.params.id)
    const data=req.body
    const resultGame = await endGameServ(id,data)


    return res.send(resultGame).status(httpStatus.OK)
}

export {createGame,availableGames,searchGame,endGame}