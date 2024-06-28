import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

// La clase nos permite definir los tipos de datos que se van a recibir para el filtro del método findAll
export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'Cantidad de elementos a mostrar',
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  // ()=> NUmber sirve para que sepa que es un número
  limit?: number;

  @ApiProperty({
    default: 0,
    description: 'Cantidad de elementos a omitir',
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
