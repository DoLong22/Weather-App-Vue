import axios from 'axios'
const weatherApi = axios.create({
    baseURL: process.env.VUE_APP_URLV2,
})
export default {
    getWeather(city='Ha Noi') {
        return weatherApi.get('', {
            params: {
                query: city
            }
        })
    }
}