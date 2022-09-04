import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from '../pagination/pagination.dto';
import { COMMENT_SORT } from '../../../core/constants/enum';

export class ProductFilterDto extends PaginationDto {
  @ApiProperty({ example: COMMENT_SORT.DESCENDING_STAR, enum: COMMENT_SORT })
  @IsOptional()
  @IsEnum(COMMENT_SORT)
  sort: COMMENT_SORT;
}
