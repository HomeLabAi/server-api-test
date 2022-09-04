import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AuthController } from './controllers/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { OrderController } from 'src/apis/controllers/order.controller';
import { OrderService } from 'src/apis/services/order.service';
import { Order, OrderSchema } from 'src/apis/schemas/order.schema';
import { CommentController } from 'src/apis/controllers/comment.controller';
import { CommentService } from 'src/apis/services/comment.service';
import { Comment, CommentSchema } from 'src/apis/schemas/comment.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Order.name, schema: OrderSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
  ],
  controllers: [
    AuthController,
    UserController,
    ProductController,
    OrderController,
    CommentController,
  ],
  providers: [
    UserService,
    AuthService,
    JwtService,
    ProductService,
    OrderService,
    CommentService,
  ],
})
export class ApisModule {}
