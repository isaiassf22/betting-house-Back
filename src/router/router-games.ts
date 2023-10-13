import { Router } from "express";

const gamesRouter= Router()

gamesRouter.get('/games')
gamesRouter.post('/games')
gamesRouter.post('/games/:id')
gamesRouter.post('/games/:id//finish')

export default gamesRouter