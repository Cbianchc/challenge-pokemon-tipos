import { Controller, Get, Post, Param, ParseIntPipe, Body } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemon')
export class PokemonController {

  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get('battle/:pokemon1Id/:pokemon2Id')
  async battle(
    @Param('pokemon1Id', ParseIntPipe) pokemon1Id: number,
    @Param('pokemon2Id', ParseIntPipe) pokemon2Id: number,
  ): Promise<{ winner: Pokemon }> {
    return this.pokemonService.battle(pokemon1Id, pokemon2Id);
  }

  //POST de pokemon - para probar la carga
//   @Post('update/:id')
//   async updatePokemon(@Param('id') id: number, @Body() updateData: Partial<Pokemon>): Promise<Pokemon> {
//     return this.pokemonService.updatePokemon(id, updateData);
//   }
}

