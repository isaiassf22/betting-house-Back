import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import participantsRouter from './router/router-participants'
import betsRouter from './router/router-bets'
import gamesRouter from './router/router-games'
import { Router } from 'express'



dotenv.config()
const server = express()
server.use(express.json())
server.use(participantsRouter)
server.use(betsRouter)
server.use(gamesRouter)

const health= Router()
server.use(health.get('/health',(req:Request,res:Response)=>{
    res.send("helth running")    
}))

server.get('/',(req:Request,res:Response)=>{
    res.send("helth running")    
})
const port= 5000
const HOST ='0.0.0.0'
server.listen(port,HOST, ()=>{
    console.log('server running successfuly!')
})

export default server