import React, { useState, useEffect } from 'react';
import Table from '../components/table'

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "your-api-key",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="About">
      <h1>List of Pokemons</h1>
      <div className='card' style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Table pokemons={pokemons}/>
      </div>
    </div>
  )
}

export default PokemonList;
