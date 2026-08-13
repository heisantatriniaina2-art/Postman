/*import './App.css';
import User from './User.jsx';


function App() {
  const users = [
    { id: 1, name: "Doe", firstName: "John" },
    { id: 2, name: "Patrick", firstName: "Jane" },
  ];

  return (
    <>
      <h1>My APP</h1>
      {users.map((user) => {
        return <User id={user.id} name={user.name} firstName={users.firstName} />
      })}
    </>
  );
}
export default App;




function App() {
  return <h1>Hello Santatra</h1>
}

//
<> </>: fragment
//On utilise fragment si on veut regrouper plusieurs élements sans ajouter de <div> inutile dans le HTML

function MonComposant() {
  return (
    <>
      <h1>Titre</h1>
      <p>Texte</p>
    </>
  );
}



function App() {
  const name = "Santatra";
  return (
    <>
      <h1>Hello, {name}</h1>
      <div>Test</div>
      <Count />
    </>
  );
}


export default App
*/


/*
function App(){
const fetch{pokemons, setPokemons} = useState([]);
useEffect(() =>
  )
}

*/

import React, { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './PokemonList.jsx';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(res => res.json())
      .then(data => {
        const PokemonFormat = data.results.map((poke, index) => {
          const id = index + 1;
          return {
            id: id,
            name: poke.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
        setPokemonList(PokemonFormat);
      });
  }, []);

  return (
    <>
      <h1>Pokemon list</h1>
      <p>This is the list of Pokemon 1 to 100</p>
      {pokemonList.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
    </>
  );
}

export default App;