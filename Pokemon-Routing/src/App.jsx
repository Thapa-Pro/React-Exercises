import { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  const [pokemons, setPokemons] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  useEffect(() => {

    // axios.get(url) When we see the results in console log 
    // then we can put the real thing, we copy the same thing and go forward
    //   .then(response =>
    //     console.log(response.data));

    axios.get(url)
      .then(response => setPokemons(response.data.results))
      .catch(error => console.log(error));
    // Don't put ; in all lines

    // fetch(url, {   ========We did it before importing axios=======
    //   method: 'GET'
    // })
    //   .then(response => response.json())
    //   .then(data => setPokemons(data.results))
    //   .catch(error => console.log(error));

  }, []);

  return (
    <div className="app">
      <h1>Pokemon List</h1>
      <ul>
        {
          pokemons.map(pokemon => <p>{pokemon.name}</p>)
        }

      </ul>
    </div>
  )
}

export default App