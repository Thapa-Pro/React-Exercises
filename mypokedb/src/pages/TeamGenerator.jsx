import GeneratorForm from '../components/GeneratorForm';
import PokemonCard from '../components/PokemonCard';
import { useState } from 'react';

function TeamGenerator({ pokemons }) {
    const [generatedPokemons, setGeneratedPokemons] = useState([]);

    const handleGeneratedPokemon = (type, amount) => {
        const generated = pokemons.filter(pokemon => {
            return pokemon.type.some(t => t.name.toLowerCase() === type.toLowerCase());
        });
        if (amount !== '' && amount !== '0') {
            setGeneratedPokemons([...getRandomPokemons(amount, generated)]);
        } else {
            setGeneratedPokemons([...generated]);
        }
    }

    const getRandomPokemons = (n, pokemons) => {
        if (n > pokemons.length) {
            return pokemons;
        }
        const shuffled = [...pokemons].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, n)
    }

    return (
        <section className="generator">
            <h2 className="generator__title">Team Generator</h2>
            <GeneratorForm handleGeneratedPokemon={handleGeneratedPokemon} />
            <section className="generator__list">
                {
                    generatedPokemons.map(pokemon => {
                        return <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    })
                }
            </section>
        </section>
    )
}

export default TeamGenerator;