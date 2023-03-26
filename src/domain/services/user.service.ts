import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserRepository } from "src/infrastructure/user.repository";
import { IUserService } from "../abstractions/user/tuto-service.interface";
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";

@Injectable()
export class UserService implements IUserService{
    constructor(private readonly userRepository:UserRepository){}

    async create(createUserDto: CreateUserDto): Promise<User> {
        return await this.userRepository.create(createUserDto);
    }
    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
    async findById(id: string): Promise<User> {
        return await this.userRepository.findById(id);
      }
      async update(id: string, updateTutoDto: UpdateUserDto): Promise<User> {
        return await this.userRepository.update(id,updateTutoDto);
      }
      async delete(id: string): Promise<User> {
        return await this.userRepository.delete(id);
      }
}