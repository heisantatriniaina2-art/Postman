import { useEffect, useState } from "react";
import "./App.css";

function Appl() {
  const [polkemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then(async (data) => {
        const details = await Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((response) => response.json())
          )
        );

        setPokemons(details);
      });
  }, []);

  return (
    <div className="container">
      <h1>Pokédex</h1>

      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div className="pokemon-card" key={pokemon.id}>

            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />

            <h2>{pokemon.name}</h2>

            <p>
              Type : {pokemon.types[0].type.name}
            </p>

            <p>
              ❤️ PV : {pokemon.stats[0].base_stat}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Appl;