import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import * as pokemonData from '../../pokemon-data.json';

@Injectable()
export class PokemonSeed {
  private readonly logger = new Logger(PokemonSeed.name);

  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async seed() {
    this.logger.log('Seeding Pokemon data...');
    const count = await this.pokemonRepository.count();
    this.logger.log(`Number of records in database: ${count}`);

    if (count === 0) {
      const pokemonArray = pokemonData.pokemon.map(pokemon => ({
        name: pokemon.name,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        hp: pokemon.hp,
        type: pokemon.type,
        imageUrl: pokemon.imageUrl,
      }));
      await this.pokemonRepository.save(pokemonArray);
      this.logger.log('Seeding complete.');
    }
  }
}


