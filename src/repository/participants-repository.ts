import prisma from "../database/database";
import { usertype } from "../models/utils";
import dayjs from 'dayjs';

async function createUserRepo(user: usertype) {
    const create = await prisma.participant.create({
        data: {
            username: user.username,
            balance: user.balance,
            createdAt:dayjs().format(),
            updetedAt:dayjs().format()
        }
    })

    return create
}

async function findUser(username: string) {
    const check = await prisma.participant.findFirst({
        where: {
            username
        }

    })




    return check
}

    async function showUsersRepo() {
        return await prisma.participant.findMany()
    }

async function updateValueRepo(id:number,balance:number) {
    const updete = await prisma.participant.update({
        where:{
               id
        },
        data:{
            balance: balance,
            updetedAt:Date.now().toString()
        }
    })

}

export { createUserRepo, findUser,updateValueRepo, showUsersRepo }