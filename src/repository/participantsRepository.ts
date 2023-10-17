import prisma from "../database/database";
import { fndUser, usertype } from "../models/utils";
import dayjs from 'dayjs';

async function createUserRepo(user: usertype) {
    const create = await prisma.participant.create({
        data: {
            username: user.username,
            balance: user.balance,
            createdAt: dayjs().format(),
            updetedAt: dayjs().format()
        }
    })

    return create
}

async function findUser(data: (string | number)) {
    console.log(typeof data)
    if (typeof data === "string") {
        const checkName = await prisma.participant.findFirst({
            where: {
                username: data
            }

        })
        return checkName
    } else {
        const checkId = await prisma.participant.findFirst({
            where: {
                id: data
            }

        })
        return checkId
    }





}

async function showUsersRepo() {
    return await prisma.participant.findMany()
}

async function updateValueRepo(id: number, newBalance: number) {
    const update = await prisma.participant.update({
        where: {
            id
        },
        data: {
            balance: newBalance,
            updetedAt: dayjs().format()
        }
    })

    return update
}

export { createUserRepo, findUser, updateValueRepo, showUsersRepo }
export default{createUserRepo, findUser, updateValueRepo, showUsersRepo }