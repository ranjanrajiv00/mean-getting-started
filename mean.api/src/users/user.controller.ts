import * as express from 'express';
import { User, UserModel } from './user.schema';
export class UserController {
    getUsers(req: express.Request, res: express.Response) {
        User.find({}, (err, users: UserModel[]) => {
            res.status(200).send(users);
        });
    }

    createUsers(req: express.Request, res: express.Response) {
        var user: UserModel = req.body;

        User.create(user, (err, user: UserModel) => {
            res.status(200).send(user);
        });
    }
}