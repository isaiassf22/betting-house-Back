import { Request, Response } from "express";
import { createUserServ, updateValueServ } from "../service/participants-service";
import { usertype } from "../models/utils";
import httpStatus from "http-status";
import { showUsersRepo } from "../repository/participantsRepository";



async function createUser(req: Request, res: Response) {
    const user: usertype = req.body
   const create= await createUserServ(user)
    res.send(create).status(201)
}

async function showUsers(req:Request, res:Response) {
   const result= await showUsersRepo()
   return res.send(result).status(httpStatus.OK)
}

/*async function updateValue(req: Request, res: Response) {
    const update: usertype = req.body
    await updateValueServ(update)

    return res.sendStatus(httpStatus.ACCEPTED)
}*/



export { createUser,showUsers }