import './PokemonList.css'
import Pokemon from '../pokemon/Pokemon';
import usePokemonList from '../../Hooks/usePokemonList';

function PokemonList(){
    const default_url = "https://pokeapi.co/api/v2/pokemon"
    const [pokemonListState,setPokemonListState] = usePokemonList(default_url);    

    return(
        <div className='pokemon-list-wraper'>
           <div><h1>Pokemon List</h1></div>

           <div className='pokemon-list'>
           {pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)}
           </div>

           <div className='page-control'>
            <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.prevUrl})}>Prev</button>
            <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.nextUrl})}>Next</button>
           </div>
        </div>
    );
}
export default PokemonList;