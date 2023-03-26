import { Injectable } from "@nestjs/common";
import { Prisma, Tuto } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
import { ITutoRepository } from "src/domain/abstractions/tuto/tuto-repository.interface";
import { TutoModel } from "src/domain/models/tuto.model";

@Injectable()
export class TutoRepository implements ITutoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(tuto: TutoModel): Promise<Tuto> {
        const { title, description, content, image, authorId } = tuto;
        return await this.prisma.tuto.create({
            data: {
                title, description, content, image,
                author: {
                    connect: { id: authorId }
                }
            },
        })
    }
    async findAll(): Promise<Tuto[]> {
        return this.prisma.tuto.findMany({
            include:{
                author:true
            }
        })
    }
    async findById(id: string): Promise<Tuto> {
        return
    }
    async update(id: string, updateTuto: TutoModel): Promise<Tuto> {
        return await this.prisma.tuto.update({
            data: { ...updateTuto, updatedAt: new Date() },
            where: { id }
        })
    }
    async delete(id: string): Promise<Tuto> {
        return this.prisma.tuto.delete({
            where: { id }
        })
    }




}