import { availableGames, createGame, endGame, searchGame } from "../controller/games-controller";
import { Router } from "express";

const gamesRouter= Router()

gamesRouter.get('/games',availableGames)
gamesRouter.post('/games',createGame)
gamesRouter.get('/games/:id',searchGame)
gamesRouter.post('/games/:id/finish',endGame)

export default gamesRouter