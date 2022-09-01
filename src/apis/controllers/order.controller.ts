import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from 'src/apis/services/order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: 'Get all order' })
  @Get()
  async getAll() {
    return this.orderService.getAll();
  }

  @ApiOperation({ summary: 'Get a order by id' })
  @Get(':id')
  async getById() {
    return this.orderService.getById();
  }

  @ApiOperation({ summary: 'Create a order' })
  @Post()
  async create() {
    return this.orderService.create();
  }

  @ApiOperation({ summary: 'Update a order' })
  @Put(':id')
  async updateById() {
    return this.orderService.updateById();
  }

  @ApiOperation({ summary: 'Delete a order' })
  @Delete(':id')
  async deleteById() {
    return await this.orderService.deleteById();
  }
}
