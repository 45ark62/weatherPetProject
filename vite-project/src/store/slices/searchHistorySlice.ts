import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Weather {
  name: string;
  country: string;
  temp_c: number;
  wind_kph?: number;
  localtime: string;
  condition: string;
  feelslike_c: number;
}

interface SearchHistoryState {
  searchHistory: Weather[];
}

const initialState: SearchHistoryState = {
  searchHistory: [],
};

export const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    setSearchHistory: (state, action: PayloadAction<Weather[]>) => {
      state.searchHistory = action.payload;
    },
    addItemInSearchHistory: (state, action: PayloadAction<Weather>) => {
      const NEW_ITEM = action.payload;
      const NOW = new Date(NEW_ITEM.localtime);
      const NOW_MINUTES = Math.floor(NOW .getTime() / (1000 * 60));

      const last = state.searchHistory.find(
        (item) => item.name === NEW_ITEM.name && item.country === NEW_ITEM.country
      );

      const lastMinutes = last
        ? Math.floor(new Date(last.localtime).getTime() / (1000 * 60))
        : null;

      const shouldAdd = lastMinutes === null || NOW_MINUTES - lastMinutes >= 2;

      if (shouldAdd) {
        state.searchHistory.push(NEW_ITEM);
      }
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
  },
});

export const { setSearchHistory, addItemInSearchHistory, clearSearchHistory } =
  searchHistorySlice.actions;

export default searchHistorySlice.reducer;
