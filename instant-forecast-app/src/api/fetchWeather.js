import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APIkey = '4565bf6d3b1644abc7c812fe18656f9f';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q:query,
            units: 'matric',
            lat:40.863372,
            lon:-74.113181,
            AppID: APIkey,
        }
    });
    return data;
}