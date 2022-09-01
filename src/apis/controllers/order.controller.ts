import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from 'src/apis/services/order.service';
import { OrderDto } from '../dto/order/order.dto';
import {
  responseError,
  responseSuccess,
  responseSuccessWithData,
} from './base.controller';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: 'Get all order' })
  @Get()
  async getAll() {
    try {
      const data = await this.orderService.getAll();
      return responseSuccessWithData(data);
    } catch (error) {
      console.log(error);
      return responseError(error.message);
    }
  }

  @ApiOperation({ summary: 'Get a order by id' })
  @Get(':id')
  async getById(@Param('id') id: string) {
    try {
      const data = await this.orderService.getById(id);
      return responseSuccessWithData(data);
    } catch (error) {
      console.log(error);
      return responseError(error.message);
    }
  }

  @ApiOperation({ summary: 'Create a order' })
  @Post()
  async create(@Body() data: OrderDto) {
    try {
      await this.orderService.create(data);
      return responseSuccess('Create order success');
    } catch (error) {
      console.log(error);
      return responseError(error.message);
    }
  }

  @ApiOperation({ summary: 'Update a order' })
  @Put(':id')
  async updateById(@Param('id') id: string, @Body() data: OrderDto) {
    try {
      await this.orderService.updateById(id, data);
      return responseSuccess('Update order success');
    } catch (error) {
      console.log(error);
      return responseError(error.message);
    }
  }

  @ApiOperation({ summary: 'Delete a order' })
  @Delete(':id')
  async deleteById() {
    try {
      await this.orderService.deleteById();
      return responseSuccess('Delete order success');
    } catch (error) {
      console.log(error);
      return responseError(error.message);
    }
  }
}
