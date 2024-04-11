import usePokemonDetails from '../../Hooks/usePokemonDetails';
import Pokemon from '../pokemon/Pokemon';
import './PokemonDetails.css'
import { Link, useParams } from 'react-router-dom';

function PokemonDetails({pokemonName}){

    const [pokemon, pokemonListState] = usePokemonDetails(pokemonName);

    return(
        <>
        <h1 className='pokedex-redirect'>
            <Link to='/'>
                Pokedex
            </Link>
        </h1>
        {pokemon && <div className='pokemon-details-wrapper'>
            <div className='pokemon-detail-name'>
                {pokemon.name}
            </div>
            <div className='pokemon-img'>
                {<img src={pokemon.image} alt='big'/>}
            </div>
            <div className='pokemon-attributes'>
                <div>
                 height: {pokemon.height}
                </div>
                <div>
                 weight: {pokemon.weight}
                </div>
            </div>
            
            <div className='pokemon-types'>
                <h1>Type :</h1> {pokemon.types.map(t => <span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}

        <div className='similar-pokemons'>
        <h2>Similar pokemons</h2>
        <div className='pokemon-similar-boxes'>
            {pokemonListState.pokemonList.length > 0 && 
                pokemonListState.pokemonList.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.image} id={pokemon.id}/>)
        }
        </div>
        </div>

        </> 
          
    )
}

export default PokemonDetails;