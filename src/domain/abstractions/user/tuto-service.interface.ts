import { User } from "@prisma/client";
import { CreateUserDto, UpdateUserDto } from "src/domain/dtos/user.dto";

export interface IUserService{
    create(createUserDto:CreateUserDto):Promise<User>;
    findAll():Promise<User[]>;
    findById(id:string):Promise<User | null>;
    update(id:string,updateUserDto:UpdateUserDto):Promise<User | null>;
    delete(id:string): Promise<User>;
}