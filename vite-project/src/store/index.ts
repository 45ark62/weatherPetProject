import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import favoritesCityReducer from "./slices/favoritesCitySlice";
import { weatherApi } from "./services/weatherApi";
import currentWeatherReducer from "./slices/weatherSlice";
import searchHistoryReducer from "./slices/searchHistorySlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoritesCity", "searchHistory"],
};
const rootReducer = combineReducers({
  favoritesCity: favoritesCityReducer,
  searchHistory: searchHistoryReducer,
  currentWeather: currentWeatherReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(weatherApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
