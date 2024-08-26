import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import PokemonDetail from './pages/pokemonDetail';
import PokemonList from './pages/pokemonList';
import MyPokemonList from './pages/myPokemonList';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/pokemon-list" element={<PokemonList/>}/>
          <Route path="/pokemon-detail" element={<PokemonDetail/>}/>
          <Route path="/my-pokemon-list" element={<MyPokemonList/>}/>
          <Route path="*" element={<Navigate to="/pokemon-list" replace />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
