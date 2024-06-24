import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  // Al importar CarsModule y BrandsModule, se pueden acceder a los servicios de estos módulos que se estén exportando.
  imports: [CarsModule, BrandsModule],
})
export class SeedModule {}
