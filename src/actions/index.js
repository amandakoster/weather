import axios from 'axios';

const API_KEY = '945b3d7fb367461654a9709c48d81389';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//action: function
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    // console.log('Request:', request)

//action: promise:
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}