import Image from "next/image"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import PokemonCard from "./PokemonCard"


interface props {
	pokemons: SimplePokemon[]
}

const PokemonsGrid = ({ pokemons }: props) => {
	return (
		<div className="flex flex-wrap gap-10 items-center justify-center">
			{
				pokemons.map(pokemon => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))

			}
		</div>
	)
}

export default PokemonsGrid;