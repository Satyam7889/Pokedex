import { useState } from 'react';
import PokemonList from '../pokemonList/PokemonList';
import Search from '../search/Search';
import './Pokedex.css'
import PokemonDetails from '../pokemonDetails/PokemonDetails';

function Pokedex(){

    const [searchTerm , setSearchTerm] = useState('');

    return(
        <div className='pokedex-wrapper'>
            <h1>Pokedex</h1>
            <Search updateSearchTerm={setSearchTerm} />
            {searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList />}
        </div>
    )
}
export default Pokedex;