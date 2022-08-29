import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { AuthService } from './service/auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AuthController } from './controller/auth/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { ProductController } from './controller/product/product.controller';
import { ProductService } from './service/product/product.service';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [AuthController, UserController, ProductController],
  providers: [UserService, AuthService, JwtService, ProductService],
})
export class ApisModule {}
