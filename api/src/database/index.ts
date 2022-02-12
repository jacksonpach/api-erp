import  {Sequelize} from 'sequelize';

import {DB_DATABASE, DB_PASSWORD, DB_USER} from "../config/config";

class Database {
    private connection: Sequelize;

    constructor() {
        this.init();
    }

    getConnection(): Sequelize {
        return this.connection;
    }

    init(): void {
        this.connection = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD);
    }


}

export default Database
