import {Response} from "express";
import {NOT_FOUND, SUCCESS} from "../config/config";
// import jwt from "jsonwebtoken";

class BaseController {

    // getDecodeData(authorization: string) {
    //     let decode
    //     if (authorization.toLowerCase().startsWith('bearer')) {
    //         authorization = authorization.slice('bearer'.length).trim();
    //         decode = jwt.decode(authorization)
    //     }
    //     return decode;
    // }


    // responseData(status: boolean, route: string, method: string, api: string, token?: string) {
    //     return {
    //         status: status,
    //         method: method,
    //         route: route,
    //         api: api,
    //         token: token || ''
    //     };
    // }

    protected createResponse(result, res: Response) {
        if (result) {
            return res.status(SUCCESS).json(result)
        }
        return res.status(NOT_FOUND).json(NOT_FOUND)
    }
}

export default BaseController