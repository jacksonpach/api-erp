import { Table, Column, Model, HasMany } from 'sequelize-typescript'

class User extends  Model{
    name: string
    email: string
    password

}