import Header from "./components/Header"
import Pokedex from "./pages/Pokedex"
import TeamGenerator from './pages/TeamGenerator';
import SearchPokemon from './pages/SearchPokemon';
import { useState } from 'react';
import pokemons from './assets/pokemons';

function App() {
  const [displayPokedex, setDisplayPokedex] = useState(true);
  const [displayGenerator, setDisplayGenerator] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [pokemonList, setPokemonList] = useState(pokemons);

  const handleRouting = (text) => {
    if (text === 'Pokedex') {
      setDisplayPokedex(true);
      setDisplayGenerator(false);
      setDisplaySearch(false);
    } else if (text === 'Team Generator') {
      setDisplayPokedex(false);
      setDisplayGenerator(true);
      setDisplaySearch(false);
    } else if (text === 'Search Pokemon') {
      setDisplayPokedex(false);
      setDisplayGenerator(false);
      setDisplaySearch(true);
    }
  }

  return (
    <section className="app">
      <Header handleRouting={handleRouting} />
      {
        displayPokedex
          ? <Pokedex pokemons={pokemonList} />
          : displayGenerator
            ? <TeamGenerator pokemons={pokemonList} />
            : displaySearch
              ? <SearchPokemon pokemons={pokemonList} />
              : ''
      }


      {/* {
        displayPokedex && <Pokedex pokemons={pokemonList} />
      }
      {
        displayGenerator && <TeamGenerator pokemons={pokemonList} />
      }
      {
        displaySearch && <SearchPokemon pokemons={pokemonList} />
      } */}
    </section>
  )
}

export default App