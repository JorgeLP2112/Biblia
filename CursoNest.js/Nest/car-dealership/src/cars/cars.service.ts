import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    /*{
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },*/
  ];

  // .find() es un método de los arrays de JavaScript que recibe una función como argumento
  // En este ejemplo se está buscando un objeto en el array cars que tenga el id que se recibe como argumento
  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  findAll() {
    return this.cars;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      // los ... son el operador de propagación de JavaScript que permite copiar las propiedades de un objeto a otro
      ...createCarDto,
    };

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Invalid id');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        // Las propiedades se van a ir sobre escribiendo con las que se reciban en el updateCarDto
        // Además ponemos el id para que no se pueda modificar
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return car;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
