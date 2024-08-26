import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './myPokemons'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})