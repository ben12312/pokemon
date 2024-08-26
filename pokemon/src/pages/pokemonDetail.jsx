import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Card from '../components/card';

function PokemonDetail(props) {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(0);
  const queryParams = new URLSearchParams(window.location.search)
  const paramId = queryParams.get("id")
  
  useEffect(() => {
    setId(paramId)
    if (id > 0) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "your-api-key",
          "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
        })
        .catch((error) => console.log(error));
    }
  }, [id, paramId]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home">
      <h1>Pokemon Detail</h1>
      <div style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Card pokemon={pokemon}/>
      </div>
    </div>
  )
}

export default PokemonDetail;
