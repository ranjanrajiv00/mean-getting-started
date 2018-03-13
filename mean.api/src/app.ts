import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import { DataAccess } from './database';
import {UserRoute } from './users/user.route';
class App {
    express: express.Application;

    constructor() {
        this.express = express();

        //middleware
        this.express.use(bodyparser.json());
        this.express.use(cors());
        this.express.use('/users', new UserRoute().route);
        DataAccess.connect();
    }
}

export default new App().express;