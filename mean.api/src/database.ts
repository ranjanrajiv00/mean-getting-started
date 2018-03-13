import * as mongoose from 'mongoose';

export class DataAccess{
    static connect(){
        mongoose.connect('mongodb://localhost/mean-api');

        var db=mongoose.connection;
        db.once('open', ()=>{
            console.log('DB Connection Opened');
        })
    }
}