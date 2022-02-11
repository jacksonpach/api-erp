import {API_KEY} from "../config/config";

class TokenService {
    async checkUser(appKey ,userData) {
        if (appKey !== API_KEY) {
            return false
        }

        let user = userData //@todo get database

        if (user) {
            //@todo
            return user
        }

    }
}
export default TokenService