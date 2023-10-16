import httpStatus from "http-status"
import { usertype } from "../models/utils"
import { createUserRepo, findUser, updateValueRepo,  } from "../repository/participants-repository"

async function createUserServ(user:usertype){

    const {username,balance}=user
    if(balance<1000) throw httpStatus.NOT_ACCEPTABLE
   const userExists= await findUser(username)
   if(userExists) throw httpStatus.CONFLICT

  return await createUserRepo(user)
}


async function updateValueServ(id:number,newBalance:number) {

    const userExists =await findUser(id)
    if(userExists){
        await updateValueRepo(userExists.id,newBalance)
    }
}

export {createUserServ,updateValueServ}