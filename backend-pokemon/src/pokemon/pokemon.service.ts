import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import { Resultados } from 'src/batallas/resultados.entity';
import { batallaPokemon } from './algoritmoBatalla';
import * as _ from 'lodash';


@Injectable()
export class PokemonService {

  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Resultados)
    private resultadosRepository: Repository<Resultados>,
  ) {}

  // Endpoint para listar todos los pokemon
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  // Endpoint para actualizar un Pokemon
  // async updatePokemon(id: number, updateData: Partial<Pokemon>): Promise<Pokemon> {
  //   await this.pokemonRepository.update(id, updateData);
  //   return this.pokemonRepository.findOne({ where: { id } });
  // }


// Algoritmo de batalla
  async battle(pokemon1Id: number, pokemon2Id: number): Promise<{ winner: Pokemon }> {
    const pokemon1 = await this.pokemonRepository.findOne({ where: { id: pokemon1Id } });
    const pokemon2 = await this.pokemonRepository.findOne({ where: { id: pokemon2Id } });

    if (!pokemon1 || !pokemon2) {
      throw new Error('No se encuentran uno o ambos');
    }

    // Clonar los Pokémon para la batalla
    const clonedPokemon1 = _.cloneDeep(pokemon1);
    const clonedPokemon2 = _.cloneDeep(pokemon2);

    //traigo la batalla
    const { winner } = batallaPokemon(pokemon1, pokemon2);

    const resultados = new Resultados();
    resultados.pokemon1Id = pokemon1.id;
    resultados.pokemon1Name = pokemon1.name;
    resultados.pokemon2Id = pokemon2.id;
    resultados.pokemon2Name = pokemon2.name;
    resultados.winnerId = winner.id;
    resultados.winnerName = winner.name;
    await this.resultadosRepository.save(resultados);

    return { winner };
  }
}