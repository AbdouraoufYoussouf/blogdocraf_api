import { Tuto } from "@prisma/client";
import { TutoModel } from "src/domain/models/tuto.model";

export interface ITutoRepository{
     create(tuto:TutoModel):Promise<Tuto>;
     findAll():Promise<Tuto[]>;
     findById(id:string):Promise<Tuto | null>;
     update(id:string,updateTuto:TutoModel):Promise<Tuto | null>;
     delete(id: string): Promise<Tuto>;

}