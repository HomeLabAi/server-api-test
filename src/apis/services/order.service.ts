
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/apis/schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<OrderDocument>,
  ) {}

  async getAll() {
    return;
  }

  async getById() {
    return;
  }

  async create() {
    return;
  }

  async updateById() {
    return;
  }

  async deleteById() {
    return;
  }
}

  