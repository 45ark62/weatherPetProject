import { combineReducers } from "@reduxjs/toolkit";
import favoritesCityReducer from "@/entities/city/model/favoritesCitySlice";
import searchHistoryReducer from "@/features/search/model/searchHistorySlice";
import currentWeatherReducer from "@/entities/weather/model/weatherSlice";
import { weatherApi } from "@/entities/weather/api/weatherApi";

export const rootReducer = combineReducers({
  favoritesCity: favoritesCityReducer,
  searchHistory: searchHistoryReducer,
  currentWeather: currentWeatherReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
