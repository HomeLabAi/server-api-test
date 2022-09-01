import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ORDER_STATUS } from 'src/core/constants/enum';
import { AddressDto } from '../address/address.dto';

export class OrderDto {
  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  productIds: string[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsOptional()
  @IsEnum(ORDER_STATUS)
  status: ORDER_STATUS;

  @ApiProperty()
  @IsOptional()
  address: AddressDto;
}
