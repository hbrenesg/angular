const enum Patas { bipedo = 2, cuadrupedo = 4 }

const dog: {
    name: string;
    tipo: Patas;
    bark(): void;

} = {
    name: 'Capitán',
    bark() { console.log('Now') },
    tipo: Patas.cuadrupedo
}

// Never
function Exception(msg: string): never {
    throw new Error(msg)
}

// Interfaces
interface PersonajeVideoJuego {
    nombre: string
    vida: number
    habilidades: string[]
    ciudad?: string
}

const mario: PersonajeVideoJuego = {
    nombre: 'Mario',
    vida: 1,
    habilidades: ['Saltar', 'Montar dinosaurios', 'Ingresar tuberías'],
    ciudad: 'New York'
}

console.table(mario);
