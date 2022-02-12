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
export const API_PORT = process.env.API_PORT

export const DB_HOST = process.env.DB_HOST
export const DB_DATABASE = process.env.DB_DATABASE as string
export const DB_USER = process.env.DB_USER as string
export const DB_ROOT_PASSWORD = process.env.DB_ROOT_PASSWORD as string
export const DB_PASSWORD = process.env.DB_PASSWORD as string
export const DB_PORT = process.env.DB_PORT
export const DB_DIALECT = process.env.DB_DIALECT