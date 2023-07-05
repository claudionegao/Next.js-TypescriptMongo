import mongoose, {Document, Schema} from "mongoose";

export interface Iuser{
    nickname: string;
    username: string;
    password: string;
    name: string;
}

export interface IUserModel extends Iuser, Document {}

const UserSchema: Schema = new Schema({
    nickname: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
},
{
    versionKey: false
})