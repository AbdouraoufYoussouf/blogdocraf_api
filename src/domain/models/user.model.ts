import { Prisma } from "@prisma/client";

export class UserModel implements Prisma.UserCreateInput{
    id?: string;
    username: string;
    email: string;
    password: string;
    description: string;
}