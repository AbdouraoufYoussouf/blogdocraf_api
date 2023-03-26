import { IsString,IsDate } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
    @IsString()
    username: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
    @IsString()
    description: string;
    @IsDate()
    createdAt: Date; // champ pour la date de création
  }
  
  export class UpdateUserDto extends CreateUserDto {
    @IsDate()
    updatedAt: Date; // champ pour la date de mise à jour
  }