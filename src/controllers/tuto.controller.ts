import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TutoService } from 'src/domain/services/tuto.service';
import { CreateTutoDto, UpdateTutoDto } from '../domain/dtos/tuto.dto';

@Controller('api')
export class TutoController {
  constructor(private readonly tutoService: TutoService,) {}

  @Post('tuto')
  async create(@Body() createTutoDto: CreateTutoDto) {
    return await this.tutoService.create(createTutoDto);
  }

  @Get('tutos')
  async findAll() {
    return await this.tutoService.findAll();
  }

  @Get('tuto/:id')
  async findOne(@Param('id') id: string) {
    return await this.tutoService.findById(id);
  }

  @Put('tuto/:id')
  async update(@Param('id') id: string, @Body() updateTutoDto: UpdateTutoDto) {
    return await this.tutoService.update(id, updateTutoDto);
  }

  @Delete('tuto/:id')
  async remove(@Param('id') id: string) {
    return await this.tutoService.delete(id);
  }
}
