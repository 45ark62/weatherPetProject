import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface FavoritesCityState {
  favoritesCity: string[];
}

const initialState: FavoritesCityState = {
  favoritesCity: ['москва'],
};

export const favoritesCitySlice = createSlice({
  name: "favoritesCity",
  initialState,
  reducers: {
    addFavoriteCity: (state, action:PayloadAction<string>) => {
      if (!state.favoritesCity.some((city) => city === action.payload)) {
        state.favoritesCity.push(action.payload.toLowerCase());
      }
    },


    removeFavoriteCity: (state, action:PayloadAction<string>) => {
      state.favoritesCity = state.favoritesCity.filter(
        (city) => city !== action.payload.toLowerCase()
      );
    },
    clearFavorites: (state) => {
      state.favoritesCity = []; 
    },
  },
});
export const {
  addFavoriteCity,
  removeFavoriteCity,
  clearFavorites,
} = favoritesCitySlice.actions;
export default favoritesCitySlice.reducer;
