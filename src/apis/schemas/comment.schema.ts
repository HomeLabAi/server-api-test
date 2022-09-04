import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema } from 'mongoose';
import { DSchema } from '../../core/decorators/schema.decorator';
import { Product } from './product.schema';
import { User } from './user.schema';

export type CommentDocument = Comment & Document;

@DSchema()
export class Comment {
  @Prop({ type: Schema.Types.ObjectId, ref: User.name })
  userId: User;

  @Prop({ type: Schema.Types.ObjectId, ref: Product.name })
  productId: Product;

  @Prop({ type: String })
  name: string;

  @Prop({ type: [String] })
  files: string[];

  @Prop({ type: String })
  email: string;

  @Prop({ type: Number })
  star: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
