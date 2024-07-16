export const typeVentajas: Record<string, string[]> = {
	electrico: ['volador', 'agua'],
	fuego: ['planta', 'bicho', 'hielo', 'metal'],
	agua: ['fuego', 'tierra', 'roca'],
	planta: ['agua', 'tierra', 'piedra'],
	veneno: ['planta', 'hada'],
	normal: [],
};

export const typeDesventajas: Record<string, string[]> = {
	electrico: ['tierra'],
	fuego: ['agua', 'rock', 'tierra'],
	agua: ['electrico', 'tierra'],
	planta: ['fuego', 'volador','hielo', 'veneno'],
	veneno: ['psiquico', 'tierra'],
	normal: [],
}

// tiene ventaja saca mas punto en la batalla. o al reves
export const tieneVentaja = (attackerType: string, defenderType: string) => {
	return typeVentajas[attackerType]?.includes(defenderType);
}

export const tieneDesventaja = (attackerType: string, defenderType: string) => {
	return typeDesventajas[attackerType]?.includes(defenderType);
}