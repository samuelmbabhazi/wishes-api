import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWishDto } from './dto/create-wish.dto';

@Injectable()
export class WishService {
  constructor(private prisma: PrismaService) {}

  async create(wishData: CreateWishDto): Promise<CreateWishDto> {
    return this.prisma.wish.create({ data: wishData });
  }

  async findAll(): Promise<CreateWishDto[]> {
    return this.prisma.wish.findMany();
  }

  async findOne(id: number): Promise<CreateWishDto> {
    return this.prisma.wish.findUnique({ where: { id } });
  }

  async update(
    id: number,
    wishData: Partial<CreateWishDto>,
  ): Promise<CreateWishDto> {
    return this.prisma.wish.update({ where: { id }, data: wishData });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.wish.delete({ where: { id } });
  }
}
