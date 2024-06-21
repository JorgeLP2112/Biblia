import { IsString } from 'class-validator';

// Los dto siempre deben ser clases
export class CreateCarDto {
  // IsString es un decorador que se usa para validar que el valor que se recibe es un string
  // Los dto deben tener un decorador por propiedad para que se apliquen las validaciones
  @IsString({ message: 'Brand must be a valid string' })
  readonly brand: string;

  @IsString({ message: 'Model must be a valid string' })
  readonly model: string;
}
