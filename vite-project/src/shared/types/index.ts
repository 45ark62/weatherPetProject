export interface WeatherResponse {
    location: {
      name: string;
      country: string;
      localtime: string;
    };
    current: {
      condition: {
        text: string;
        icon: string;
      };
      temp_c: number;
      wind_kph: number;
      wind_degree: number;
      humidity: number;
      feelslike_c: number;
    };
  }
  export interface Location {
    name: string;
    country: string;
    localtime: string;
  }
  
  export interface Current {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    wind_kph: number;
    wind_degree: number;
    humidity: number;
    feelslike_c: number;
  }
  
export interface WeatherHistoryItem {
  name: string;
  country: string;
  temp_c: number;
  feelslike_c: number;
  condition: string;
  localtime: string;
}