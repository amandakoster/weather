import axios from 'axios';

const API_KEY = '945b3d7fb367461654a9709c48d81389';
// const API_URL = `appid=${API_KEY}`
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
// Create a URL
    const url = `${ROOT_URL}&q=${city},us`;

//Make AJAX call
    const request = axios.get(url);

    // console.log('Request:', request)

//Return a promise:
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}