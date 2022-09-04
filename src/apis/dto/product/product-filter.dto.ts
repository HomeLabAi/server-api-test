import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from '../pagination/pagination.dto';
import { PRODUCT_SORT } from '../../../core/constants/enum';

export class ProductFilterDto extends PaginationDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  minPrice: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  maxPrice: number;

  @ApiProperty({
    required: false,
    example: PRODUCT_SORT.NEWST,
    enum: PRODUCT_SORT,
  })
  @IsOptional()
  @IsEnum(PRODUCT_SORT)
  sortBy: PRODUCT_SORT;
}
