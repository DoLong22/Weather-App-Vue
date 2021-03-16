<template>
  <div class="container forecast-weather">
    <div class="row select-more">
      <div class="col select-time">
        <span class = "clicked">Today</span>
        <span>Tomorrow</span>
      </div>
      <div class="col"></div>
      <div class="col more-info"><span>See All</span></div>
    </div>
    <div class="row">
      <div class="col" v-for="weather in forecastWeather" v-bind:key="weather">
        <img :src="checkWeather(weather)" alt="" srcset="" />
        <span class = "temperature temperature--small">{{ weather.tempC }}</span>
        <p>{{ calTime(weather) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForecastWeather",
  props: {
    forecastWeather: {
      type: Array,
      default: () => [],
    },
  },
  computed:{
      
  },
  methods: {
    calTime(weather){
        const time = weather?.time / 100;
        if(time < 6){
            return "Morning";
        }else if(time < 12){
            return "Afternoon";
        }else if(time < 18){
            return "Evening";
        }else{
            return "Night";
        }
    },
    checkWeather(weather) {
      const time = weather.time / 100;
      const weartherDes = weather.weatherDesc[0]?.value.toLocaleLowerCase();
      console.log(time);
      if (time < 18) {
        if (weartherDes.includes("cloudy")) {
          return `img/day-${weartherDes}.png`;
        } else if (weartherDes.includes("rain")) {
          return `img/day-rain.png`;
        } else {
          return `img/day.png`;
        }
      } else if (time >= 18 && weartherDes.includes("cloudy")) {
        return `img/night-${weartherDes}.png`;
      } else {
        return "img/night.png";
      }
    },
  },
};
</script>

<style></style>
