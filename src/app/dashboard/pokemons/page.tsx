import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonsGrid from "@/pokemons/components/PokemonsGrid";
import Image from "next/image";


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
		.then(res => res.json());

	const pokemons = data.results.map(pokemon => ({
		id: pokemon.url.split('/').at(-2)!,
		name: pokemon.name,
	}))

	// throw new Error('Este error no debería suceder')
	return pokemons;
}


export default async function PokemonsPage() {

	const pokemons = await getPokemons();
	return (
		<div className="p-4 flex flex-col">
			<span className="text-5xl my-3">listado de Pokemons <small>estático</small></span>
			<PokemonsGrid pokemons={pokemons} />
		</div>
	);
}