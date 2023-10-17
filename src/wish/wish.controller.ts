import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateWishDto } from './dto/create-wish.dto';
import { WishService } from './wish.service';

@Controller('wishes')
export class WishController {
  constructor(private readonly wishesService: WishService) {}

  @Post()
  create(@Body() wishData: CreateWishDto): Promise<CreateWishDto> {
    return this.wishesService.create(wishData);
  }

  @Get()
  findAll(): Promise<CreateWishDto[]> {
    return this.wishesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CreateWishDto> {
    return this.wishesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() wishData: Partial<CreateWishDto>,
  ): Promise<CreateWishDto> {
    return this.wishesService.update(+id, wishData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.wishesService.remove(+id);
  }
}
