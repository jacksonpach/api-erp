import {Router} from "express";
import TokenController from "./src/controllers/TokenController";

export const router = Router()

router.post('/', (req, res) => res.send('Is alive'))

router.post('/login', async (request, response) => {
    const token = new TokenController()
    await token.createUser(request, response)

    }
)

router.post('/create', async (request, response) => {
        const token = new TokenController()
        await token.createUser(request, response)

    }
)

router.put('/update', async (request, response) => {
        // const account = new Account()
        // await account.getBalance(request, response)
    }
)

router.delete('/delete', async (request, response) => {
        // const account = new Account()
        // return await account.getEvent(request, response)
    }
)
