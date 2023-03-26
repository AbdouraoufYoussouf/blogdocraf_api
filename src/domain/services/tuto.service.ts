import { Injectable } from '@nestjs/common';
import { Tuto } from '@prisma/client';
import { TutoRepository } from 'src/infrastructure/tuto.repository';
import { ITutoService } from '../abstractions/tuto/tuto-service.interface';
import { CreateTutoDto, UpdateTutoDto } from '../dtos/tuto.dto';

@Injectable()
export class TutoService implements ITutoService {
  constructor(private readonly tutoRepository: TutoRepository) {}

  async create(createTutoDto: CreateTutoDto): Promise<Tuto> {
    return await this.tutoRepository.create(createTutoDto);
  }

  async findAll(): Promise<Tuto[]> {
    return await this.tutoRepository.findAll();
  }
  async findById(id: string): Promise<Tuto> {
    return await this.tutoRepository.findById(id);
  }
  async update(id: string, updateTutoDto: UpdateTutoDto): Promise<Tuto> {
    return await this.tutoRepository.update(id,updateTutoDto);
  }
  async delete(id: string): Promise<Tuto> {
    return await this.tutoRepository.delete(id);
  }
}
