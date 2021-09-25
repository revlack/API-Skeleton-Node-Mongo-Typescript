import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../model/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>) {

    return await User.create(input);

}


function findUser() { }

