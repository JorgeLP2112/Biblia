import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

// La clase nos permite definir los tipos de datos que se van a recibir para el filtro del método findAll
export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  // ()=> NUmber sirve para que sepa que es un número
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
