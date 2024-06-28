import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './';
import { ApiProperty } from '@nestjs/swagger';

// Las entities con TypeORM son clases que representan las tablas de la base de datos
@Entity({ name: 'products' })
export class Product {
  // El decorador ApiProperty() se utiliza para documentar las propiedades de la entidad en Swagger
  // Además se puede agregar información adicional como ejemplo, descripción, etc.
  @ApiProperty({
    example: 'ae088447-d838-45b6-bcc5-04ff98366295',
    description: 'Product ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'T-Shirt Teslo',
    description: 'Product Title',
    uniqueItems: true,
  })
  @Column('text', { unique: true })
  title: string;

  @ApiProperty({ example: 0, description: 'Product Price' })
  @Column('float', { default: 0 })
  price: number;

  @ApiProperty({
    example: 'Lorem ipsum',
    description: 'Product Description',
    default: null,
  })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({
    example: 't_shirt_teslo',
    description: 'Product Slug',
    uniqueItems: true,
  })
  @Column('text', { unique: true })
  slug: string;

  @ApiProperty({
    example: 10,
    description: 'Product Stock',
    default: 0,
  })
  @Column('int', { default: 0 })
  stock: number;

  @ApiProperty({
    example: ['S', 'M', 'L', 'XL'],
    description: 'Product Sizes',
  })
  @Column('text', { array: true })
  sizes: string[];

  @ApiProperty({
    example: 'Men',
    description: 'Product Gender',
  })
  @Column('text')
  gender: string;

  @ApiProperty({
    example: ['t-shirt', 'polo', 'teslo'],
    description: 'Product Tags',
    default: [],
  })
  @Column('text', { array: true, default: [] })
  tags: string[];

  @ApiProperty()
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
  })
  images?: ProductImage[];

  // El decorador BeforeInsert() se ejecuta antes de insertar un registro en la base de datos
  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

  // El decorador BeforeUpdate() se ejecuta antes de actualizar un registro en la base de datos
  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
