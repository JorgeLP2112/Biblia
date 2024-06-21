import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

// El decorador está especificando que ese endpopint es para las peticiones con la cabezera /cars
@Controller('cars')
// El decorador UsePipes está especificando que se va a usar el pipe ValidationPipe para las validaciones de los datos
// @UsePipes(ValidationPipe)
export class CarsController {
  // El constructor está inyectando el servicio CarsService
  constructor(private readonly carService: CarsService) {}
  // El decorador Get está especificando que este método es para las peticiones GET
  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  // El decorador Param está especificando que el parámetro id es el que se recibe en la URL
  // El hecho de poner ':id' en el decorador Get está especificando que el endpoint es /cars/:id
  // Los pipes son transformadores de datos que se pueden usar para transformar los datos que se reciben en las peticiones
  // Los pipes se pueden instanciar pasando un objeto con la configuración que se necesita
  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    console.log({ id });
    // +id convierte el string a un número
    return this.carService.findOneById(id);
  }

  // @Body() body: any está especificando que el cuerpo de la petición se va a recibir en la variable body
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carService.delete(id);
  }
}
