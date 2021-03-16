<template>
  <div class="container home">
    <CurrentWeather v-if="finishFetchData" :currentWeather="currentWeather" :address="address"/>
    <ForecastWeather :forecastWeather="forecastWeather"/>
  </div>
</template>

<script>
import WeatherServices from "@/services/weather.service";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

export default {
  components: {CurrentWeather, ForecastWeather },
  name: "Home",
  data() {
    return {
        currentWeather:{},
        address: {},
        forecastWeather: [],
        weatherDesc:'',
        finishFetchData: false,  
    };
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    async fetchWeather() {
      try{
        const response = await WeatherServices.getWeather();
        this.currentWeather = response.data?.data?.current_condition[0];
        this.weatherDesc = this.currentWeather.weatherDesc[0]?.value;
        this.address = response.data?.data?.request[0];
        this.forecastWeather = response.data?.data?.weather[0]?.hourly.slice(1);
        this.finishFetchData = true;
      }catch(error){
        return error;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../resources/css/home.scss";
</style>
