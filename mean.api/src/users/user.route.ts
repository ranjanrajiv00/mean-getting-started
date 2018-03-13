import * as express from 'express';
import { UserController } from './user.controller';
const router = express.Router();

export class UserRoute{
    controller:UserController;
    constructor(){
        this.controller= new UserController();
    }
    get route(){
        router.get('/', this.controller.getUsers);
        router.post('/', this.controller.createUsers);

        return router;
    }
}