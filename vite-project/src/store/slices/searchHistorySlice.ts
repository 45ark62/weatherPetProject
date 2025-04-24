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
      const newItem = action.payload;
      const now = new Date(newItem.localtime);
      const nowMinutes = Math.floor(now.getTime() / (1000 * 60));

      const last = state.searchHistory.find(
        (item) => item.name === newItem.name && item.country === newItem.country
      );

      const lastMinutes = last
        ? Math.floor(new Date(last.localtime).getTime() / (1000 * 60))
        : null;

      const shouldAdd = lastMinutes === null || nowMinutes - lastMinutes >= 2;

      if (shouldAdd) {
        state.searchHistory.push(newItem);
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
