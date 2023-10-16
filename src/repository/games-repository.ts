import prisma from "@/database/database";
import { endGameTyoe } from "@/models/utils";
import { updatingBetServ } from "@/service/bets-service";
import dayjs from 'dayjs';

async function createGameRepo(homeTeamName: string, awayTeamName: string) {

    const newGame = await prisma.game.create({
        data: {
            homeTeamName,
            awayTeamName,
            createdAt: dayjs().format(),
            updetedAt: dayjs().format(),
        }
    })
    return newGame
}

async function availiableGamesRepo() {
    return await prisma.game.findMany()
}

async function searchGameRepo(id: number) {
    return await prisma.game.findFirst({
        where: { id }
    })
}

async function endGameRepo(id:number,homeTeamScore:number, awayTeamScore:number) {

    const updt = await prisma.game.update({
        where: {
            id
        }, data: {
            updetedAt: dayjs().format(),
            homeTeamScore,
            awayTeamScore,
            isFinished: true
        }
    })
    await updatingBetServ(id,homeTeamScore,awayTeamScore)

    return updt
}

export { createGameRepo, availiableGamesRepo, searchGameRepo, endGameRepo }