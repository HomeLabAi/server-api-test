
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({timestamps: true, versionKey: false})
export class Order {
  @Prop()
  example1: string;

  @Prop()
  example2: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
  