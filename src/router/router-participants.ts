import { createUser, showUsers } from "../controller/participant-controller";
import { Router } from "express";


const participantsRouter= Router()

participantsRouter.get('/participants',showUsers)
participantsRouter.post('/participants',createUser)



export default participantsRouter