import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Resultados {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pokemon1Id: number;

  @Column()
  pokemon2Id: number;

  @Column()
  pokemon1Name: string;

  @Column()
  pokemon2Name: string;

  @Column()
  winnerId: number;

  @Column()
  winnerName: string;
}

