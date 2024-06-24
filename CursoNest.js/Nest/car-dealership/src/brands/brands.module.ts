import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  // Al momento de exportar BrandsService, se puede acceder a este servicio desde otros módulos.
  exports: [BrandsService],
})
export class BrandsModule {}
