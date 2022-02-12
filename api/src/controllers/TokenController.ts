import {Request, Response} from "express"

import TokenService from "../services/TokenService";
import BaseController from "./BaseController";
import {API_KEY_STRING, BAD_REQUEST, SUCCESS, NOT_FOUND} from "../config/config";

class TokenController extends BaseController {

    async getToken(req: Request, res: Response) {
        const appKey = req.header(API_KEY_STRING)
        const userData = req.body

        try {
            const tokenService = new TokenService()
            const result = await tokenService.checkUser(appKey, userData)
            if (result) {
                this.createResponse(result, res)
                return res.status(SUCCESS).json(userData)
            }
            return res.status(NOT_FOUND).json('NOT_FOUND')
        } catch (e) {
            //    @todo log
            return res.status(BAD_REQUEST).json('BAD_REQUEST')
        }

    }

}

export default TokenController