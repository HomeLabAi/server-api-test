import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ORDER_STATUS } from '../../core/constants/enum';
import { DSchema } from '../../core/decorators/schema.decorator';
import { Address } from './address.schema';
import { Product } from './product.schema';
import { User } from './user.schema';

export type OrderDocument = Order & Document;

@DSchema()
export class Order {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }] })
  productIds: Product[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  userId: User;

  @Prop()
  amount: Number;

  @Prop({ type: String, enum: ORDER_STATUS, default: ORDER_STATUS.PENDDING })
  status: ORDER_STATUS;

  @Prop({ type: Address })
  address: Address;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
