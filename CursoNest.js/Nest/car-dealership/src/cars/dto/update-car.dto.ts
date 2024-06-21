import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'Brand must be a valid string' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'Model must be a valid string' })
  @IsOptional()
  readonly model?: string;
}
