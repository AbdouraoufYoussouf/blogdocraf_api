import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TutoController } from './controllers/tuto.controller';
import { UserController } from './controllers/user.controller';
import { TutoService } from './domain/services/tuto.service';
import { UserService } from './domain/services/user.service';
import { TutoRepository } from './infrastructure/tuto.repository';
import { UserRepository } from './infrastructure/user.repository';

@Module({
  imports: [],
  controllers: [TutoController,UserController],
  providers: [PrismaService,TutoService,TutoRepository,UserService,UserRepository],
})
export class AppModule {}
