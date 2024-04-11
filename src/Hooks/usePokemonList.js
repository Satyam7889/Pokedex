import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadpkemons";

function usePokemonList(default_url) {

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: default_url,
        nextUrl: default_url,
        prevUrl: default_url
    });

    // download function is gone at utilsx

    useEffect(() => {
        downloadPokemons(pokemonListState, setPokemonListState, default_url);
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];

}

export default usePokemonList;