import { Pokemon } from './pokemon.entity';
import { tieneVentaja, tieneDesventaja } from './types';
import * as _ from 'lodash';

export const batallaPokemon = (pokemon1: Pokemon, pokemon2: Pokemon): { winner: Pokemon, pokemon1: Pokemon, pokemon2: Pokemon } => {
	
	// 1. clonar lo pokemon para que no joda en la base
	const clonedPokemon1 = _.cloneDeep(pokemon1);
	const clonedPokemon2 = _.cloneDeep(pokemon2);

	// 2. Ver las ventajas y desventajas por los type
	if (tieneVentaja(clonedPokemon1.type, clonedPokemon2.type)) {
		clonedPokemon1.attack *= 1.2;
	}
	if (tieneVentaja(clonedPokemon2.type, clonedPokemon1.type)) {
		clonedPokemon2.attack *= 1.2;
	}
	if (tieneDesventaja(clonedPokemon1.type, clonedPokemon2.type)) {
		clonedPokemon1.attack *= 0.8;
	}
	if (tieneDesventaja(clonedPokemon2.type, clonedPokemon1.type)) {
		clonedPokemon2.attack *= 0.8;
	}

// 3. quien ataca primero
	const firstAttacker = clonedPokemon1.speed > clonedPokemon2.speed ?
												clonedPokemon1 :
												clonedPokemon2.speed > clonedPokemon1.speed ?
												clonedPokemon2 :
												clonedPokemon1.attack > clonedPokemon2.attack ?
												clonedPokemon1 :
												clonedPokemon2;

	let attacker = firstAttacker;
	let defender = attacker === clonedPokemon1 ? clonedPokemon2 : clonedPokemon1;

// 4. Batalla hasta que uno tenga hp en 0
	while (clonedPokemon1.hp > 0 && clonedPokemon2.hp > 0) {
		const damage = Math.max(attacker.attack - defender.defense, 1);
		defender.hp -= damage;

		if (defender.hp <= 0) {
			return { winner: attacker, pokemon1: clonedPokemon1, pokemon2: clonedPokemon2 };
		}
		// turnos que van cambiando despues de los ataques
		[attacker, defender] = [defender, attacker];
	}

	const winner = clonedPokemon1.hp > 0 ? clonedPokemon1 : clonedPokemon2;
	return { winner, pokemon1: clonedPokemon1, pokemon2: clonedPokemon2 };
};
