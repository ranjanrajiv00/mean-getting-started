import { Document, Schema, model } from 'mongoose';

export interface UserModel extends Document {
    name: string,
    email: string,
    address: {
        addressLine1: string,
        addressLine2: string
    }
}

class UserSchema {
    static get schema() {
        return new Schema({
            name: String,
            email: String,
            address: {
                addressLine1: String,
                addressLine2: String
            }
        });
    }
}

var schema = model<UserModel>("users", UserSchema.schema);
export const User = schema;