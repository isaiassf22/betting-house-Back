import { createBetServ } from "../service/betsService";
import { Request,Response } from "express";

async function createBet(req:Request, res:Response) {
    const data = req.body
    const create = await createBetServ(data)
    res.send(create).status(201)
}



export {createBet}