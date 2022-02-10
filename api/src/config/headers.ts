import {KEY_API, KEY_CREDITOR, KEY_TEAM} from "./config";

export const headerAuthHercules = () => {
    return {
        headers: {
            'key-api': KEY_API,
            'key-team': KEY_TEAM,
            'key-creditor': KEY_CREDITOR
        }
    };
}

export const headerApiSms = (token) => {
    return {headers: {"Authorization": "Bearer  " + token}};
}