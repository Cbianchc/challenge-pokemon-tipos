import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon } from './pokemon.entity';
import { Resultados } from 'src/batallas/resultados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Resultados])],
  providers: [PokemonService],
  controllers: [PokemonController],
  exports: [TypeOrmModule]
})
export class PokemonModule {}

