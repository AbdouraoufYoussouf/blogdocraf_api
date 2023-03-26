import { User } from "@prisma/client";
import { UserModel } from "src/domain/models/user.model";

export interface IUserRepository{
    create(user:UserModel):Promise<User>;
    findAll():Promise<User[]>;
    findById(id:string):Promise<User | null>;
    update(id:string,updateUser:UserModel):Promise<User | null>;
    delete(id:string): Promise<User>;
}