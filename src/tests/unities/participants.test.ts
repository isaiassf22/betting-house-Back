import participantsRepository from "../../repository/participantsRepository"
import { createUserRepo } from "../../repository/participantsRepository"
import { createUserServ } from "../../service/participants-service"
import { user } from "../factories/participant-factory"

describe("testing service rules from participants", () => {
    it("should return error creating user w/ balance <1000", async () => {
        
        const create= createUserServ(user)
      await expect(create).rejects.toEqual(new Error("balance is not acceptable"))
    })
})