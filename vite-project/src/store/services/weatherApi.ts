import { WeatherResponse } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherResponse, string>({
      query: (cityName) => `forecast.json?q=${cityName}&days=7&lang=RU&key=${API_KEY}`,
    }),
  }),
})


export const { useGetWeatherQuery } = weatherApi