import { Prisma } from "@prisma/client";
import { UserModel } from "./user.model";

export class ProjetModel implements Prisma.ProjetCreateInput {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    //author: UserModel;
    createdAt: Date;
    updatedAt: Date;
}