import {API_KEY} from "../config/config";
import Database from "../database";

class TokenService {
    async checkUser(apiKey ,userData) {
        if (apiKey !== API_KEY) {
            return false
        }
        const db = new Database()
        const response= await db.getConnection()
        console.log(response)
        let user = userData //@todo get database

        if (user) {
            //@todo
            return user
        }

    }
}
export default TokenService