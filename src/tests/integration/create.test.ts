import server from "../../server"
import httpStatus from "http-status"
import supertest from 'supertest'

 const api = supertest(server)
describe('betting-house aplication',()=>{

    

    it('should be possible to create a a user w/ balance', async ()=>{
        const {status} = await api.post("/participants").send({
            username:"jorge",
            balance: 3000
        })

         expect(status).toBe(200)
    })
   
    it('should be possible to see all participants', async()=>{
        const {status} = await api.get("/participants")

        expect(status).toBe(200)
    })


})