import { IsString, IsDate } from "class-validator";
import { Prisma } from "@prisma/client";

export class CreateTutoDto implements Prisma.TutoCreateInput {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  content?: string;
  @IsString()
  image?: string;
  @IsString()
  authorId: string;
  @IsDate()
  createdAt: Date; // champ pour la date de création
}

export class UpdateTutoDto extends CreateTutoDto {
 
  @IsDate()
  updatedAt: Date; // champ pour la date de mise à jour
}