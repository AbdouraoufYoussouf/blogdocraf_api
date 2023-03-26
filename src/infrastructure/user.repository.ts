import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { IUserRepository } from 'src/domain/abstractions/user/tuto-repository.interface';
import { UserModel } from 'src/domain/models/user.model';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(user: UserModel): Promise<User> {
        const { username, email, password, description } = user;
        return await this.prisma.user.create({
            data: {
                username, email, password, description
            }
        })
    }
    findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }
    async findById(id: string): Promise<User> {
        return await this.prisma.user.findUnique({
            where: { id },
            include:{
                tutos:true
            }
        });
    }
    async update(id: string, updateUser: UserModel): Promise<User> {
        return await this.prisma.user.update({
            data: { ...updateUser, updatedAt: new Date() },
            where: { id }
        });
    }
    delete(id: string): Promise<User> {
        return this.prisma.user.delete({
            where: { id }
        });
    }

}


