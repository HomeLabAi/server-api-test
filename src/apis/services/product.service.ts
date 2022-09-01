import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from 'src/apis/dto/product/product.dto';
import { Product, ProductDocument } from 'src/apis/schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getAll() {
    return this.productModel.find({ isDelete: false });
  }

  async getById(id: string) {
    const product = await this.productModel.findOne({
      _id: id,
      isDelete: false,
    });
    if (!product) throw new Error('Product does not exist');
    return product;
  }

  async create(data: ProductDto, user: string) {
    console.log(user);

    const newProduct = new this.productModel({ ...data, createdBy: user });
    return newProduct.save();
  }

  async updateById(id: string, data: ProductDto) {
    const product = await this.productModel.findByIdAndUpdate(
      id,
      { ...data, updatedAt: new Date() },
      { new: true },
    );
    if (!product) throw new Error('Can not update product');
  }

  async deleteById(id: string, user: string) {
    const product = await this.productModel.findById(id).lean();

    if (!product) throw new Error('Product id is not exits');
    if ((product.createdBy as any) !== user)
      throw new Error('Can not update product');

    return this.productModel.findByIdAndUpdate(id, {
      isDelete: true,

      deletedAt: new Date(),

      deleteBy: user,
    });
  }
}
