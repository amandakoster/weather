import axios from 'axios';

const API_KEY = '945b3d7fb367461654a9709c48d81389';
const ROOT_URL = `https://home.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHE,
        payload: request
    };
}