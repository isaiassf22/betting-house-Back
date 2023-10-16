import { createBetServ } from "@/service/bets-service";
import { Request,Response } from "express";

async function createBet(req:Request, res:Response) {
    const data = req.body
    const create = await createBetServ(data)
    res.send(create).status(201)
}



export {createBet}