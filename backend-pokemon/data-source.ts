import { DataSource } from 'typeorm';
import { Pokemon } from './src/pokemon/pokemon.entity';
import { Resultados } from './src/batallas/resultados.entity';
// Importa todas las demás entidades y configuraciones necesarias

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon.sqlite',
  entities: [Pokemon, Resultados],
  migrations: ['src/migrations/*.ts'],
  synchronize: true,
});

// Inicializa el dataSource
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source INICIA!');
  })
  .catch((err) => {
    console.error('Error con inicializacion...', err);
  });
