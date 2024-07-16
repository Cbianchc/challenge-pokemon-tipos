import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonSeed } from './pokemon/pokemon.seed';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.sqlite',
      // entities: [__dirname, '/**/*.entity(.ts,.js)'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PokemonModule,
],
providers: [PokemonSeed], 
  
})
export class AppModule {
  constructor(private readonly pokemonSeed: PokemonSeed) {
    this.pokemonSeed.seed();
  }
}