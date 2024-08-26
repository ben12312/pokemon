import { createSlice } from '@reduxjs/toolkit'

export const myPokemons = createSlice({
  name: 'myPokemon',
  initialState: {
    value: [],
  },
  reducers: {
    catchYa: (state, pokemon) => {
      state.value.push(pokemon)
    },
    releaseYa: (state, pokemon) => {
        state.value = pokemon.payload
    }
  },
})

export const { catchYa, releaseYa } = myPokemons.actions
export default myPokemons.reducer