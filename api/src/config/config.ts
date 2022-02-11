import * as dotenv from "dotenv";
dotenv.config({ path: '.env' });


export const SUCCESS = Number(process.env.SUCCESS)
export const CREATE = Number(process.env.CREATE)
export const NOT_FOUND = Number(process.env.NOT_FOUND)
export const BAD_REQUEST = Number(process.env.BAD_REQUEST)
export const BODY_OK = process.env.BODY_OK
export const NO_EXISTS_ACCOUNT = Number(process.env.NO_EXISTS_ACCOUNT)

export const API_KEY_STRING = String(process.env.API_KEY_STRING)
export const API_KEY = process.env.API_KEY

