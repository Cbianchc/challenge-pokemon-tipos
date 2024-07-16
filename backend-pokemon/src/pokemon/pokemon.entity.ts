import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// enum Type {
//   AGUA = "Agua",
//   FUEGO = "Fuego",
//   TIERRA = "tierra",
//   ELECTRICO = "Electrico"
// }

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  hp: number;

  @Column()
  speed: number;

  @Column()
  type: string;

  @Column()
  imageUrl: string;
}
