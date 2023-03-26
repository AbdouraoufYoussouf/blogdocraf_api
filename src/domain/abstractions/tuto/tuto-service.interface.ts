import { Tuto } from "@prisma/client";
import { CreateTutoDto, UpdateTutoDto } from "src/domain/dtos/tuto.dto";
import { TutoModel } from "src/domain/models/tuto.model";

export interface ITutoService{
    create(createTutoDto:CreateTutoDto):Promise<Tuto>;
    findAll():Promise<Tuto[]>;
    findById(id:string):Promise<Tuto | null>;
    update(id:string,updateTutoDto:UpdateTutoDto):Promise<Tuto | null>;
    delete(id:string): Promise<Tuto>;
}