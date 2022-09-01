import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/apis/schemas/order.schema';
import { ORDER_STATUS } from '../../core/constants/enum';
import { OrderDto } from '../dto/order/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<OrderDocument>,
  ) {}

  async getAll() {
    return this.orderModel
      .find()
      .populate('productIds', '-createdAt -updatedAt')
      .populate('userId', '-createdAt -updatedAt');
  }

  async getById(id: string) {
    return this.orderModel
      .findById(id)
      .populate('productIds', '-createdAt -updatedAt')
      .populate('userId', '-createdAt -updatedAt');
  }

  async create(data: OrderDto) {
    data.status = ORDER_STATUS.PENDDING;
    const newOrder = new this.orderModel(data);
    return newOrder.save();
  }

  async updateById(id: string, data: OrderDto) {
    const order = await this.orderModel.findById(id).lean();

    if (!order) throw new Error('Order does not exist');
    if (order.status !== ORDER_STATUS.PENDDING)
      throw new Error('Can not edit order');

    return this.orderModel.findByIdAndUpdate(
      id,
      { ...data, updatedAt: new Date() },
      { new: true },
    );
  }

  async deleteById() {
    return;
  }
}
