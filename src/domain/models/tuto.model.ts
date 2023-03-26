import { Prisma } from '@prisma/client';

export class TutoModel implements Prisma.TutoCreateInput {
  id?: string;
    title: string;
  description?: string;
  content?: string;
  image?: string;
  authorId: string;
}