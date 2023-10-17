import dayjs from "dayjs"
import prisma from "../../database/database"
import server from "../../server"
import httpStatus from "http-status"
import supertest from 'supertest'
import request from 'supertest'

 const api = supertest(server)
describe('betting-house aplication',()=>{

    beforeAll(async()=>{
        await prisma.participant.deleteMany({})
    })

    afterEach(async()=>{
        await prisma.participant.deleteMany({})
    })


    it('should be possible to create a a user w/ balance', async ()=>{
        
       /*const response= request(server).post("/participants").send({
            username:"jorge",
            balance: 3000
        })*/
            
        const create = await api.post("/participants").send({
            username:"jorge",
            balance: 3000
        })

         expect(create.status).toBe(200)
         expect(create.body).toEqual({
            id: 13,
          username: 'jorge',
          balance: 3000,
          createdAt: dayjs().format(),
          updetedAt: dayjs().format()
         })
    })
   
    /*it('should be possible to see all participants', async()=>{
        const {status} = await api.get("/participants")

        expect(status).toBe(200)
    })*/


})