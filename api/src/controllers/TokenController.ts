import {Request, Response} from "express"
import TokenService from "../services/TokenService";
import BaseController from "./BaseController";
import {APP_KEY_STRING} from "../config/config";

class TokenController extends BaseController {

    async getToken(req: Request, res: Response) {
        const appKey = req.header(APP_KEY_STRING)
        const userData = req.body

        try {
            const tokenService = new TokenService()
            const result = await tokenService.checkUser(appKey, userData)
            this.createResponse(result, res)
        } catch (e) {
            //    @todo log
            this.createResponse(e, res)
        }
    }

}

export default TokenController