import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherApiResponse {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
  };
}

interface WeatherState {
  weather: WeatherApiResponse | null;
  city: string;
}
const initialState: WeatherState = {
  weather: null,
  city: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state, action: PayloadAction<WeatherApiResponse>) => {
      state.weather = action.payload;
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});
export const { getWeather, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
