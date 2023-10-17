import { createBet } from "../controller/bets-controller";
import { Router } from "express";

const betsRouter=Router()

betsRouter.post('/bets',createBet)
betsRouter.get('/bets/:id',)

export default betsRouter